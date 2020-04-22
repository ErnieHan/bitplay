import React, { Component } from "react";
import Swiper from "swiper";

export class Fetch extends Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 0,
      freeMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        991: { slidesPerView: 3 },
        767: { slidesPerView: 2 }
      }
    });
  }
  render() {
    return (
      <div>
        <h1>推薦飾品</h1>
        <div className="swiper-wrap">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div>
                  <img
                    src="https://cdn.chowsangsang.com/dfs/ivCssModelImages/90871/c0b5637806ed10b7dc150986f015323d.jpg"
                    alt=""
                  />
                  <div>Cosmos「宇」</div>
                  <div>18K紅色黃金青金石及紫石英硬玉戒指</div>
                  <div>HK$4900.00</div>
                </div>
              </div>
              <div class="swiper-slide">
                <div>
                  <img
                    src="https://cdn.chowsangsang.com/dfs/ivCssModelImages/90871/c0b5637806ed10b7dc150986f015323d.jpg"
                    alt=""
                  />
                  <div>Cosmos「宇」</div>
                  <div>18K紅色黃金青金石及紫石英硬玉戒指</div>
                  <div>HK$4900.00</div>
                </div>
              </div>
              <div class="swiper-slide">
                <div>
                  <img
                    src="https://cdn.chowsangsang.com/dfs/ivCssModelImages/90871/c0b5637806ed10b7dc150986f015323d.jpg"
                    alt=""
                  />
                  <div>Cosmos「宇」</div>
                  <div>18K紅色黃金青金石及紫石英硬玉戒指</div>
                  <div>HK$4900.00</div>
                </div>
              </div>
              <div class="swiper-slide">
                <div>
                  <img
                    src="https://cdn.chowsangsang.com/dfs/ivCssModelImages/90871/c0b5637806ed10b7dc150986f015323d.jpg"
                    alt=""
                  />
                  <div>Cosmos「宇」</div>
                  <div>18K紅色黃金青金石及紫石英硬玉戒指</div>
                  <div>HK$4900.00</div>
                </div>
              </div>
              <div class="swiper-slide">
                <div>
                  <img
                    src="https://cdn.chowsangsang.com/dfs/ivCssModelImages/90871/c0b5637806ed10b7dc150986f015323d.jpg"
                    alt=""
                  />
                  <div>Cosmos「宇」</div>
                  <div>18K紅色黃金青金石及紫石英硬玉戒指</div>
                  <div>HK$4900.00</div>
                </div>
              </div>
              <div class="swiper-slide">
                <div>
                  <img
                    src="https://cdn.chowsangsang.com/dfs/ivCssModelImages/90871/c0b5637806ed10b7dc150986f015323d.jpg"
                    alt=""
                  />
                  <div>Cosmos「宇」</div>
                  <div>18K紅色黃金青金石及紫石英硬玉戒指</div>
                  <div>HK$4900.00</div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    );
  }
}

export default Fetch;
