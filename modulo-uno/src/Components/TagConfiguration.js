import React from "react";

class TagConfiguration extends React.Component {
    render(){

        return(
            
            <div className="fondo">
                <nav>
                    <div className="barra-top">
                        <p className="nav-title">Komorebi</p>
                    </div>
                </nav>
                <p className="title">Tag Configuration</p>
                <div className="container-table">
                    <table class="table">
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                        </tr>
                        <tr>
                            <td>Model A</td>
                            <td>Sales</td>
                        </tr>
                        <tr>
                            <td>Model B</td>
                            <td>Sales</td>
                        </tr>
                        <tr>
                            <td>Hang-up call</td>
                            <td>General</td>
                        </tr>
                        <tr>
                            <td>Not interested</td>
                            <td>General</td>
                        </tr>
                        <tr>
                            <td>Not interested</td>
                            <td>General</td>
                        </tr>
                        <tr>
                            <td>Need follow-up call</td>
                            <td>Process</td>
                        </tr>
                        <tr>
                            <td>Fixing</td>
                            <td>Troubleshooting</td>
                        </tr>
                        <tr>
                            <td>Sales opportunity</td>
                            <td>General</td>
                        </tr>
                        <tr>
                            <td>Warrant</td>
                            <td>Quality</td>
                        </tr>
                    </table>
                    <button className="button">
                        Add
                    </button>
                </div>
            </div>
        );
    }
}


export default TagConfiguration;