import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './NaatCard.css'

class Cards extends Component {
   render() {
     
      return (
         <React.Fragment>
            {this.props.data ? <div class="shadow-sm rounded card" style={{ borderRadius: '10px/10px', height: "200px", width: "150px" }}>
               <Link style={{ textDecoration: 'none' }} onClick={() => this.props.player(this.props.data.id)} to={`/naats/${this.props.data.id}`} >
                  <img class="card-img-top" src={this.props.data.iconLocation}  style={{ maxheight: "100%", maxWidth: "100%"}} />
                  <h5 id="naatTitle" className="text-center py-1">{this.props.data.title}</h5>
                    
               </Link>
            </div> : <div></div>}


         </React.Fragment >
      )
   }
}

export default Cards;