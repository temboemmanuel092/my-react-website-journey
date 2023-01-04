import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className="top-bar">
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>Services</button>
          </li>
          <li>
            <button>Tracking</button>
          </li>
          <li>
            <button>Contact Us</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
