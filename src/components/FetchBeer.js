import React, {Component} from 'react';
import BeerDeets from './BeerDeets';
import axios from 'axios';

class FetchBeer extends Component {
    state = {
        beerList: []
    }


    fetchBeer = () => {
        return axios.get('https://api.punkapi.com/v2/beers')
            .then(res => {
                const beers = res.data
                this.setState({ beerList: beers });
            })
    }


    render() {
        return(
            <div>
                <button onClick={this.fetchBeer}>Gimme BEER</button>
                <ul>
                 <li><BeerDeets beerList={this.state.beerList}/></li>
                </ul>
            </div>
        )
    }
}

export default FetchBeer;