export default function Section ({ children, color }) {

    return (
        <div className={color} style={{display: "flex", minWidth: "100%"}}>
            <div style={{paddingBlock:"60px", paddingInline:"100px", width: "100%"}}>
                {children}
            </div>
        </div>
    );
}