import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import logoFacebook from './../../assets/images/facebookIcon.svg';
import logoGoogle from './../../assets/images/googleIcon.svg';
import { PATH } from '../../routers/path';
import * as actions from './../../store/actions/index';
import { connect } from 'react-redux';
class Login extends React.Component {
    state = {
        isShowPass: false,
    };
    handleShowHidePass = () => {
        this.setState({
            isShowPass: !this.state.isShowPass,
        });
    };
    handleLogin = () => {
        let loginbody = {
            email: 'nam123@gmail.com',
            matkhau: '123',
        };
        this.props.login(loginbody);
    };

    render() {
        return (
            <div className="login">
                <p className="login__title">ĐĂNG NHẬP</p>
                <div className="login__groupbtn">
                    <button className="login__groupbtn__item">
                        <img src={logoGoogle} alt="logo Google" />
                        <span>Đăng nhập bằng Google</span>
                    </button>
                    <button className="login__groupbtn__item">
                        <img src={logoFacebook} alt="logo facebook" />
                        <span>Đăng nhập bằng Facebook</span>
                    </button>
                </div>
                <p className="login__spanor">HOẶC</p>
                <div className="form">
                    <div className="form__inputgroup">
                        <label htmlFor="username">Tài khoản</label>
                        <input placeholder="" id="username" />
                    </div>
                    <div className="form__inputgroup ">
                        <label htmlFor="password">Mật khẩu</label>

                        <div className="form__inputpassword">
                            <input type={this.state.isShowPass ? 'text' : 'password'} id="password" />
                            {this.state.isShowPass ? (
                                <i
                                    className="fa-solid fa-eye-slash form__inputpassword__icon"
                                    onClick={() => this.handleShowHidePass()}
                                ></i>
                            ) : (
                                <i
                                    className="fa-solid fa-eye form__inputpassword__icon"
                                    onClick={() => this.handleShowHidePass()}
                                ></i>
                            )}
                        </div>
                    </div>
                    <button className="form__button" onClick={() => this.handleLogin()}>
                        ĐĂNG NHẬP
                    </button>
                    <div className="form__link">
                        <div>
                            <span>Bạn chưa có tài khoản ?</span>
                            <Link className="form__link__login" to={PATH.SIGNUP}>
                                Đăng ký
                            </Link>
                        </div>
                        <Link className="form__link__forget" to={'#'}>
                            Quên mật khẩu
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        login: (loginbody) => {
            dispatch(actions.actLoginRequest(loginbody));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
