import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import { Field, useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ThemPhong.scss";
import * as actions from "./../../store/actions";
const styleBox = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  maxHeight: "70vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  borderRadius: "1rem",
  boxShadow: 24,
  p: 4,
};

export default function ThemPhong(props) {
  const open = props.themPhong;
  const setOpen = props.setThemPhong;
  const dispatch = useDispatch();
  const tienIch = useSelector((state) => state.tienIch.tienich_khutro);
  const currentKhuTro = useSelector((state) => state.khuTro.currentKhuTro);
  useEffect(() => {
    // dispatch(actions.actFetchTienIchKhuTroRequest(currentKhuTro.maKhuTro));
  }, [currentKhuTro, tienIch]);
  console.log(tienIch);
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={styleBox}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ textAlign: "center", marginBottom: "3rem" }}>
            THÊM PHÒNG TRỌ
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="grid">
              <TextField label="Tên phòng" />
              <TextField label="Diện tích" />
            </div>

            <div className="grid">
              <TextField label="Giá thuê" fullWidth />
              <FormControlLabel
                control={<Checkbox />}
                label="cho phép thuê"
                fullWidth
              />
            </div>
            <div className="textfield-ghichu">
              <TextField label="Ghi chú" fullWidth />
            </div>
          </Typography>
          <Button variant="outlined" fullWidth>
            THÊM PHÒNG
          </Button>
        </Box>
      </Modal>
    </>
  );
}
