import React, { Component } from "react";
import Head from "next/head";
import { ROOT } from "../function/constants";

export class Header extends Component {
  state = {
    value: "",
    title: null
  };

  componentDidMount() {
    const searchText = window.location.search.replace("?", "");
    console.log(searchText === "%");
    if (searchText !== "%") {
      this.setState({
        title: decodeURIComponent(searchText)
      });
    }
  }

  handleSubmit = event => {
    if (this.state.value.trim() !== "") {
      window.location = `${ROOT}/week1?${encodeURIComponent(this.state.value.trim())}`;
    }
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const { title } = this.props;
    return (
      <React.Fragment>
        <style jsx>{`
          header {
            background-color: #24292e;
            padding: 16px;
            color: #ffffff;
          }
          .search-bar {
            width: 100%;
            height: 28px;
            border-radius: 5px;
            background: #343434;
            border: 0;
            color: #fff;
            font-family: inherit;
            font-size: 14px;
            padding: 0 8px;
          }
          .search-bar:focus {
            background: #f4f4f4;
            color: #333;
          }
          .title {
            font-weight: 300;
          }
        `}</style>
        <Head>
          <title>{title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <link rel="icon" href={`${ROOT}/images/favicon.png`} />
          {/* ----- facebook  SEO ----- */}
          {/* <meta property="og:image" content="https://taiwancanhelp.us/taiwancanhelp-og.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Taiwan Can Help" />
          <meta property="og:url" content="https://erniehan.github.io/dorebon/" />
          <meta property="og:title" content="Taiwan Can Help" />
          <meta property="og:locale" content="zh-TW" /> */}
        </Head>
        <header>
          <form action="javascript:return true" onSubmit={this.handleSubmit}>
            <input
              type="search"
              value={this.state.value}
              className="search-bar"
              placeholder="search or jump to"
              onChange={this.handleChange}
            />
          </form>
        </header>
        {this.state.title ? <h1 className="title">search: {this.state.title}</h1> : null}
      </React.Fragment>
    );
  }
}

Header.defaultProps = {
  title: "首頁"
};

export default Header;
