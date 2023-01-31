import React from 'react';
import './NotFoundPage.scss';
import imageNotFound from './../../assets/images/notfound.svg';
class NotFoundPage extends React.Component {
    render() {
        return (
            <div className="notfoundpage">
                <img src={imageNotFound} alt="not found page" />
            </div>
        );
    }
}
export default NotFoundPage;
