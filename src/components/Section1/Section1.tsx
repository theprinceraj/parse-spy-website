import { EmailSignupBox } from "../EmailSignupBox/EmailSignupBox";
import "./Section1.css";
import HeroSectionBG from "../../assets/hero-section-bg.webp";
import DemoHomePage from "../../assets/software-demo-home-page.webp";
import DemoMainPage from "../../assets/software-demo-main-page.webp";
import MessageBox from "../../assets/msgbox.webp";
import Globe from "../../assets/globe.webp";
import Calendar from "../../assets/calendar.webp";
export const Section1 = () => {
    return (
        <section className="section">
            <div className="floating-box">Heyo! We launched our Beta!</div>
            <div className="section-heading">
                <div>
                    <span>Quicker investigations.</span>
                    <span>No hassle.</span>
                </div>
            </div>
            <p className="section-content">
                <div>
                    <span>Enjoy unlimited investigation reports for just $12/week.</span>
                    <span>No hidden fees, or headaches.</span>
                </div>
            </p>
            <EmailSignupBox />
            <div className="section-gallery">
                <img src={HeroSectionBG} alt="Hero Section Background" id="hero-section-bg" />
                <img src={DemoHomePage} alt="Software Home Page" id="demo-home-page-ss" />
                <img src={DemoMainPage} alt="Software Main Page" id="demo-main-page-ss" />
            </div>
            <div className="additional-cards">
                <div>
                    <div>
                        <img src={MessageBox} alt="Message Box Image" />
                    </div>
                    <p>
                        Chat lookups
                        <br />
                        made easier
                    </p>
                </div>
                <div>
                    <div>
                        <img src={Globe} alt="Globe Image" />
                    </div>
                    <p>
                        Supports major
                        <br />
                        social media platforms
                    </p>
                </div>
                <div>
                    <div>
                        <img src={Calendar} alt="Calendar Image" />
                    </div>
                    <p>
                        Cancel
                        <br />
                        anytime
                    </p>
                </div>
            </div>
            <div className="additional-note">
                <p>*Subject to our Play by the Rules policy</p>
            </div>
        </section>
    );
};
