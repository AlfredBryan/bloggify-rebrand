import React, { Component } from "react";
import axios from "axios";

import "./Home.css";
import Spinner from "../hoc/Spinner";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get("https://bloggify.herokuapp.com/api/v1/post").then(res => {
      if (res.status === 201) {
        this.setState({
          post: res.data,
          loading: false
        });
      }
    });
  }

  render() {
    const { post, loading } = this.state;
    return (
      <React.Fragment>
        {loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <div className="home-main">
              <img
                className="bg_img"
                src={require("../images/Blogbg.jpg")}
                alt="bg_img"
              />
              <div className="bg_header">
                <p>LATEST POST</p>
                <h1>Welcome to Bloggify</h1>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row blog_area">
                {post.map(news => (
                  <div className="col-md-4  blogs">
                    <img
                      style={{ width: "25em", height: "15em" }}
                      className="news_img"
                      src={news.image}
                      alt=""
                    />
                    <div className="news_title">{news.title}</div>
                    <div>{news.post.substring(0, 55)}...</div>
                  </div>
                ))}
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Home;
