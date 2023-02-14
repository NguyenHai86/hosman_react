import React from "react";
import "./QuanLyPhong.scss";
import { useOutletContext } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
function QuanLyPhong() {
  const [currentKhuTro] = useOutletContext();
  const handleThemPhong = () => {};
  return (
    <div className="quanlyphong">
      <div className="header">
        <h2>Quản lý danh sách phòng</h2>
        <button onClick={handleThemPhong} className="header__button">
          <i className="fas fa-plus header__button__icon"></i>
        </button>
      </div>
      <div className="bar">
        <div className="bar__filter--icon">
          <i className="fas fa-filter"></i>
        </div>

        <div className="bar__filter--list">
          <FormControlLabel control={<Checkbox />} label="Phòng đang ở" />
          <FormControlLabel control={<Checkbox />} label="Phòng trống" />
          <FormControlLabel control={<Checkbox />} label="Phòng sắp hết hạn" />
          <FormControlLabel control={<Checkbox />} label="Đang cọc giữ phòng" />
          <FormControlLabel control={<Checkbox />} label="Đang nợ tiền" />
        </div>
        <div className="bar__search">
          <TextField
            fullWidth
            id="search"
            name="search"
            variant="outlined"
            type="text"
            placeholder="Tìm kiếm"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="bar__search--icon">
                    <i className="fa-solid fa-magnifying-glass "></i>
                  </IconButton>
                </InputAdornment>
              ),
            }}></TextField>
        </div>
        <div className="bar__export">
          <Button variant="contained" fullWidth>
            <i className="fa-solid fa-file-excel bar__export--icon"></i>
            <span>Xuất excel</span>
          </Button>
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
}
export default QuanLyPhong;
