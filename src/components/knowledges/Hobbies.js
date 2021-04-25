import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
          <h3>Intérêts</h3>
          <ul>
              <li className="hobby"><i className="fas fa-running"></i>
              <span>Course à pied</span>
              </li>
              <li className="hobby"><i className="fab fa-bitcoin"></i>
              <span>Crypto-monnaies</span>
              </li>
              <li className="hobby"><i className="fas fa-futbol"></i>
              <span>Football</span>
              </li>
              <li className="hobby"><i className="fas fa-code"></i>
              <span>Développer</span>
              </li>
          </ul>
        </div>
    );
};

export default Hobbies;