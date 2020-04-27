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
    if (searchText === "%") {
      window.history.pushState(null, null, "/week1?%25");
      this.setState({
        title: "%"
      });
    } else {
      this.setState({
        title: decodeURIComponent(searchText)
      });
    }
  }

  handleSubmit = event => {
    const { value } = this.state;
    if (value.trim() !== "") {
      const searchText = value.trim();
      window.location = `${ROOT}/week1?${encodeURIComponent(searchText)}`;
    }
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const { title, description } = this.props;
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
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          {/* ----- facebook  SEO ----- */}
          {/* <meta property="og:image" content="https://taiwancanhelp.us/taiwancanhelp-og.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Taiwan Can Help" />
          <meta property="og:url" content="https://erniehan.github.io/dorebon/" />
          <meta property="og:title" content="Taiwan Can Help" />
          <meta property="og:locale" content="zh-TW" /> */}
          <script
            async
            defer
            crossorigin="anonymous"
            src="https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v6.0&appId=1184783651695145&autoLogAppEvents=1"
          ></script>
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
  title: "首頁",
  description: "bitplay can help"
};

export default Header;
