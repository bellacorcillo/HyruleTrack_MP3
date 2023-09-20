import React from "react";

const Leaderboard = () => {
  // TODO: Fetch the leaderboard data from the backend

  const leaderboardData = [
    {
      name: "Player 1",
      percentageComplete: 90,
    },
    {
      name: "Player 2",
      percentageComplete: 80,
    },
    {
      name: "Player 3",
      percentageComplete: 70,
    },
  ];

  return (
    <div>
      <h1>Leaderboard</h1>
      <div>
        <h2>Top 3 Players</h2>
        <ol>
          {leaderboardData.map((player, index) => (
            <li key={index}>{player.name} - {player.percentageComplete}%</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Leaderboard;