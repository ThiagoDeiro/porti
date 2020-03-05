import React from "react";
import "./Header.css";
export default class Header extends React.Component {
  render() {
    return (
      <div className="headerWrapper">
        <header className="header">
          <div className="textBox">
            <h1 className="header-name">Thiago Deiro</h1>
            <p className="header-text">Junior Front-end</p>
            <p className="header-subText">Developer</p>
            <p className="header-subSubText">Passionate for CSS & design.</p>
          </div>
        </header>
      </div>
    );
  }
}
