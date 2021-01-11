import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class DataManage extends Component {
    render() {
        return (
            <div className="Container">
                <Card className="shadow bg-white rounded" style={{ width: "30%", height: "200px", marginLeft: "35%", marginTop: "15%" }}>
                    <div className="row">
                        <div style={{ paddingLeft: "24%", paddingTop: "15%" }}>
                            <Link to="/addNaat"><button className="btn btn-primary">Add Naat</button></Link>
                        </div>
                        <div style={{ paddingLeft: "5%", paddingTop: "15%" }}>
                            <Link to="/naatData"><button className="btn btn-danger">Modify Naat</button></Link>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default DataManage;