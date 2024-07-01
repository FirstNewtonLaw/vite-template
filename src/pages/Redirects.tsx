import {default as redirs} from "../data/redirects";
import { useParams } from "react-router-dom";
import useQuery from "../lib/useQuery";
import Page404 from "./Page404";

export default () => {
    const { slug } = useParams()
    const repo = useQuery().get("repo")
    const redir = redirs.find(f => f.location.toLowerCase().replace("/", "") === slug?.toLowerCase())
    if (!redir) return <Page404 />
    let destination = redir.destination;
    if (redir.location.includes("gh") && repo) {
        destination = redir.destination + `/${repo}`
    }
    window.location.href = destination
    return (
        <>
            <p style={{marginTop: "2rem"}} className="op-30">Redirecting</p>
        </>
    )
}