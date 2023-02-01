import { PATH } from './path';
import Login from '../views/SignLogin/Login';
import Sign from '../views/SignLogin/Sign';
export const routes = [
    {
        path: PATH.LOGIN,
        exact: true,
        main: () => <Login />,
    },
    {
        path: PATH.SIGNUP,
        exact: true,
        main: () => <Sign />,
    },
];
