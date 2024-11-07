import "./App.css";
import { Footer } from "./components/Footer/Footer.tsx";
import { Navbar } from "./components/Navbar/Navbar.tsx";
import { Section1 } from "./components/Section1/Section1.tsx";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Section1 />
            </main>
            <Footer />
        </>
    );
}

export default App;
