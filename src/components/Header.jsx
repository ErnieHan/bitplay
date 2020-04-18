import React, { Component } from "react";
import Head from "next/head";
import { ROOT } from "../function/constants";

export class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

Header.defaultProps = {
  title: "首頁"
};

export default Header;
