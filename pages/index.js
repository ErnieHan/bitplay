import React, { Component } from "react";
import Link from "next/link";
import styles from "../src/css/Header.module.css";
import { ROOT } from "../src/function/constants";
import Header from "../src/components/Header";

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

  scrollDown = () => {
    window.scrollTo({
      top: 300,
      behavior: "smooth"
    });
  };
  render() {
    return (
      <div>
        <Header />
        <h1 className={styles.error} style={{ padding: "15px" }}>
          This is Ernie NEXT.js website to Github
        </h1>
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
        <div className="menu-link">
          <Link href={`/taiwancanhelp`} as={`${ROOT}/taiwancanhelp`}>
            <a>click me go to Taiwan Can Help</a>
          </Link>
        </div>
        <form onSubmit={this.handleSearch} action="javascript:return true">
          <input type="search" value={this.state.searchText} onChange={this.handleChangeSearch} />
        </form>
        <input type="text" pattern="[0-9]*" placeholder="請輸入數字" />
        <form action="javascript:return true">
          <input type="number" placeholder="請輸入數字" />
        </form>
        <div className="move-down" onClick={this.scrollDown}>
          scroll drop
        </div>
        <img src={`${ROOT}/images/love.jpg`} alt="image" />
      </div>
    );
  }
}

export default App;
