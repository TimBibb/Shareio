import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFrown,
  faMeh,
  faSmile,
  faAngry,
  faFlushed,
  faSmileBeam,
  faDizzy,
  faSurprise,
  faQuestionCircle,
  faGrinBeam,
  faLightbulb,
  faSun,
} from "@fortawesome/free-regular-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
const moods = [
  { name: "Sad", icon: faFrown },
  { name: "Neutral", icon: faMeh },
  { name: "Happy", icon: faSmile },
  { name: "Angry", icon: faAngry },
  { name: "Bored", icon: faFlushed },
  { name: "Calm", icon: faSmileBeam },
  { name: "Tired", icon: faDizzy },
  { name: "Surprised", icon: faSurprise },
  { name: "Confused", icon: faQuestionCircle },
  { name: "Anxious", icon: faExclamationCircle },
  { name: "Excited", icon: faGrinBeam },
  { name: "Motivated", icon: faLightbulb },
  { name: "Relaxed", icon: faSun },
];
export function MoodList({ selectedMoods, handleMoodSelect }) {
  return (
    <div className="grid gap-x-2 gap-y-2 grid-cols-5 w-fit mx-auto min-w-fit">
      {moods.map((mood, index) => (
        <div
          key={mood.name}
          className={`mood mx-auto ${
            selectedMoods.includes(mood) ? "selected" : ""
          }`}
          onClick={() => handleMoodSelect(mood)}
        >
          <FontAwesomeIcon
            icon={mood.icon}
            className={`mood-icon ${
              selectedMoods.includes(mood) ? "text-selected" : ""
            }`}
          />
          <p
            className={`${selectedMoods.includes(mood) ? "text-selected" : ""}`}
          >
            {mood.name}
          </p>
        </div>
      ))}
    </div>
  );
}
