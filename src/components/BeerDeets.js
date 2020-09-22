import React from 'react';



function BeerDeets(props) {
   return(
       <div>
       {props.beerList.map(beer => <li>{beer.name}{beer.description}</li>)}
      </div>
   )
}

export default BeerDeets;