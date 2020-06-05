import React, { Component } from "react";

const style = {
  width: "300px",
  height: "200px",
  overflow: "hidden",
  margin: "0px 5px 10px 5px",
  cursor: "pointer",
};

export default class MovieElement extends Component {
  mouseEnter = () => {
    this.props.updateSelectedMovie();
  };

  render() {
    return (
      <div
        onMouseEnter={this.mouseEnter}
        className={"d-flex flex-row bg-light"}
        style={style}
      >
        <div className="border d-flex">
          <img width="150" height="200" alt="film" src={this.props.movie.img} />
          <div className="flex-fill d-flex flex-column p-3">
            <h5> {this.props.movie.title} </h5>
            <hr className="w-100" />
            <span>{this.props.movie.details}</span>
          </div>
        </div>
      </div>
    );
  }
}
