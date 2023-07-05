import { Component } from "react";
import { NavLink } from 'react-router-dom';




export default class Topbar extends Component {


    render() {

        return (
            <div>

                <div className="container-fluid bg-dark">
                    <div className="row py-2 px-lg-5">
                        <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center text-white">
                                <small><i className="fa fa-phone-alt mr-2"></i>+216 53154992</small>
                                <small className="px-3">|</small>
                                <small><i className="fa fa-envelope mr-2"></i>isetn-depinfo@walid.fr</small>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center text-lg-right">
                            <div className="d-inline-flex align-items-center">
                                <NavLink className="text-white px-2" to="/">
                                    <i className="fab fa-facebook-f"></i>
                                </NavLink>
                                <NavLink className="text-white px-2" to="/">
                                    <i className="fab fa-twitter"></i>
                                </NavLink>
                                <NavLink className="text-white px-2" to="/">
                                    <i className="fab fa-linkedin-in"></i>
                                </NavLink>
                                <NavLink className="text-white px-2" to="/">
                                    <i className="fab fa-instagram"></i>
                                </NavLink>
                                <NavLink className="text-white pl-2" to="/">
                                    <i className="fab fa-youtube"></i>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}