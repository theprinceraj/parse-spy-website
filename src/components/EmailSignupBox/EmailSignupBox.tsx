import "./EmailSignupBox.css";
import { SignupButton } from "../SignupButton/SignupButton";

export const EmailSignupBox = () => {
    return (
        <form>
            <input type="email" name="email" id="emailInput" maxLength={256} placeholder="Enter your e-mail"/>
            <SignupButton />
        </form>
    );
};
