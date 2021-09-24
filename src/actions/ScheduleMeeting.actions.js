import {
  gql
} from "@apollo/client";

export const FETCH_ALL_BUILDINGS = gql`
  {
    Buildings {
      name
      meetingRooms{
        name
        meetings{
          title
          date
          startTime
          endTime
        }
      }
    }
  }
`;

export const FETCH_ALL_MEETINGS = gql`
  {
    MeetingRooms{
      name
      floor
      building{
        name
      }
      meetings{
        title
      }
    }
  }
`;

export const ADD_MEETING = payload => gql`
  mutation {
    Meeting(
      id: ${payload.id}
      title: ${payload.title}
      date: ${payload.date}
      startTime: ${payload.startTime}
      endTime: ${payload.endTime}
      meetingRoomId: ${payload.meetingRoomId}) {
      id
      title
    }
  }
`;
