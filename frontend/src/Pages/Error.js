import Section from '../Components/Section';

export default function Error({errorType}) {
    return (
        <div style={{width:"100%"}}>
            <Section color="dark">
                <p>Error: {errorType}</p>
            </Section>
        </div>
    );
}