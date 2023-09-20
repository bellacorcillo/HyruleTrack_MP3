import React from "react";

const Dashboard = () => {
  // TODO: Fetch the user's progress data from the backend

  const progressData = {
    shrines: 5,
    korokSeeds: 100,
    mainQuests: 10,
    sideQuests: 20,
    temples: 3,
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Progress</h2>
        <ul>
          <li>Shrines: {progressData.shrines}</li>
          <li>Korok Seeds: {progressData.korokSeeds}</li>
          <li>Main Quests: {progressData.mainQuests}</li>
          <li>Side Quests: {progressData.sideQuests}</li>
          <li>Temples: {progressData.temples}</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;