import React, { useState } from "react";

const initialArr = [];

function RunningExercise() {
  const [addArr, setArr] = useState(initialArr);
  const [time, setTime] = useState("");
  const [id, setId] = useState(0);

  function addTime() {
    if (!time || !/^([0-9]{2}):([0-9]{2}):([0-9]{2})/.test(time)) {
      alert("Enter HH:MM:SS");
      return;
    }

    const nextLap = [...addArr, { id, time }];
    setArr(nextLap);
    setId(id + 1);
    setTime("");
  }

  return (
    <div>
      <h1>Laps</h1>
      <input
        name="laps"
        pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={addTime}>Add Lap Time</button>
      <ul>
        {addArr.map((lap) => (
          <li key={lap.id}>
            Lap {lap.id + 1}: {lap.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RunningExercise;
