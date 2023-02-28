import React, { useState } from "react";
import Leaderboard from 'react-leaderboard';

const LeaderBoardComponent = () => {
    const users = [{
        name: "Guest", 
        score: localStorage.getItem('points')
    }];
    return(
        <>
            <Leaderboard users={users} />
        </>
    );
}

export default LeaderBoardComponent;