import React from "react";

import { Zap } from "react-feather";
import { MenuStore } from "../../store";
import { Link } from "react-router-dom";

import "./styles.sass";

const Menu = () => {
  const is_open = MenuStore.useState((state) => state.is_open);

  const toggleMenu = () => {
    MenuStore.update((state) => {
      state.is_open = !state.is_open;
    });
  };

  return (
    <div className="menu">
      <span>click me &gt;&gt;</span>
      <Zap className="icon" color="#00EDD4" size={36} onClick={toggleMenu} />

      <div className={`wrapper ${is_open ? `open` : ``}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              .home()
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleMenu}>
              .about()
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleMenu}>
              .works()
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleMenu}>
              .contact()
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
