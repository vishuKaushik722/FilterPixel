import React, {useState} from "react";
import Navbar from "../Components.js/Navbar";
import axios from "axios";

const Signup = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        try {

            const res = await axios.post('http://localhost:5000/users/signup', {username, password})
            console.log(res.data);
            alert(`Token is ->${res.data.token}`)

        } catch (err) {
            console.log(err);
            alert("Something Went Wrong");
        }
    }

    return (
        <div>
            <Navbar propval={"Sign In"} />
            <div className="box">
                <button className="google">
                    <img className="googleimg" src="https://s3-alpha-sig.figma.com/img/f40f/6ee4/358ef1906247ba6b8ed47d57619337b1?Expires=1674432000&Signature=Sfhq0p2ENHU4qXr2F8C66qLk5dW3uP3JaT0-xItBDEe9VVl1mEe~rUDV8v43nY3rcpuxLSK9WJ6XFFu8dO0Ski99kSmGwjhJSrLAPeIB4YW4uWxmMBWQ03E9gfb0CZxy32FuB5WI-M07I6LQiwznoej~ja3UgVq2vwAZLUvh0qW9Aai4HwAiNUyL2exteqDar4rcteA2WCb2OONh1yCG-26ndbgJX3LR~OFO1lEPdysdJJWBcAeDdt2V0DgECZ-ffNXaKXMK06MqfcvOPBwi5jPyJIQj08IvC~nIHqE29XiaJnRl6DOMVYLIDfYTenXH6ltqugvjF0EsUeALBNp4yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    Sign up with Google
                </button>

                <div className="orline">
                    <span className="hrspan">OR</span>
                </div>

                <input type="text" placeholder="Username" id="username" value={username} onChange={e => setUsername(e.target.value)}/>
                <input type="password" name="" placeholder="Password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <input type="submit" name="" value="Submit" onClick={submitHandler}></input>
            </div>
        </div>
    )
}

export default Signup;