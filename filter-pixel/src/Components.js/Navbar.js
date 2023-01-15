import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({propval}) => {




    return  (
        <section id="header">
            <div class="header container">
                <div class="nav-bar">
                    <div class="brand">
                    <a href="#hero">
                        <h1>FilterPixel</h1>
                    </a>
                    </div>
                    <div class="nav-list">
                    <div class="hamburger">
                        <div class="bar"></div>
                    </div>
                    <ul>
                        <Link to={"/signup"}>
                            <button className="signup">
                                {propval}
                            </button>
                        </Link>
                    </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar;