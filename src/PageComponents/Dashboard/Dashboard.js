import PropTypes from 'prop-types';
import React from "react";
import Select from 'react-select'

const getFormattedOptions = buildingList => buildingList.map((buildingInfo) => ({ label: buildingInfo.name, value: buildingInfo.name }));

const Dashboard = ({ buildingList }) => {
  const [selectedBuilding, setSelectedBuilding] = React.useState(((buildingList || [])[0] || {}).name || '');

  const handleOnChange = ({ value }) => {
    setSelectedBuilding(value);
  };

  return (
    <Select
      options={getFormattedOptions(buildingList)}
      value={{ label: selectedBuilding, value: selectedBuilding }}
      onChange={handleOnChange}
    />
  );
};

Dashboard.propTypes = {
  buildingList: PropTypes.array.isRequired,
}

export default Dashboard;
