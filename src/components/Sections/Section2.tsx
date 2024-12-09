import "./Section2.css";
import { Section } from "../SectionTemplate/Section";
import CheckIconSVG from "../../assets/check-icon.svg";
import qrCodeImg from "../../assets/qr-code.webp";
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
                            <h5>$69</h5>
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
                            A predictable phone plan
                            <br />
                            without costly roaming fees.
                        </p>
                    </div>
                </div>
                <div className="features-card" id="features-card-2">
                    <div className="feature-card-visual">
                        <div className="qr-borders"></div>
                        <div className="qr-borders"></div>
                        <img src={qrCodeImg} alt="Parse Spy QR Code" />
                        <div className="qr-borders"></div>
                        <div className="qr-borders"></div>
                    </div>
                    <div className="feature-card-content">
                        <h6 className="feature-card-heading">Fast & Easy</h6>
                        <p className="feature-card-description">
                            Get started in minutes. Just scan a<br />
                            QR code and you’re ready to go.
                        </p>
                    </div>
                </div>
                <div className="features-card" id="features-card-3">
                    <div className="feature-card-visual"></div>
                    <div className="feature-card-content">
                        <h6 className="feature-card-heading">Expat Friendly</h6>
                        <p className="feature-card-description">
                            No SSN or US bank needed.
                            <br />
                            Activate before arriving in the US.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};
