interface Props {
    width?: string;
    height?: string
}

export default ({ width, height }: Props) => {
    return (
      <div
        style={{
                background: `linear-gradient(to right, var(--fg) 0%, transparent )`,
                width: width ? width : `50%`,
                height: height ? height : `1px`,
                opacity: ".15",
          marginBottom: "1rem",
            marginTop: "1rem"
        }}
      ></div>
    );
}