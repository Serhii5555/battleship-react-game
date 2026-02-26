import { Link } from "react-router-dom";

interface PageComponentProps {
  title: string;
  text?: string;
  buttonText: string;
  buttonLink: string;
  result?: string;
}

export default function PageComponent({
  title,
  text,
  buttonText,
  buttonLink,
  result,
}: PageComponentProps) {
  return (
    <div className="page">
      <h1>{title}</h1>
      {text && <p>{text}</p>} {result && <p>{result}</p>}
      <Link to={buttonLink} className="page-button">
        {buttonText}
      </Link>
    </div>
  );
}
