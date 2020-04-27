import React, { Component } from "react";
import Header from "../src/components/Header";

export class Taiwancanhelp extends Component {
  render() {
    return (
      <div>
        <Header
          title="Taiwan can help"
          description="In a time of isolation, we choose solidarity. In the past weeks, Taiwan has provided more than 16 million medical masks to support medical workers around the world and has worked together with the US and the EU on the most advanced rapid tests and vaccines for COVID-19. We are here to help."
        />
        <div id="fb-root"></div>
        <div className="main-ob1">
          <h1 className="title">taiwan can help</h1>
          <div
            class="fb-share-button"
            data-href="https://erniehan.github.io/bitplay/taiwancanhelp"
            data-layout="button"
            data-size="small"
          >
            <a
              target="_blank"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ferniehan.github.io%2Fbitplay%2Ftaiwancanhelp&amp;src=sdkpreparse"
              class="fb-xfbml-parse-ignore"
            >
              分享
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Taiwancanhelp;
