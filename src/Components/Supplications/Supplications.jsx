import React, { Component } from 'react';
import {Link} from "react-router-dom";
import CustomLayout from '../Layout';
import SupplicationDetail from "./SupplicationDetail";
export default class Suppplication extends Component{
    render(){
        return(
            <div>
                <CustomLayout>
                    <SupplicationDetail></SupplicationDetail>
                </CustomLayout>
            </div>
        )
    }
}