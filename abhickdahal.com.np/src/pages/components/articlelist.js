import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class Articlelist extends Component {
  constructor(props) {
    super(props);
    this.state = { content: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8080/content')
      .then(res => {
        this.setState({ content: res.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <h1 className="heading-list">Posts are here!!</h1>
        {this.state.loading ? (
          'loading'
        ) : (
          <div>
            {this.state.content.map((content, key) => {
              return (
                <div className="content-list">
                  <Link key={key} to={`/article/${content._id}`}>
                    <h1 className="content-title"> {content.title} </h1>
                    <p> {content.content}.....</p>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}

export default Articlelist;
