import React, { Component } from 'react';
import {Link} from "react-router-dom";
import CustomLayout from '../Layout';
import UmrahDetail from "./UmrahDetail";
export default class Umrah extends Component{
    render(){
        return(
            <div>
                <CustomLayout>
                    <UmrahDetail></UmrahDetail>
                </CustomLayout>
            </div>
        )
    }
}