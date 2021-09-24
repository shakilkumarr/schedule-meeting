import {
  useQuery,
} from "@apollo/client";

import {
  FETCH_ALL_BUILDINGS
} from '../../actions/ScheduleMeeting.actions';
import Dashboard from "../Dashboard/Dashboard";

const HomePage = () => {
  const { loading, error, data } = useQuery(FETCH_ALL_BUILDINGS);
  if (loading) return 'Loading';
  if (error) return 'Error';

  return <Dashboard buildingList={data.Buildings} />;
};

export default HomePage;
