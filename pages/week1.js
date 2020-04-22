import React, { Component } from "react";
import Header from "../src/components/Header";

export class Week1 extends Component {
  state = {
    id: null,
    url: null,
    isLoading: false
  };

  fetchData = async () => {
    this.startLoading(true);
    try {
      const response = await fetch("https://api.github.com/repos/zeit/next.js", {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({
          id: data.id,
          url: data.html_url
        });
      } else {
        throw new Error("ernie xxx");
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      this.startLoading(false);
    }
  };

  startLoading = bool => {
    this.setState({
      isLoading: bool
    });
  };

  render() {
    return (
      <div>
        <Header title={"蕃茄鐘 ｜ Week 1"} />
        <div style={{ textAlign: "center" }}>
          <button className="fetch-button" onClick={this.fetchData}>
            button fetch
          </button>
          {this.state.isLoading && <div className="loading-content">loading ...</div>}
          <div className="fetch-id">{this.state.id}</div>
          <div className="fetch-url">{this.state.url}</div>
        </div>
      </div>
    );
  }
}

export default Week1;
