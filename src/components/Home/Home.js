import React, { Component } from "react";
import moment from "moment";
import axios from "axios";

import "./Home.css";
import Spinner from "../hoc/Spinner";
import Footer from "../Footer/Footer";
import CustomNavbar from "../Navbar/CustomNavbar";

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
            <CustomNavbar />
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
            <div className="news_area">
              <h2>News Splash</h2>
              <hr className="style2" />
            </div>
            <div className="container-fluid blogs">
              <div className="row">
                {post.map(news => (
                  <div className="col-md-4 mb-5">
                    <div className="card h-100">
                      <img
                        style={{ width: "28em", height: "15em" }}
                        src={news.image}
                        alt=""
                      />
                      <div className="card-body">
                        <h5 className="card-title">{news.title}</h5>
                        <p className="card-text">
                          {news.post.substring(0, 150)}...
                        </p>
                      </div>
                      <div className="card-footer row">
                        <div className="col-md-8">
                          <h6>{news.author}</h6>
                          <p>
                            <small>{moment(news.date).format("llll")}</small>
                          </p>
                        </div>
                        <div className="col-md-4">
                          <a href="#" class="btn btn-success btn-sm">
                            Read More >>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Footer />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Home;
