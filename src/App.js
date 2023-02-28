import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Launch from "./components/launch/launch.component";
import LeaderBoardComponent from "./components/leaderboard/leaderboard.component";
import Word from "./components/word/word.component";


const App = () => {
  return (
    <HashRouter base="/">
      <Routes>
        <Route path="/" element={<Launch />} />
        <Route path="/word" element={<Word />} />
        <Route path="/leaderboard" element={<LeaderBoardComponent />} />
      </Routes>
    </HashRouter>
  );
}

export default App;