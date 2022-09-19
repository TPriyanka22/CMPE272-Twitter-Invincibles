import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Twitter_Service_UI.css";
import Twitterlogo from "./images/Twitterlogo.jpg";
import axiosClient from "../api/apiClient";
import { postTweet, deleteTweet } from "../api/apiHandler";

class Twitter_Service_UI extends Component {
  state = {
    textentered: "",
    restweets: [],
  };

  componentDidMount() {
    this.setState({
      textentered: "",
      restweets: [],
    });
  }

  totweet = () => toast.success("Your tweet is posted!");

  todelete = () => toast.error("Your tweet is deleted!");

  searchTweet = (query) => {
    axiosClient.defaults.headers.common["query"] = query;
    axiosClient.get("http://localhost:8080/search").then((res) => {
      if (res.data.data.statuses) {
        this.setState({
          restweets: res.data.data.statuses,
        });
      }
    });
  };

  renderSearchTweets() {
    return this.state.restweets.map((tweet) => {
      return (
        <div className="rendersearchtweets">
          <div className="rendersearchtweetstext"
            
          >
            {tweet.text}
            <button
              type="button"
              class="btn btn-danger"
              style={{
                position: "relative",
                float: "right",
                margin: "auto",
                padding: "3px",
              }}
              onClick={() => deleteTweet(tweet.id_str, this.todelete)}
            >
              DELETE
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="Welcometext">
        <header className="Welcome-header">
          <h3 className="text shadow">Twitter Service</h3>
          <img src={Twitterlogo} className="Welcome-logo" alt="logo" />
          <ToastContainer />
          <div className="search-tweet">
            <input
              class="form-control search-input"
              type="text"
              placeholder="Type your tweet here"
              aria-label="Search"
              onChange={(event) => {
                this.setState({
                  textentered: event.target.value,
                  type: true,
                });
              }}
            />
            <button
              type="button"
              class="btn btn-dark post--button"
              
              onClick={() => this.searchTweet(this.state.textentered)}
            >
              Search
            </button>
            <button
              type="button"
              class="btn btn-dark search--button"
              onClick={() => postTweet(this.state.textentered, this.totweet)}
            >
              Post
            </button>
            <br />
            <br />
          </div>
          <div className="tweets-container">
            {this.renderSearchTweets(this.state.restweets)}
          </div>
        </header>
      </div>
    );
  }
}

export default Twitter_Service_UI;
