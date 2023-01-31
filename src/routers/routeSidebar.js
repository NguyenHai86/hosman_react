import { PATH } from './path';
import QuanLyPhong from '../views/QuanLyPhong/QuanLyPhong';
export const routes = [
    {
        path: PATH.QLPHONG,
        exact: true,
        main: () => <QuanLyPhong />,
    },
];
