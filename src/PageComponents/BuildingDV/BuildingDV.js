import PropTypes from 'prop-types';
import _map from 'lodash/map';

import { BUILDING_DV_FORM_ELEMENTS } from './BuildingDV.constants';
import styles from './buildingDv.module.css';

const BuildingDV = ({ buildingInfo }) => {
  console.log(buildingInfo);
  return (
    <div className={styles.buildingInformationContainer}>
      {
        _map(BUILDING_DV_FORM_ELEMENTS, ({ label, getValue}) => (
          <div className={styles.formContainer}>
            <div className={styles.formLabel}>{label}</div>
            <div className={styles.formValue}>{getValue(buildingInfo)}</div>
          </div>
        ))
      }
    </div>
  )
};

BuildingDV.propTypes = {
  buildingInfo: PropTypes.object.isRequired,
};

export default BuildingDV;
