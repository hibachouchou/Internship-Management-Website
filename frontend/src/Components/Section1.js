import { Component } from "react";
import { BrowserRouter, NavLink, Routes } from 'react-router-dom';
import img from '../img/courses-1.jpg'
import img1 from '../img/courses-2.jpg'
import img2 from '../img/courses-5.jpg'


export default class Section1 extends Component {


    render() {
        return (
            <div>


                <div className="container-fluid px-0 py-5">
                    <div className="row mx-0 justify-content-center pt-5">
                        <div className="col-lg-6">
                            <div className="section-title text-center position-relative mb-4">
                                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Nos Services</h6>
                                <h1 className="display-4">Nos Services</h1>
                            </div>
                        </div>
                    </div>
                    <div className="owl-carousel courses-carousel">
                        <div className="courses-item position-relative">
                            <img className="img-fluid" src={img} alt="" />
                            <div className="courses-text">
                                <h4 className="text-center text-white px-3">Gestion de stage</h4>
                                <div className="border-top w-100 mt-3">

                                </div>
                                <div className="w-100 bg-white text-center p-4" >
                                    <NavLink className="btn btn-primary" to="/">Allez</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="courses-item position-relative">
                            <img className="img-fluid" src={img1} alt="" />
                            <div className="courses-text">
                                <h4 className="text-center text-white px-3">Gestion CV</h4>
                                <div className="border-top w-100 mt-3">

                                </div>
                                <div className="w-100 bg-white text-center p-4" >
                                    <NavLink className="btn btn-primary" to="/">Allez</NavLink>
                                </div>
                            </div>

                        </div>
                        <div className="courses-item position-relative">
                            <img className="img-fluid" src={img2} alt="" />
                            <div className="courses-text">
                                <h4 className="text-center text-white px-3">Integration</h4>
                                <div className="border-top w-100 mt-3">

                                </div>
                                <div className="w-100 bg-white text-center p-4" >
                                    <NavLink className="btn btn-primary" to="/">Allez</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}