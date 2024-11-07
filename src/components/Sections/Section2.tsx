import { Section } from "../SectionTemplate/Section";
import "./Section2.css";

export const Section2 = () => {
    return (
        <Section
            floatingBoxText={null}
            heading={["A US number,", "with peace of mind"]}
            description={["Get started in 72 seconds.", "Activated from anywhere worldwide."]}>
            <div className="feature-cards">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Section>
    );
};
