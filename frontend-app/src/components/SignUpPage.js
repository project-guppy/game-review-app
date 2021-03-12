import SignUp from "./Signup";
import "./SignUpPage.css";

const SignUpPage = () => {
    return (
        <div className="suPageWrapper">
            <div className="signUpTitle">
                <h1>Please submit a username and password to sign up to Guppy Gaming Reviews</h1>
            </div>
            <div className="signUpWrapper">
                <SignUp />
            </div>
        </div>
    )
}
export default SignUpPage;