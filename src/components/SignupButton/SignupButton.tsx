import "./SignupButton.css";

interface SignupButtonProps {
    withinEmailInputBox?: boolean;
    isLoading?: boolean;
}

export const SignupButton = ({ withinEmailInputBox = false, isLoading = false }: SignupButtonProps) => {
    if (isLoading)
        return (
            <button type="submit" className="signup-btn" disabled>
                <span className="loader"></span>
            </button>
        );
    else
        return (
            <button type="submit" className="signup-btn">
                {withinEmailInputBox ? "Sign up" : <a href="#emailInput">Sign up</a>}
            </button>
        );
};
