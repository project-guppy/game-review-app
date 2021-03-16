const fs = require("fs");
const fetch = require("node-fetch");
require("dotenv").config();

const getAuthToken = async () => {
  const baseurl = "https://id.twitch.tv/oauth2/";
  const endpoint = "token";
  const query = `?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=client_credentials`;
  const url = baseurl + endpoint + query;
  return await fetch(url, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => data.access_token)
    .catch((err) => {
      throw new Error(`Unable to get auth token from twitch: ${err}`);
    });
};

const getVideoGames = async (numberOfEntries = 20, options) => {
  const baseurl = "https://api.igdb.com/v4/";
  const endpoint = "games";
  const url = baseurl + endpoint;
  console.log(`Fetching video game data from endpoint: ${url}`);
  const data = await fetch(url, {
    method: "POST",
    headers: {
      "Client-ID": process.env.CLIENT_ID,
      Authorization: `Bearer ${await getAuthToken()}`,
      Accept: "application/json",
    },
    body: `fields name,rating,cover.url,follows,hypes,genres.name,screenshots.url,summary,involved_companies.company.name,release_dates.*;where release_dates.platform = 48 & hypes > 20;limit ${numberOfEntries};`,
  })
    .then((res) => res.json())
    .then((data) =>
      data.map((game) => {
        return {
          ...game,
          cover: reformatImgUrl(game.cover?.url, "t_cover_big"),
          screenshots: game.screenshots?.map((shot) =>
            reformatImgUrl(shot.url, "t_screenshot_big")
          ),
          genres: game.genres?.map((genre) => genre.name),
          involved_companies: game.involved_companies?.map(
            (company) => company.company.name
          ),
          release_dates: game.release_dates?.map((release) => ({
            timestamp: release.date,
            human: release.human,
          })),
          reviews: options?.dummyReviews
            ? insertDummyReviews(options?.dummyReviews)
            : null,
        };
      })
    )
    .catch((err) => {
      throw new Error(`Unable to get video game data: ${err}`);
    });

  return data;
};

const writeToFile = async (filename) => {
  const data = await getVideoGames();
  const result = JSON.stringify(
    {
      data: data.map((game) => {
        return {
          ...game,
        };
      }),
    },
    null,
    2
  );
  try {
    fs.writeFile(filename, result, () => {});
  } catch {
    throw new Error(`unable to wite data to file: ${filename}`);
  }
};

const reformatImgUrl = (url, to, from = "t_thumb") => {
  if (!url) return null;
  return "https:" + url.replace(from, to);
};

const insertDummyReviews = () => {
  try {
    const numberOfReviews = Math.floor(Math.random() * 20 + 1);
    const reviewList = [];
    let i = 0;
    while (i < numberOfReviews) {
      reviewList.push(
        dummyReviews[Math.floor(Math.random() * dummyReviews.length)]
      );
      i++;
    }
  } catch (err) {
    throw new Error(`Unable to insert Dummy Review Data: ${err}`);
  }

  return reviewList;
};

module.exports = { getVideoGames, writeToFile };
