import React from 'react';
import { Link } from "react-router-dom";

const Sugestions = (props) => {
    const options = props.results.map(r => (
      <li key={r.SurahNo} tabindex="-1">
        <div class="_3dDOqbTQUFFhKohoR7w4f7">
          <Link to={`/surahlist/${r.SurahNo}`} tabindex="-1"><b>{r.SurahNameEnglish}</b></Link>
          </div>
          </li>

      ))
      return <ul role="menu" class="_3b77Vz854nDGF-e4VZ2yR2">
        {options}
      </ul>
}
 
export default Sugestions;