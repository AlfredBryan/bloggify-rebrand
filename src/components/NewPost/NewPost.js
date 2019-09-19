import React, { Component } from "react";
import FormData from "form-data";
import axios from "axios";
import Footer from "../Footer/Footer";
import CustomNavbar from "../Navbar/CustomNavbar";

import "./style.css";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      title: "",
      post: "",
      image: ""
    };
  }

  postDataHandler = e => {
    e.preventDefault();
    const { author, title, post, image } = this.state;
    const formData = new FormData();
    formData.set("author", author);
    formData.set("title", title);
    formData.set("post", post);
    formData.append("image", image);
    axios({
      method: "post",
      url: "https://bloggify.herokuapp.com/api/v1/post/add",
      data: formData,
      config: {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    }).then(res => {
      console.log(res);
    });
  };

  handleImageChange = e => {
    e.preventDefault();
    let imageFile = e.target.files[0];
    this.setState({ [e.target.name]: imageFile });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { title, author, post, image } = this.state;
    return (
      <div>
        <CustomNavbar />
        <div className="container-form">
          <h3>Create New Post</h3>
          <form
            action="post"
            onSubmit={this.postDataHandler}
            encType="multipart/form-data"
          >
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Enter author.."
              value={this.state.author}
              onChange={this.handleChange}
            />

            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter title.."
              value={this.state.title}
              onChange={this.handleChange}
            />
            <label htmlFor="title">Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={this.handleImageChange}
            />

            <label htmlFor="post">Post</label>
            <textarea
              id="post"
              name="post"
              placeholder="Write post.."
              value={this.state.post}
              onChange={this.handleChange}
              style={{ height: "200px" }}
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default NewPost;
