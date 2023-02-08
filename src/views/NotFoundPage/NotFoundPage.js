import React from "react";
import "./NotFoundPage.scss";
import imageNotFound from "./../../assets/images/notfound.svg";
export default function NotFoundPage() {
  return (
    <div className="notfoundpage">
      <img src={imageNotFound} alt="not found page" />
    </div>
  );
}
