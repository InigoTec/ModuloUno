import React from "react";

class VideoVisualization extends React.Component {
    //renderizado de componente
    render(){

        return(
            <div className="fondo">
                <nav>
                    <div className="barra-top">
                        <p className="nav-title">Komorebi</p>
                    </div>
                </nav>
                <div className="container-video">
                    <div id="video">Video</div>
                    <div id="information">
                        <p className="subtitle">Information</p>
                        <p>Agent ID: <span className="underline">9807</span></p>
                        <p>Name: Santiago Gabián</p>
                        <p>Date: 08/15/2022</p>
                        <p>Category: Selling</p>
                        <p>Duration: 10 minutes</p>
                        <p>Start time: 10:58 AM</p>
                        <button className="button">
                                Share
                        </button>
                    </div>
                    <div id="tags">
                        <p className="subtitle">Tags</p>
                        <div className="tag-text-div"><span className="tag-text">Sells</span></div>
                        <div className="tag-text-div"><span className="tag-text">Purchase</span></div>
                        <div className="tag-text-div"><span className="tag-text">Information</span></div>
                    </div>
                    <div id="notes">
                        <p className="subtitle-uno">Notes</p>
                        <div className="gris">
                            <p className="nombre">Agustín Abreu</p>
                            <p className="fecha">08/15/2022</p>
                            <p className="etexto">Lorem lorem lorem lorem lorem</p>
                        </div>
                        <div className="gris">
                            <p className="nombre">Diego Urgell</p>
                            <p className="fecha">08/15/2022</p>
                            <p className="etexto">Lorem lorem lorem lorem lorem</p>
                        </div>
                        <div className="gris">
                            <p className="nombre">Yusdivia Molina</p>
                            <p className="fecha">08/15/2022</p>
                            <p className="etexto">Lorem lorem lorem lorem lorem</p>
                        </div>
                        <button className="button">
                                Create
                        </button>
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoVisualization;
