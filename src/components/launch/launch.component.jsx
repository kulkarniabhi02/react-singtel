import React from "react";
import { useNavigate } from 'react-router-dom';

import './launch.css';

const Launch = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <button className="header">Words Puzzle</button>
            <button className="footer" onClick={() => navigate('word')}>START</button>
            <a className="footer-link" href="#" onClick={() => navigate('leaderboard')}>Leaders Board</a>
        </div>
    );
}

export default Launch;