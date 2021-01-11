import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

class VerseDown extends Component {

    render() {

        return (

            <div class="dropdown">
                <a style={{ color: "white", fontSize: "1em" }} class="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                    Verse 1
                    </a>

                <div style={{ overflow: "scroll", height: "300px" }} class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {this.props.data.map((d) => {
                        return (< div class="dropdown-item" data-filter-tags="1" style={{ backgroundColor: "transparent" }}>
                            <Link
                                className="pointer"
                                to={d.AyahNo}
                                onClick={() => this.setState({ ayahNo: d.AyahNo })}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                            >
                                <span>Verse </span> {d.AyahNo}</Link>
                        </div>)
                    })}
                </div>
            </div>




        );
    }
}

export default VerseDown;