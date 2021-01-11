import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getData } from './../Utils/finalSurahList';
import './surahDetail.css';


class DropDown extends Component {
    state = {
        data: [],
        surahName: ""

    }

    componentDidMount() {
        const data = getData()
        this.setState({ data: data })
        const data2 = data.filter(d => parseInt(this.props.surahId) === d.SurahNo)
        this.setState({ surahName: data2[0].SurahNameEnglish })

    }


    render() {
        return (
            <div class="dropdown">
                <a style={{ color: "white", fontSize: "1em" }} class="btn  dropdown-toggle" role="button" data-toggle="dropdown" >
                    {this.state.surahName}
                </a>

                <div style={{ minWidth: "270px", overflow: "scroll", height: "500px" }} class="dropdown-menu dropdwnM" aria-labelledby="dropdownMenuLink">
                    < div class="dropdown-item" data-filter-tags="1" style={{ backgroundColor: "transparent" }}>
                        {this.state.data.map(d => {
                            return (
                                <Link onClick={() => this.setState({ surahName: d.SurahNameEnglish })} style={{ color: "#741626" }} to={`/surahlist/${d.SurahNo}`}>
                                    <div className="row">
                                        <div className="col-2">{d.SurahNo}</div>
                                        <div className="col-7 text-muted">
                                            {d.SurahNameEnglish}
                                        </div>
                                        <div style={{ fontSize: "1em" }} classname="col-3">
                                            {d.SurahNameArabic}
                                        </div>

                                    </div>
                                </Link>)
                        })}
                    </div>)

                </div>
            </div>





            // <div className="dropdown">
            //     <button className="btn btn-white dropdown-toggle" type="button" data-toggle="dropdown" >
            //         <div className="text-primary">
            //             <strong style={{ color: "white" }}>{this.state.surahName}</strong>
            //         </div>
            //     </button>

            //     <div style={{ minWidth: "270px", overflow: "scroll", height: "500px" }} className="dropdown-menu dropdown-menu-left border-1 pl-50"  >

            //         <div >
            //             <div className="dropdown-item" style={{ backgroundColor: "transparent" }}>
            //                 {this.state.data.map(d => {
            //                     return (
            //                         <Link onClick={() => this.setState({ surahName: d.SurahNameEnglish })} style={{ color: "#741626" }} to={`/surahlist/${d.SurahNo}`}>
            //                             <div className="row">
            //                                 <div className="col-2">{d.SurahNo}</div>
            //                                 <div className="col-7 text-muted">
            //                                     {d.SurahNameEnglish}
            //                                 </div>
            //                                 <div style={{ fontSize: "1em" }} classname="col-3">
            //                                     {d.SurahNameArabic}
            //                                 </div>

            //                             </div>
            //                         </Link>)
            //                 })}                </div>

            //         </div>
            //     </div>
            // </div>



        );
    }
}

export default DropDown;