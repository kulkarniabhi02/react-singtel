import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Launch from "./components/launch/launch.component";
import LeaderBoardComponent from "./components/leaderboard/leaderboard.component";
import Word from "./components/word/word.component";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Launch />} />
        <Route path="/word" element={<Word />} />
        <Route path="/leaderboard" element={<LeaderBoardComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;