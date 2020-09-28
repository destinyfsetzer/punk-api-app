import React from 'react';
import LikeButton from './LikeButton';


function BeerDeets(props) {
   return(
      <div>
         {props.beerList.map(beer => 
         <li>
            <b>{beer.name}:</b><br></br>
            <h2>{beer.description}</h2>
            <h2><LikeButton /></h2>
            <p>-------------------------------------------</p>
         </li>)
         }
      </div>
   )
}

export default BeerDeets;