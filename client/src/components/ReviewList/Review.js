import React from 'react';
import Album from '../Album';
import AlbumReview from '../AlbumReviews/AlbumReview';

export default class Review extends React.Component {

  constructor(props) {
    super();

    this.state = {
      votes: 0
    }
  }

  handleClick = () => {
    this.setState({
      votes: this.state.votes + 1
    })
  }

  render() {

    if (this.props.user) {

    return (
      
      <div className="review row mx-auto">
        <div className="p-2 col-4">
          <Album album={this.props.album} />
        </div>
        <div className="col-8">
          <AlbumReview user={this.props.user} rating={this.props.rating} content={this.props.content} />
        </div>
        {/* <button onClick={this.handleClick}>Click Me</button> <span>{this.state.votes}</span> */}
      </div>
    )
   }
    else {
      return null

    }
  }

}
