import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../css/Header.module.css";

export class App extends Component {
  state = {
    searchText: "",
  };
  handleChangeSearch = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };
  handleSearch = (event) => {
    const { searchText } = this.state;
    if (event.key === "Enter" && searchText.trim().length !== 0) {
      window.location = `/about?${encodeURIComponent(searchText.trim())}`;
    }
  };
  render() {
    return (
      <div>
        <Head>
          <title>首頁 ｜ bitplay</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
          <Link href={process.env.BACKEND_URL + "/about"} as={process.env.BACKEND_URL + "/about"}>
            <a>click me go to About Page</a>
          </Link>
        </div>
        <div className="menu-link">
          <Link href={process.env.BACKEND_URL + "/manon"} as={process.env.BACKEND_URL + "/manon"}>
            <a>click me go to About Page</a>
          </Link>
        </div>
        <input
          type="search"
          value={this.state.searchText}
          onChange={this.handleChangeSearch}
          onKeyPress={this.handleSearch}
        />
      </div>
    );
  }
}

export default App;
