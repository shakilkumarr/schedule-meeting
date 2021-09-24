import {
  useQuery,
} from "@apollo/client";

import {
  FETCH_ALL_BUILDINGS
} from '../../actions/ScheduleMeeting.actions';
import Dashboard from "../Dashboard/Dashboard";

const HomePage = () => {
  const { loading, error, data } = useQuery(FETCH_ALL_BUILDINGS);
  if (loading || error) return (
    <div className="empty">
      {!loading ? 'Loading...' : (
        <div className="error">Error</div>
      )}
    </div>
  );

  return <Dashboard buildingList={data.Buildings} />;
};

export default HomePage;
