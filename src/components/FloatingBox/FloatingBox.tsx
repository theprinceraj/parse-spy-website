import "./FloatingBox.css";
export const FloatingBox = ({ text }: { text: string | null | undefined }) => {
    if (!text) {
        return null;
    }
    return <div className="floating-box">{text}</div>;
};
