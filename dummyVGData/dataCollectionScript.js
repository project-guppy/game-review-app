const fetch = require("node-fetch");
const fs = require("fs");
require("dotenv").config();
require("fs");

const getAuthToken = async () => {
  const baseurl = "https://id.twitch.tv/oauth2/";
  const endpoint = "token";
  const query = `?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=client_credentials`;
  const url = baseurl + endpoint + query;
  return await fetch(url, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => data.access_token);
};

const getVideoGameData = async (numberOfEntries) => {
  const baseurl = "https://api.igdb.com/v4/";
  const endpoint = "games";
  const url = baseurl + endpoint;
  console.log(process.env.CLIENT_ID);
  console.log(url);
  const data = await fetch(url, {
    method: "POST",
    headers: {
      "Client-ID": process.env.CLIENT_ID,
      Authorization: `Bearer ${await getAuthToken()}`,
      Accept: "application/json",
    },
    body: `fields name,rating,cover.url,genres.name,screenshots.url,summary,involved_companies.company.name,release_dates.*;limit 200;sort release_dates.date desc;where rating >= 80;`,
  })
    .then((res) => res.json())
    .then((data) =>
      data.map((game) => {
        return {
          ...game,
          cover:
            "cover" in game
              ? reformatImgUrl(game.cover.url, "t_thumb", "t_cover_big")
              : null,
          screenshots:
            "screenshots" in game
              ? game.screenshots.map((shot) =>
                  reformatImgUrl(shot.url, "t_thumb", "t_cover_big")
                )
              : null,
          genres:
            "genres" in game ? game.genres.map((genre) => genre.name) : null,
          involved_companies:
            "involved_companies" in game
              ? game.involved_companies.map((company) => company.company.name)
              : null,
          release_dates:
            "release_dates" in game
              ? game.release_dates.map((release) => ({
                  timestamp: release.date,
                  human: release.human,
                }))
              : null,
        };
      })
    );
  return data;
};

const writeToFile = async () => {
  const data = await getVideoGameData();
  const result = JSON.stringify(
    data.map((game) => {
      return {
        ...game,
      };
    }),
    null,
    2
  );
  fs.writeFile("test.json", result, () => {});
};

const reformatImgUrl = (url, from = "t_thumb", to) => {
  return "https:" + url.replace(from, to);
};

// const getGameImage = async (game_id) => {
//   const baseurl = "https://api.igdb.com/v4/";
//   const endpoint = "games";
//   const query = `?fields=covers.*&where_id${game_id}`;
//   const url = baseurl + endpoint + query;
//   console.log(process.env.CLIENT_ID);
//   console.log(url);
//   const data = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Client-ID": process.env.CLIENT_ID,
//       Authorization: `Bearer ${await getAuthToken()}`,
//       Accept: "application/json",
//     },
//   }).then((res) => res.json());
//   console.log(data);
// };

writeToFile();
// getAuthToken();
// getGameImage(70);
