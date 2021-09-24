import {
  useQuery,
} from "@apollo/client";

import {
  FETCH_ALL_BUILDINGS
} from '../../actions/ScheduleMeeting.actions';

const HomePage = () => {
  const { loading, error, data } = useQuery(FETCH_ALL_BUILDINGS);
  if (loading) return 'Loading';
  if (error) return 'Error';
  console.log(data);

  return 'HomePage'
};

export default HomePage;
