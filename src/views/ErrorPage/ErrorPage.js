import "./ErrorPage.scss";
import errorImage from "./../../assets/images/errorImage.svg";
export default function ErrorPage() {
  return (
    <div className="errorpage">
      <img src={errorImage} alt="error page" />
    </div>
  );
}
