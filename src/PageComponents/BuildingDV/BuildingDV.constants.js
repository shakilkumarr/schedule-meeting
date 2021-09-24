import _size from 'lodash/size';
import _map from 'lodash/map';
import _reduce from 'lodash/reduce';

import { _name, _meetingRooms, _meetings } from '../../base/scheduleMeeting.reader';

export const BUILDING_DV_FORM_ELEMENTS = [{
  label: 'Building Name',
  getValue: _name,
}, {
  label: 'Total Meeting Rooms',
  getValue: data => _size(_meetingRooms(data)),
}, {
  label: 'Total Meetings',
  getValue: data => _reduce(_meetingRooms(data), (acc, curr) => {
    acc += _size(_meetings(curr));
    return acc;
  }, 0),
}]