import "./Section2.css";
import { Section } from "../SectionTemplate/Section";
import CheckIconSVG from "../../assets/check-icon.svg";
import qrCodeImg from "../../assets/qr-code.webp";
import featureVisualImg from "../../assets/feature-visual-img.webp";
export const Section2 = () => {
    return (
        <Section
            floatingBoxText={null}
            heading={["Secure investigations.", "Anytime, anywhere."]}
            description={["Begin in under 5 minutes.", "Start capturing insights from anywhere, anytime."]}>
            <div className="features-grid">
                <div className="features-card" id="features-card-1">
                    <div className="feature-card-visual">
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
                    </div>
                    <div className="feature-card-content">
                        <h6 className="feature-card-heading">Simple</h6>
                        <p className="feature-card-description">
                            An easy-to-use investigation tool
                            <br />
                            without costly any hidden fees.
                        </p>
                    </div>
                </div>
                <div className="features-card" id="features-card-2">
                    <div className="feature-card-visual">
                        <div className="qr-code-container">
                            <div className="qr-borders"></div>
                            <div className="qr-borders"></div>
                            <img src={qrCodeImg} alt="Parse Spy QR Code" />
                            <div className="qr-borders"></div>
                            <div className="qr-borders"></div>
                            <div className="qr-code-highlight"></div>
                        </div>
                    </div>
                    <div className="feature-card-content">
                        <h6 className="feature-card-heading">Fast & Easy</h6>
                        <p className="feature-card-description">
                            Get started with a click
                            <br />
                            and we'll take care of the rest.
                        </p>
                    </div>
                </div>
                <div className="features-card" id="features-card-3">
                    <div className="feature-card-visual">
                        <img src={featureVisualImg} alt="Feature Visual Image" />
                    </div>
                    <div className="feature-card-content">
                        <h6 className="feature-card-heading">Security First</h6>
                        <p className="feature-card-description">
                            Safeguards keep your data private.
                            <br />
                            Prioritizing your peace of mind.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};
