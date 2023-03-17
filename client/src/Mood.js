import { MoodList } from "./MoodList";
import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";
import "./mood.css";

const Mood = () => {
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [mood, setMood] = useState(5);
  const [moodEntries, setMoodEntries] = useState([
    { entry_date: "2023-03-14", mood: 8 },
    { entry_date: "2023-03-13", mood: 3 },
    { entry_date: "2023-03-12", mood: 5 },
    { entry_date: "2023-03-11", mood: 2 },
    { entry_date: "2023-03-10", mood: 9 },
    { entry_date: "2023-03-09", mood: 4 },
    { entry_date: "2023-03-08", mood: 7 },
  ]);

  const handleMoodSelect = (mood) => {
    if (selectedMoods.includes(mood)) {
      setSelectedMoods(selectedMoods.filter((m) => m !== mood));
    } else {
      setSelectedMoods([...selectedMoods, mood]);
    }
  };

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  const moodData = {
    labels: moodEntries.map((entry) => entry.entry_date),
    datasets: [
      {
        label: "Mood",
        data: moodEntries.map((entry) => entry.mood),
        fill: false,
        borderColor: "#5570f3",
        tension: 0.4,
      },
    ],
  };

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      const chartInstance = new Chart(ctx, {
        type: "line",
        data: moodData,
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              type: "time",
              time: {
                unit: "day",
              },
              grid: {
                display: false,
              },
              ticks: {
                color: "#4A4E69",
              },
            },
            y: {
              min: 0,
              max: 10,
              stepSize: 1,
              grid: {
                display: false,
              },
              ticks: {
                color: "#4A4E69",
                callback: function (value) {
                  switch (value) {
                    case 0:
                      return "Bad";
                    case 5:
                      return "Neutral";
                    case 10:
                      return "Amazing";
                    default:
                      return "";
                  }
                },
              },
            },
          },
        },
      });

      return () => {
        chartInstance.destroy();
      };
    }
  }, [chartRef]);

  return (
    <div>
      <div
        className="flex flex-col p-4 rounded-b-lg shadow-lg bg-white"
        style={{ backgroundColor: "#5371f3" }}
      >
        <h1 className="text-2xl font-bold mb-4 text-white self-center">
          Track Your Mood
        </h1>
        <div className="mood-slider">
          <input
            type="range"
            min="0"
            max="10"
            value={mood}
            onChange={handleMoodChange}
            className="slider accent-white ring-white outline-white fill-white"
          />
          <p className="text-white">How are you feeling?</p>
        </div>
        <MoodList
          selectedMoods={selectedMoods}
          handleMoodSelect={handleMoodSelect}
        />
      </div>

      <div
        style={{
          margin: "auto",
          maxWidth: "600px",
        }}
      >
        <canvas id="moodChart" ref={chartRef} width="400" height="200"></canvas>
      </div>
      <h2 className="text-xl font-semibold mb-4">Recent Moods</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="text-sm font-semibold text-gray-500">Date</th>
            <th className="text-sm font-semibold text-gray-500">Mood</th>
          </tr>
        </thead>
        <tbody>
          {moodEntries.slice(0, 7).map((entry) => (
            <tr key={entry.entry_date}>
              <td className="border-t border-gray-200 py-2">
                {entry.entry_date}
              </td>
              <td className="border-t border-gray-200 py-2">{entry.mood}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mood;
