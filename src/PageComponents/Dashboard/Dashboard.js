import PropTypes from 'prop-types';
import React from "react";

import _head from 'lodash/head';
import _find from 'lodash/find';
import _size from 'lodash/size';

import Select from '../../Atom/Select';
import { _name, _meetingRooms } from '../../base/scheduleMeeting.reader';
import { getFormattedValueOptions } from '../../base/utils';

import BuildingDV from '../BuildingDV';

import styles from './dashboard.module.css';

const Dashboard = ({ buildingList }) => {
  const [selectedBuilding, setSelectedBuilding] = React.useState(_name(_head(buildingList)));

  const handleOnChange = ({ value }) => {
    setSelectedBuilding(value);
  };

  const formattedOptions = React.useMemo(() => getFormattedValueOptions(buildingList, 'name', 'name'), [buildingList]);
  const formattedValue = React.useMemo(() => ({ label: selectedBuilding, value: selectedBuilding }), [selectedBuilding])
  const selectedBuildingInfo = React.useMemo(() => _find(buildingList, ['name', selectedBuilding]), [buildingList, selectedBuilding]);
  const isMeetingRoomAvailable = React.useMemo(() => _size(_meetingRooms(selectedBuildingInfo)) > 0, [selectedBuildingInfo]);
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.header}><div>Schedule Meeting</div></div>
        <div className={`${styles.selectContainer} customSelect`}>
          <Select
            options={formattedOptions}
            value={formattedValue}
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div className={styles.meetingContainer}>
        <BuildingDV buildingInfo={selectedBuildingInfo} />
        {
          isMeetingRoomAvailable && <div className={styles.button}>Add a Meeting</div>
        }
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  buildingList: PropTypes.array.isRequired,
}

export default Dashboard;
