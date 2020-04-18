import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../src/css/Header.module.css";
import { ROOT } from "../src/function/constants";

export class App extends Component {
  state = {
    searchText: ""
  };

  handleChangeSearch = event => {
    this.setState({
      searchText: event.target.value
    });
  };

  handleSearch = event => {
    event.preventDefault();
    const { searchText } = this.state;
    if (searchText.trim().length !== 0) {
      window.location = `${ROOT}/manon?${searchText}`;
    }
  };
  render() {
    return (
      <div>
        <Head>
          <title>首頁 ｜ bitplay</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          {/* facebook  SEO */}
          {/* <meta property="og:image" content="https://taiwancanhelp.us/taiwancanhelp-og.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Taiwan Can Help" />
          <meta property="og:url" content="https://erniehan.github.io/dorebon/" />
          <meta property="og:title" content="Taiwan Can Help" />
          <meta property="og:locale" content="zh-TW" /> */}
        </Head>
        <h1 className={styles.error}>This is Ernie NEXT website to Github</h1>
        <div className="ernie">testing</div>
        <div className="menu-link">
          <Link href={`/about`} as={`${ROOT}/about`}>
            <a>click me go to About Page</a>
          </Link>
        </div>
        <div className="menu-link">
          <Link href={`/manon`} as={`${ROOT}/manon`}>
            <a>click me go to Manon Page</a>
          </Link>
        </div>
        <form onSubmit={this.handleSearch}>
          <input type="search" value={this.state.searchText} onChange={this.handleChangeSearch} />
        </form>
        <img src="../src/images/love.jpg" alt="image" />
      </div>
    );
  }
}

export default App;
