import React from 'react';
import { Link } from 'react-router-dom';
import './Sign.scss';
import logoFacebook from './../../assets/images/facebookIcon.svg';
import logoGoogle from './../../assets/images/googleIcon.svg';
import { PATH } from '../../routers/path';
class Sign extends React.Component {
    state = {
        isShowPass: false,
    };
    handleShowHidePass = () => {
        this.setState({
            isShowPass: !this.state.isShowPass,
        });
    };
    render() {
        return (
            <div className="sign">
                <p className="sign__title">TẠO TÀI KHOẢN</p>
                <div className="sign__groupbtn">
                    <button className="sign__groupbtn__item">
                        <img src={logoGoogle} alt="logo Google" />
                        <span>Đăng ký bằng Google</span>
                    </button>
                    <button className="sign__groupbtn__item">
                        <img src={logoFacebook} alt="logo facebook" />
                        <span>Đăng ký bằng Facebook</span>
                    </button>
                </div>
                <p className="sign__spanor">HOẶC</p>
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
                    <div className="form__inputgroup ">
                        <label htmlFor="repassword">Nhập lại mật khẩu</label>

                        <div className="form__inputpassword">
                            <input type={this.state.isShowPass ? 'text' : 'password'} id="repassword" />
                            {this.state.isShowPass ? (
                                <i
                                    class="fa-solid fa-eye-slash form__inputpassword__icon"
                                    onClick={() => this.handleShowHidePass()}
                                ></i>
                            ) : (
                                <i
                                    class="fa-solid fa-eye form__inputpassword__icon"
                                    onClick={() => this.handleShowHidePass()}
                                ></i>
                            )}
                        </div>
                    </div>
                    <button className="form__button">TẠO TÀI KHOẢN</button>
                    <div className="form__link">
                        <div>
                            <span>Bạn đã có tài khoản ?</span>
                            <Link className="form__link__login" to={PATH.LOGIN}>
                                Đăng nhập
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Sign;
