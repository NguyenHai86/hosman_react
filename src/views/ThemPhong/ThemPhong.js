import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ThemPhong.scss";
import * as actions from "./../../store/actions";
const styleBox = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  maxHeight: "90vh",
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
    dispatch(actions.actFetchTienIchKhuTroRequest(currentKhuTro.maKhuTro));
  }, []);

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
                control={<Checkbox defaultCheckek />}
                label="cho phép thuê"
                fullWidth
              />
            </div>
            <div className="textfield-ghichu">
              <TextField label="Ghi chú" fullWidth />
            </div>

            <div className="table">
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  size="small"
                  aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right" width={"4rem"}>
                        Tick
                      </TableCell>
                      <TableCell align="right">Tên tiện ích</TableCell>
                      <TableCell align="right">Ghi chú</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tienIch.map((row) => (
                      <TableRow
                        key={row.maTienIch}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}>
                        <TableCell align="right" width={"4rem"}>
                          <Checkbox />
                        </TableCell>
                        <TableCell align="right">{row.tenTienIch}</TableCell>
                        <TableCell align="right">{row.ghiChu}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
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
