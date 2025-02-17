"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        // Sort teams based on NRR in ascending order
        const sortedTeams = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedTeams);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🏏 IPL 2022 Points Table</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.Team}>
              <td>{index + 1}</td>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.NRR.toFixed(2)}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "20px" },
  heading: { fontSize: "24px", marginBottom: "20px" },
  table: { width: "80%", margin: "auto", borderCollapse: "collapse" },
  th: { backgroundColor: "#4CAF50", color: "white", padding: "10px", border: "1px solid #ddd" },
  td: { padding: "10px", border: "1px solid #ddd" },
};
