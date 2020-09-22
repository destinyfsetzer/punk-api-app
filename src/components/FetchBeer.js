import React, {Component} from 'react';
import BeerDeets from './BeerDeets';

class FetchBeer extends Component {
    state = {
        beerList: []
    }

    fetchBeer = () => {
        fetch('https://api.punkapi.com/v2/beers')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        this.setState({beerList:data})
        })
    }


    render() {
        return(
            <div>
                <button onClick={this.fetchBeer}>Gimme Beer</button>
                <ul>
                 <li><BeerDeets beerList={this.state.beerList}/></li>
                </ul>
            </div>
        )
    }
}

export default FetchBeer;