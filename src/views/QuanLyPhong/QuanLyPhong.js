import React from "react";
import "./QuanLyPhong.scss";
import { useOutletContext } from "react-router-dom";
function QuanLyPhong() {
  const { currentKhuTro } = useOutletContext();
  //   console.log("Quan ly phong", currentKhuTro);
  return (
    <>
      <div></div>
      <div>Quan Ly Phong</div>
    </>
  );
}
export default QuanLyPhong;
