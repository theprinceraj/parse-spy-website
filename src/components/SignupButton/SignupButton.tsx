import "./SignupButton.css";
export const SignupButton = ({ withinEmailInputBox = false }: { withinEmailInputBox?: boolean }) => {
    return (
        <button type="submit" className="signup-btn">
            {withinEmailInputBox ? "Sign up" : <a href="#emailInput">Sign up</a>}
        </button>
    );
};
