export default function Error({errorType}) {
    return (
        <div style={{width:"100%", padding:"100px"}}>
            <h2>There was a problem loading this page:</h2>
            <h3>{errorType}</h3>
        </div>
    );
}