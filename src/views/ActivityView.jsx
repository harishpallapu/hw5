import React, { useState } from 'react';
import fetchActivity from '../controllers/ActivityController';

const ActivityView = () => {
  const [activity, setActivity] = useState(null);

  const handleGetActivity = async () => {
    const newActivity = await fetchActivity();
    setActivity(newActivity);
  };

  return (
    <div>
      <h1>Activity Suggestion</h1>
      {activity ? (
        <div>
          <p>Activity: {activity.activity}</p>
          <p>Type: {activity.type}</p>
          <p>Participants: {activity.participants}</p>
          <p>Price: {activity.price}</p>
        </div>
      ) : (
        <p>Click the button to get an activity suggestion.</p>
      )}
      <button onClick={handleGetActivity}>Get Activity</button>
    </div>
  );
};

export default ActivityView;