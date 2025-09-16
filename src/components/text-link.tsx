const TextLink = ({
  text,
  link,
  external = false,
}: {
  text: string;
  link: string;
  external: boolean;
}) => {
  return (
    <a
      href={link}
      target={external ? "_blank" : ""}
      rel={external ? "noreferrer" : ""}
      className="hover:border-b-2 hover:opacity-80"
    >
      {text}
    </a>
  );
};

export default TextLink;
