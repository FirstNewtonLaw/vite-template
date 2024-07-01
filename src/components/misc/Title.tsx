import "../../styles/components/title.css";

interface Props {
    children: string;
}

export default ({ children }: Props) => {
    let currentUrl = window.location.href
    currentUrl = currentUrl.endsWith("/") ? `${currentUrl}` : `${currentUrl}/`;
    const id = children.toLowerCase().split(" ").join("-");
    return (
      <a className="title" href={`${currentUrl}#${id}`} id={id}>
        <h1>{children}</h1>
        <i className="ri-link titleLink"></i>
      </a>
    );
}