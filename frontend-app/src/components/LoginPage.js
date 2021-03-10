import LogIn from "./Login";
import "./LoginPage.css";

const LoginPage = () => {
    return (
        <div>
            <div className="loginTitle">
                <h1>Please enter your username and password to login:</h1>
            </div>
            <div className="loginWrapper">
                <LogIn />
            </div>
        </div>
    )
}
export default LoginPage;