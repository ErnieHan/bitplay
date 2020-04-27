import React, { Component } from "react";
import Header from "../src/components/Header";
import { ROOT } from "../src/function/constants";

export class Week1 extends Component {
  state = {
    id: null,
    url: null,
    resultList: [],
    isLoading: false
  };

  componentDidMount() {
    this.fetchData("10");
  }

  fetchData = async limit => {
    this.startLoading(true);
    try {
      const response = await fetch(
        `https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=24c9f8fe-88db-4a6e-895c-498fbc94df94&limit=${limit}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json"
          }
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data.result.results);
        this.setState({
          resultList: data.result.results
        });
      } else {
        throw new Error("ernie xxx");
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      this.startLoading(false);
    }
  };

  startLoading = bool => {
    this.setState({
      isLoading: bool
    });
  };

  render() {
    return (
      <div>
        <Header title={"蕃茄鐘 ｜ Week 1"} />
        <div style={{ textAlign: "center" }}>
          <button className="fetch-button" onClick={this.fetchData.bind(this, "20")}>
            button fetch
          </button>
          {this.state.isLoading && (
            <div className="loading-content">
              <img src={`${ROOT}/images/loading.gif`} alt="loading" />
            </div>
          )}
          {this.state.resultList.map((data, index) => (
            <div key={index} className="fetch-id">
              {data.o_tlc_agency_name} / {data.o_tlc_agency_phone}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Week1;
