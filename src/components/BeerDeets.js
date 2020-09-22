import React from 'react';
import LikeButton from './LikeButton';


function BeerDeets(props) {
   return(
       <div>
       {props.beerList.map(beer => <li>{beer.name}{beer.description}< LikeButton /></li>)}
      </div>
   )
}

export default BeerDeets;