import "./Section2.css";
import { Section } from "../SectionTemplate/Section";
import CheckIconSVG from "../../assets/check-icon.svg";
import qrCodeImg from "../../assets/qr-code.webp";
import featureVisualImg from "../../assets/feature-visual-img.webp";
import { FeatureCard } from "../Feature Card/FeatureCard";
export const Section2 = () => {
    return (
        <Section
            floatingBoxText={null}
            heading={["Secure investigations.", "Anytime, anywhere."]}
            description={["Begin in under 5 minutes.", "Start capturing insights from anywhere, anytime."]}>
            <div className="features-grid">
                <FeatureCard
                    heading="Simple"
                    description={["An easy-to-use investigation tool", "without costly any hidden fees."]}
                    bgColor="#ebf6f2"
                    elementID="features-card-1">
                    <div>
                        <p>Monthly fee</p>
                        <h5>$40</h5>
                        <h6>
                            <span>
                                <img src={CheckIconSVG} className="check-icon" alt="Check Icon" />
                            </span>
                            <span>All inclusive</span>
                        </h6>
                    </div>
                </FeatureCard>
                <FeatureCard
                    heading="Fast & Easy"
                    description={["Get started with a click", "and we'll take care of the rest."]}
                    bgColor="#e9eff6"
                    elementID="features-card-2">
                    <div className="qr-code-container">
                        <div className="qr-borders"></div>
                        <div className="qr-borders"></div>
                        <img src={qrCodeImg} alt="Parse Spy QR Code" />
                        <div className="qr-borders"></div>
                        <div className="qr-borders"></div>
                        <div className="qr-code-highlight"></div>
                    </div>
                </FeatureCard>
                <FeatureCard
                    heading="Security First"
                    description={["Safeguards keep your data private.", "Prioritizing your peace of mind."]}
                    bgColor="#f2eff5"
                    elementID="features-card-3">
                    <img src={featureVisualImg} alt="Feature Visual Image" />
                </FeatureCard>
            </div>
        </Section>
    );
};
