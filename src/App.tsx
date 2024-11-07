import "./App.css";
import { Footer } from "./components/Footer/Footer.tsx";
import { Navbar } from "./components/Navbar/Navbar.tsx";
import { Section1 } from "./components/Sections/Section1.tsx";
import { Section2 } from "./components/Sections/Section2.tsx";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Section1 />
                <Section2 />
            </main>
            <Footer />
        </>
    );
}

export default App;
