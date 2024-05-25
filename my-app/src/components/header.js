import "../styles/header.css";
import "../styles/utilities.css";

import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("active");
  const changeStyle = () => {
    if (active === "active") {
      setActive("nonActive");
    } else {
      setActive("active");
    }
  };
  return (
    <section className="headerSection">
      <div>
        <h2>Logo</h2>
      </div>
      <nav>
        <ul className="semiBolded">
          <li>Creators</li>
          <li>How it Works</li>
          <li>FAQ</li>
          <li>Support</li>
        </ul>
      </nav>
      <div>
        <button>Log in</button>
        <button className={active} onClick={changeStyle}>
          Begin Now - It's Free
        </button>
      </div>
    </section>
  );
}
