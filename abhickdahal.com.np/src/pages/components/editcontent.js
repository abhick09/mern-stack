import React, { Component } from 'react';
import axios from 'axios';

export default class editcontent extends Component {
  constructor(props) {
    super(props);
    this.onChangename = this.onChangename.bind(this);
    this.onChangetitle = this.onChangetitle.bind(this);
    this.onChangecontent = this.onChangecontent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: '',
      title: '',
      content: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/content/' + this.props.match.params._id)
      .then(res => {
        this.setState({
          name: res.data.name,
          title: res.data.title,
          content: res.data.content
        });
      });
  }
  onChangename(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangetitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangecontent(e) {
    this.setState({
      content: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const info = {
      name: this.state.name,
      title: this.state.title,
      content: this.state.content
    };
    axios
      .put('http://localhost:5000/content/' + this.props.match.params._id, info)
      .then(res => console.log(res.data));

    this.props.history.push('/articlelist');
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update content</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangename}
            />
          </div>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangetitle}
            />
          </div>
          <div className="form-group">
            <label>Content: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.content}
              onChange={this.onChangecontent}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update Content"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
