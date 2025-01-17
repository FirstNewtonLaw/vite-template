import { Helmet } from "react-helmet";

interface Props {
    title?: string;
    description?: string;
}

export default ({ title, description }: Props) => {
    return <Helmet>
        <title>{title ? title : "*"}</title>
        <meta name="description" content={description ? description : ""} />
    </Helmet>
}