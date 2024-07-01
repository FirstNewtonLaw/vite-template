import Head from "../components/Head"
import "../styles/pages/page404.css";

export default () => {
    return (
        <>
            <Head
                title="*"
                description="Page 404 - Content not found" />
            <div className="page404">
                <span>
                    <a href="/">Page 404</a> Content not found
                </span>
            </div>
        </>
    )
}