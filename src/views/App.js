import React from 'react';
import { connect } from 'react-redux';
import ManagerMotel from './ManagerMotel/ManagerMotel';
import SignLogin from './SignLogin/SignLogin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class App extends React.Component {
    render() {
        return (
            <>
                {this.props.user.isLogin ? <ManagerMotel /> : <SignLogin />}
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};
export default connect(mapStateToProps, null)(App);
