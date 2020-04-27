import React, { Component } from "react";
import Link from "next/link";
import styles from "../src/css/Header.module.css";
import { ROOT } from "../src/function/constants";
import Header from "../src/components/Header";
import NoSSR from "react-no-ssr";
import Fetch from "../src/components/Fetch";

export class App extends Component {
  state = {
    searchText: ""
  };

  async componentDidMount() {}

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
    const y = this.refs["image"].offsetTop;
    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  };
  render() {
    return (
      <div>
        <Header />
        <h1 className={styles.error} style={{ padding: "15px", textAlign: "center", fontWeight: "300" }}>
          This is Ernie NEXT.js website to Github
        </h1>
        <h1 style={{ padding: "15px", fontSize: "20px", fontWeight: "300", textAlign: "right" }}>#Taiwancanhelp</h1>
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
        <div className="menu-link">
          <a href="./taiwancanhelp">Taiwan can help</a>
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
        <style jsx>{`
          .address {
            padding: 15px;
          }
          .address-item {
            margin-bottom: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #6c6c6c;
          }
        `}</style>
        <NoSSR>
          <Fetch />
        </NoSSR>
        <img src={`${ROOT}/images/love.jpg`} ref="image" alt="image" />
      </div>
    );
  }
}

export async function getStaticProps() {
  return {
    props: {}
  };
}

export default App;
