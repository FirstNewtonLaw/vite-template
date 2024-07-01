import "../styles/components/navbar.css";

interface Props {
  extras?: { name: string;  href: string}[]
}

export default ({ extras }: Props) => {
    return (
      <div className="navbar">
            <div className="branding">
          <h1 onClick={(e) => {
            window.location.href = "/"
                }}>*</h1>
        </div>
        <div className="list">
          <ul>
            {extras?.map((extra) => {
              return <li><a href={extra.href}>{extra.name}</a></li>
            })}
            <li>
              <a href="/gh">Github</a>
            </li>
          </ul>
        </div>
      </div>
    );
}