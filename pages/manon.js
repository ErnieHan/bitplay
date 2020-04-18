import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

export class Manon extends Component {
  state = {
    searchText: ""
  };

  componentDidMount() {
    const search = window.location.search.replace("?", "");
    this.setState({
      searchText: search
    });
  }
  render() {
    return (
      <div>
        <h1>您所要搜尋的關鍵字為：{this.state.searchText}</h1>
        <div className="manon">manon:{this.props.stars}</div>
      </div>
    );
  }
}

Manon.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

export default Manon;
