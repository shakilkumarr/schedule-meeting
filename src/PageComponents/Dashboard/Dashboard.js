import PropTypes from 'prop-types';
import React from "react";

import Select from '../../base/Select';
import {
  EMPTY_ARRAY, EMPTY_OBJECT,
} from '../../base/constants/constants';

const getFormattedOptions = buildingList => buildingList.map((buildingInfo) => ({
  label: buildingInfo.name,
  value: buildingInfo.name,
}));

const Dashboard = ({ buildingList }) => {
  const [selectedBuilding, setSelectedBuilding] = React.useState(((buildingList || EMPTY_ARRAY)[0] || EMPTY_OBJECT).name || '');

  const handleOnChange = ({ value }) => {
    setSelectedBuilding(value);
  };

  return (
    <div>
      <Select
        options={getFormattedOptions(buildingList)}
        value={{ label: selectedBuilding, value: selectedBuilding }}
        onChange={handleOnChange}
      />
    </div>
  );
};

Dashboard.propTypes = {
  buildingList: PropTypes.array.isRequired,
}

export default Dashboard;
