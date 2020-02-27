import React, { Component } from 'react';

import Axios from 'axios';
import { Link } from 'react-router-dom';

export class Articlepage extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', title: '', content: '' };
    this.delete = this.delete.bind(this);
  }
  componentDidMount() {
    Axios.get('http://localhost:8080/content/' + this.props.match.params._id)
      .then(res => {
        this.setState({
          name: res.data.name,
          title: res.data.title,
          content: res.data.content
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  delete() {
    Axios.delete('http://localhost:8080/content/' + this.props.match.params._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          'loading'
        ) : (
          <div className="content-main">
            <h1>{this.state.name}</h1>
            <p>{this.state.content}</p>
            <Link to="/articlelist">
              <button onClick={this.delete} className="btn btn-danger">
                Delete
              </button>
            </Link>
            <Link
              to={'/edit/' + this.props.match.params._id}
              className="btn btn-primary"
            >
              Edit Content
            </Link>
            <Link to="/create">
              <button className="btn btn-dark">Create Content</button>
            </Link>
          </div>
        )}
      </>
    );
  }
}

export default Articlepage;
