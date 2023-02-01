import { Component } from "react";


import Section2 from "./Section2";

export default class Home extends Component {


    render() {

        return (
            <div>


                <div className="jumbotron jumbotron-fluid position-relative overlay-bottom" >
                    <div className="container text-center my-5 py-5">

                        <h1 className="text-white display-1 mb-5">Application De Gestion PFE</h1>
                        <h2 className="text-white mt-4 mb-4"></h2>

                        <div className="mx-auto mb-5" style={{ width: '100%' }} id="bt">
                            <div className="input-group">
                                <div className="input-group-prepend">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Section2 />
            </div>
        )
    }
}