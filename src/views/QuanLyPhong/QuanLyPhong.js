import React, { useEffect, useState } from "react";
import "./QuanLyPhong.scss";
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { VND } from "../../Util/Format";
import ThemPhong from "../ThemPhong/ThemPhong";
function QuanLyPhong() {
  const [flag, setFlag] = useState(true);
  const [themPhong, setThemPhong] = useState(false);
  const currentKhuTro = useSelector((state) => state.khuTro.currentKhuTro);
  let timeout;
  const listPhongTro = useSelector((state) => state.phongTro);
  const [listPhongTroClone, setListPhongTroClone] = useState(listPhongTro);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEmpty(currentKhuTro) && flag === true) {
      setFlag(false);
      dispatch(actions.actFetchPhongTroRequest(currentKhuTro.maKhuTro));
    }
  }, [currentKhuTro]);
  const onChangeSearch = (event) => {
    var searchText = event.target.value; // this is the search text
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      searchText = searchText.trim();
      console.log(searchText);
      if (searchText && searchText.length > 0) {
        var search = new RegExp(searchText, "i"); // prepare a regex object
        setListPhongTroClone(
          listPhongTro.filter(
            (item) => search.test(item.giaThue) || search.test(item.tenPhong)
          )
        );
      } else {
        setListPhongTroClone(listPhongTro);
      }
    }, 300);
  };
  const mapDanhSachPhong = () => {
    listPhongTroClone.sort();
    return listPhongTroClone.map((phong) => {
      return (
        <div key={phong.maPhong} className="list__item">
          <div className="list__title">
            <i className="fa-regular fa-house"></i>
            <span>{phong.tenPhong}</span>
          </div>
          <div className="list__buttons"></div>
          <h3 className="list__name">Nguyễn Duy Hải</h3>
          <h3 className="list__price">{VND.format(phong.giaThue)}</h3>
        </div>
      );
    });
  };
  return (
    <div className="quanlyphong">
      <div className="header">
        <h2>Quản lý danh sách phòng</h2>
        <button onClick={() => setThemPhong(true)} className="header__button">
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
            size="small"
            onChange={onChangeSearch}
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

      <div className="list">{mapDanhSachPhong()}</div>
      {themPhong ? (
        <ThemPhong themPhong={themPhong} setThemPhong={setThemPhong} />
      ) : (
        ""
      )}
    </div>
  );
}
export default QuanLyPhong;
