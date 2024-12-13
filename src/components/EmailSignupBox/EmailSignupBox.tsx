import "./EmailSignupBox.css";
import { SignupButton } from "../SignupButton/SignupButton";
import { FormEvent, useRef, useState } from "react";

export const EmailSignupBox = () => {
    const [isSignupButtonLoading, setIsSignupButtonLoading] = useState(false);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const betaSignupURL = "https://parse-spy-backend.vercel.app/api/beta-access/signup?email=";
    async function handleFormSubmit(): Promise<void> {
        if (!emailInputRef.current) return alert("Please fill the email field correctly.");
        const email = emailInputRef.current.value.trim();
        setIsSignupButtonLoading(true);
        const response = await fetch(betaSignupURL + email, {
            method: "POST",
            redirect: "follow",
        });
        let data;
        try {
            data = await response.json();
        } catch {
            return alert("Something went wrong. Please try again.");
        } finally {
            setIsSignupButtonLoading(false);
        }
        return alert(data.message);
    }
    return (
        <form
            onSubmit={(e: FormEvent) => {
                e.preventDefault();
                handleFormSubmit();
            }}>
            <input
                ref={emailInputRef}
                type="email"
                name="email"
                id="emailInput"
                maxLength={256}
                placeholder="Enter your e-mail"
                required
            />
            <SignupButton withinEmailInputBox={true} isLoading={isSignupButtonLoading} />
        </form>
    );
};
