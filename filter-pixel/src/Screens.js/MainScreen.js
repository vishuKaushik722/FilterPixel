import React, { useEffect } from "react";
import Navbar from "../Components.js/Navbar";
import axios from "axios";

const MainScreen = () => {

    const getImages = async () => {
        const res = await axios.get('https://drive.google.com/drive/folders/1_qOJ0z3kI_e2IJq4X6HqF0T1ROBESygS?usp=sharing');
        console.log(res.data);
    }

    useEffect(() => {
        getImages();
    })

    return (
        <div>
            <Navbar propval={"Hey FilterPixel"} />
        </div>
    )
}

export default MainScreen;