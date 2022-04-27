import React from "react";

class LogIn extends React.Component {
    //renderizado de componente
    render(){

        return(
            <div className="fondo">
                <main className="container">
                    <div className="content-left">
                    </div>
                    <div className="content-right">
                        <img className="img-right" src={require("../Images/Komorebi.png")}/>
                        <form>
                            <label for="uname">Username
                                <input type="text" placeholder="Enter Username" name="uname" required />
                            </label>
                            <label for="psw">Password
                                <input type="password" placeholder="Enter Password" name="psw" required />
                            </label>
                            <button type="submit" className="button">
                                Login
                            </button>
                        </form>
                    </div>
                </main>
            </div>
        );
    }
}

export default LogIn;
