import { Modal, Typography } from "@mui/material";
import { Box, height } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./DoiKhuTro.scss";
import * as actions from "./../../store/actions";
import { useNavigate } from "react-router";
const styleBox = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  maxHeight: "70vh",
  overflowY: "auto",
  bgcolor: "background.paper",

  borderRadius: "1rem",
  boxShadow: 24,
  p: 4,
};
export default function DoiKhuTro(props) {
  const setDoiKhuTro = props.setDoiKhuTro;
  const doiKhuTro = props.doiKhuTro;
  const navigate = useNavigate();
  const khuTro = useSelector((state) => state.khuTro.khuTro);
  const currentKhuTro = useSelector((state) => state.khuTro.currentKhuTro);

  const dispatch = useDispatch();
  const handleDoiKhuTro = (maKhuTro) => {
    if (maKhuTro == currentKhuTro.maKhuTro) setDoiKhuTro(false);
    else {
      dispatch(
        actions.actSetCurrentKhuTro(
          khuTro.find((item) => item.maKhuTro == maKhuTro)
        )
      );
      setDoiKhuTro(false);
      navigate("/quanly");
      toast.success("Đã thay đổi khu quản lý");
    }
  };
  const mapKhuTro = () => {
    if (khuTro.length > 0) {
      return khuTro.map((item, index) => {
        return (
          <div
            key={item.maKhuTro}
            onClick={() => handleDoiKhuTro(item.maKhuTro)}
            className={
              item.maKhuTro === currentKhuTro.maKhuTro
                ? "item item__active"
                : "item"
            }>
            <div className="item__name">{item.tenKhu}</div>
            <div className="item__number">
              <span>Số phòng: </span>
              {item.soPhong}
            </div>
            <div className="item__address">
              <span>Địa chỉ: </span>
              {item.diaChi}
            </div>
          </div>
        );
      });
    }
  };
  return (
    <Modal
      open={doiKhuTro}
      onClose={() => setDoiKhuTro(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={styleBox}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center" }}>
          CHỌN KHU TRỌ QUẢN LÝ
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {mapKhuTro()}
        </Typography>
      </Box>
    </Modal>
  );
}
