import React, { Component } from 'react';
import {Link} from "react-router-dom";
import CustomLayout from '../Layout';
import ZakaatForm from './ZakaatForm';
//import ZakaatForm from "./ZakaatForm"

export default class Zakaat extends Component{
    render(){
        return(
            <div>
                <CustomLayout>
                <ZakaatForm/>
                </CustomLayout>
            </div>
        )
    }
}