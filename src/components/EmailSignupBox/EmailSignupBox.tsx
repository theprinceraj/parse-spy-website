import "./EmailSignupBox.css";
import { SignupButton } from "../SignupButton/SignupButton";
import { FormEvent, useRef } from "react";

export const EmailSignupBox = () => {
    const emailInputRef = useRef<HTMLInputElement>(null);
    const betaSignupURL = "https://parse-spy-backend.vercel.app/api/beta-access/signup?email=";
    async function handleFormSubmit(): Promise<void> {
        if (!emailInputRef.current) return alert("Please fill the email field correctly.");
        const email = emailInputRef.current.value.trim();
        const response = await fetch(betaSignupURL + email, {
            method: "POST",
            redirect: "follow",
        });
        if (response.ok) return alert("You have been signed up for the beta access using your e-mail address.");
        const data = await response.json();
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
            />
            <SignupButton withinEmailInputBox={true} />
        </form>
    );
};
