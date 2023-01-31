import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SideBar from './../SideBar/SideBar';
import './ManagerMotel.scss';
import { routes } from '../../routers/routeSidebar';
class ManagerMotel extends React.Component {
    mapRouterSidebar = () => {
        return routes.map((route, index) => {
            return <Route key={index} path={route.path} exact={route.exact} component={route.main} />;
        });
    };

    render() {
        return (
            <div className="page">
                <div className="page__sidebar">
                    <SideBar />
                </div>
                <div className="page__container">{/* <Switch>{this.mapRouterSidebar()}</Switch> */}</div>
            </div>
        );
    }
}
export default ManagerMotel;
