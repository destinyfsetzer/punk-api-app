import React from 'react';
import LikeButton from './LikeButton';


function BeerDeets(props) {
   return(
       <div>
       {props.beerList.map(beer => <li><b>{beer.name}:</b><br></br>{beer.description}<p>-------------------------------------------</p>< LikeButton /></li>)}
      </div>
   )
}

export default BeerDeets;