import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

export default class Modals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signupData: {
                name: "",
                email: "",
                phone: "",
                password: "",
                isLoading: "",
            },
            msg: "",
        };
    }

    // onChangehandler = (e, key) => {
    //     const { signupData } = this.state;
    //     signupData[e.target.name] = e.target.value;
    //     this.setState({ signupData });
    // };
    // onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     this.setState({ isLoading: true });
    //     axios
    //         .post("http://localhost:8000/api/user-signup", this.state.signupData)
    //         .then((response) => {
    //             this.setState({ isLoading: false });
    //             if (response.data.status === 200) {
    //                 this.setState({
    //                     msg: response.data.message,
    //                     signupData: {
    //                         name: "",
    //                         email: "",
    //                         phone: "",
    //                         password: "",
    //                     },
    //                 });
    //                 setTimeout(() => {
    //                     this.setState({ msg: "" });
    //                 }, 2000);
    //             }
    //
    //             if (response.data.status === "failed") {
    //                 this.setState({ msg: response.data.message });
    //                 setTimeout(() => {
    //                     this.setState({ msg: "" });
    //                 }, 2000);
    //             }
    //         });
    // };
    render() {
        return(
        <div className="modal fade" id="signin-modal" tabIndex={-1} role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-secondary">
                        <ul className="nav nav-tabs card-header-tabs" role="tablist">
                            <li className="nav-item"><a className="nav-link fw-medium active" href="#signin-tab"
                                                        data-bs-toggle="tab" role="tab" aria-selected="true"><i
                                className="ci-unlocked me-2 mt-n1"/>Sign in</a></li>
                            <li className="nav-item"><a className="nav-link fw-medium" href="#signup-tab"
                                                        data-bs-toggle="tab" role="tab" aria-selected="false"><i
                                className="ci-user me-2 mt-n1"/>Sign up</a></li>
                        </ul>
                        <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"/>
                    </div>
                    <div className="modal-body tab-content py-4">
                        <Form className="needs-validation tab-pane fade show active" autoComplete="off" noValidate
                              id="signin-tab">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="si-email">Email address</label>
                                <input className="form-control" type="email" id="si-email"
                                       placeholder="johndoe@example.com" required/>
                                <div className="invalid-feedback">Please provide a valid email address.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="si-password">Password</label>
                                <div className="password-toggle">
                                    <input className="form-control" type="password" id="si-password" required/>
                                    <label className="password-toggle-btn" aria-label="Show/hide password">
                                        <input className="password-toggle-check" type="checkbox"/><span
                                        className="password-toggle-indicator"/>
                                    </label>
                                </div>
                            </div>
                            <div className="mb-3 d-flex flex-wrap justify-content-between">
                                <div className="form-check mb-2">
                                    <input className="form-check-input" type="checkbox" id="si-remember"/>
                                    <label className="form-check-label" htmlFor="si-remember">Remember me</label>
                                </div>
                                <a className="fs-sm" href="#">Forgot password?</a>
                            </div>
                            <button className="btn btn-primary btn-shadow d-block w-100" type="submit">Sign in</button>
                        </Form>
                        <Form method="POST" className="needs-validation tab-pane fade" autoComplete="off" noValidate
                              id="signup-tab">
                            <FormGroup>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="su-name">Full name</label>
                                    <Input className="form-control"
                                           type="name" id="su-name" name="name"
                                           placeholder="John Doe" value={this.state.signupData.name} onChange={this.onChangehandler} required/>
                                    <div className="invalid-feedback">Please fill in your name.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="su-email">Email address</label>
                                    <Input className="form-control" value={this.state.signupData.email}
                                           onChange={this.onChangehandler} name="email" type="email" id="su-email"
                                           placeholder="johndoe@example.com" required/>
                                    <div className="invalid-feedback">Please provide a valid email address.</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="su-password">Password</label>
                                    <div className="password-toggle">
                                        <input className="form-control" name="password" type="password" id="su-password"
                                               required/>
                                        <label className="password-toggle-btn" aria-label="Show/hide password">
                                            <input className="password-toggle-check" type="checkbox"/><span
                                            className="password-toggle-indicator"/>
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="su-password-confirm">Confirm password</label>
                                    <div className="password-toggle">
                                        <input className="form-control" name="password_confirmation" type="password"
                                               id="su-password-confirm" required/>
                                        <label className="password-toggle-btn" aria-label="Show/hide password">
                                            <input className="password-toggle-check" type="checkbox"/><span
                                            className="password-toggle-indicator"/>
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-shadow d-block w-100" type="submit">Sign up</button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

if (document.getElementById('modals')) {
    ReactDOM.render(<Modals />, document.getElementById('modals'));
}
