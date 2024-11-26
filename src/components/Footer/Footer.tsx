import "./Footer.css";
import ParseSpyLogo from "/favicon.svg";
export const Footer = () => {
    return (
        <footer>
            <div id="footer-first-section">
                <div>
                    <img src={ParseSpyLogo} alt="Parse Spy Logo" />
                </div>
                <div className="list-container">
                    <h6 className="list-heading">The Creators</h6>
                    <ul>
                        <li>
                            <a href="http://github.com/theprinceraj" target="_blank" rel="noopener noreferrer">
                                <p>Prince Raj</p>
                            </a>
                        </li>
                        <li>
                            <a href="http://github.com/AD11-web" target="_blank" rel="noopener noreferrer">
                                <p>Ankit Das</p>
                            </a>
                        </li>
                        <li>
                            <a href="http://github.com/ayush215mb" target="_blank" rel="noopener noreferrer">
                                <p>Ayush Yadav</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="list-container">
                    <h6 className="list-heading">The Tech Stack</h6>
                    <ul>
                        <li>
                            <p>NodeJS</p>
                        </li>
                        <li>
                            <p>ElectronJS</p>
                        </li>
                        <li>
                            <p>Selenium Webdriver</p>
                        </li>
                        <li>
                            <p>Vercel</p>
                        </li>
                        <li>
                            <p>PDFKit</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="footer-second-section">
                <p>ParseSpy</p>
            </div>
        </footer>
    );
};
