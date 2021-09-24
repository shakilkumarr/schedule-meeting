import _map from 'lodash/map';

export const getFormattedValueOptions = (data, labelKey, valueKey) => _map(data, dataInfo => ({
  label: dataInfo[labelKey],
  value: dataInfo[valueKey],
}));
