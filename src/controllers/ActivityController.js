import Activity from '../models/Activity';

const API_URL = 'https://www.boredapi.com/api/activity';

const fetchActivity = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  const activity = new Activity(
    data.activity,
    data.type,
    data.participants,
    data.price
  );

  return activity;
};

export default fetchActivity;