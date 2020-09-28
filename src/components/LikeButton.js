import React from 'react';

class LikeButton extends React.Component {
    state = {
    likes: 0
};

render() {
    return (
        <button onClick={this.addLike}>
        <p className="likeButton">
            Me Likey: <span>{this.state.likes}</span>
        </p>
        </button>
    )
}

addLike = () => {
    let newCount = this.state.likes + 1;
    this.setState({
    likes: newCount
    });
  };
}

export default LikeButton;