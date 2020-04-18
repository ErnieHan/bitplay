import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Header from "../src/components/Header";

export class Manon extends Component {
  state = {
    searchText: ""
  };

  componentDidMount() {
    const search = window.location.search.replace("?", "");
    this.setState({
      searchText: search !== "%" ? decodeURI(search) : search
    });
  }
  render() {
    return (
      <div>
        <Header title={"MANON"} />
        <div className="manon">manon page</div>
        <h3>您所要搜尋的關鍵字:{this.state.searchText}</h3>
      </div>
    );
  }
}

// Manon.getInitialProps = async () => {
//   const res = await fetch("https://api.github.com/repos/zeit/next.js");
//   const json = await res.json();
//   return { stars: json.stargazers_count };
// };

export default Manon;
