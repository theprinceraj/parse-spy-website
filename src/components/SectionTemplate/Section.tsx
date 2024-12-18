import { FloatingBox } from "../FloatingBox/FloatingBox";
import "./Section.css";

type Props = React.PropsWithChildren<{
    floatingBoxText: string | null | undefined;
    heading: Array<string>;
    description: Array<string>;
    specificCSS?: React.CSSProperties | undefined;
}>;

export const Section = ({ floatingBoxText, heading, description, specificCSS, children }: Props) => {
    return (
        <section className="section" style={specificCSS}>
            <FloatingBox text={floatingBoxText} />
            <div className="section-heading">
                <div>
                    <span>{heading[0]}</span>
                    <span>{heading[1]}</span>
                </div>
            </div>
            <p className="section-description">
                <div>
                    <span>{description[0]}</span>
                    <span>{description[1]}</span>
                </div>
            </p>
            {children}
        </section>
    );
};
