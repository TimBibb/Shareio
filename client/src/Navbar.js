import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="p-6" style={{ backgroundColor: "#5371f3" }}>
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">
          <Link to="/">Why Don't I?</Link>
        </div>
        <div>
          <ul className="flex items-center space-x-6">
            <li>
              <Link
                to="/mood"
                className={`text-white ${
                  location.pathname === "/mood" && "underline"
                }`}
              >
                Mood
              </Link>
            </li>
            <li>
              <Link
                to="/meditation"
                className={`text-white ${
                  location.pathname === "/meditation" && "underline"
                }`}
              >
                Meditation
              </Link>
            </li>
            <li>
              <Link
                to="/journal"
                className={`text-white ${
                  location.pathname === "/journal" && "underline"
                }`}
              >
                Journal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
