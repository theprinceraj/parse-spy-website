import "./FeatureCard.css";
type FeatureCardProps = React.PropsWithChildren<{
    heading: string;
    description: Array<string>;
    elementID: string;
    bgColor: string;
}>;
export const FeatureCard = ({ heading, description, elementID, bgColor, children }: FeatureCardProps) => {
    return (
        <div className="features-card" id={elementID} style={{ backgroundColor: bgColor }}>
            <div className="feature-card-visual">{children}</div>
            <div className="feature-card-content">
                <h6 className="feature-card-heading">{heading}</h6>
                <p className="feature-card-description">
                    {description[0]}
                    <br />
                    {description[1]}
                </p>
            </div>
        </div>
    );
};
