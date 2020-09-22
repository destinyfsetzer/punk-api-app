import React, {Component} from 'react';
import LikeButton from './LikeButton';

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
        {this.state.beerList.map(beer => <li>{beer.name}<LikeButton/></li>)}
                </ul>
            </div>
        )
    }
}

export default FetchBeer;