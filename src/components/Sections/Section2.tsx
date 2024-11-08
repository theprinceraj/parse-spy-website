import "./Section2.css";
import { Section } from "../SectionTemplate/Section";

export const Section2 = () => {
    return (
        <Section
            floatingBoxText={null}
            heading={["Secure investigations.", "Anytime, anywhere."]}
            description={["Begin in under 5 minutes.", "Start capturing insights from anywhere, anytime."]}>
            <div className="feature-cards">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Section>
    );
};
