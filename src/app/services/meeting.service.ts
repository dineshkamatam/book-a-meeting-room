import { Injectable } from '@angular/core';
import {Meeting} from "../models/meeting"

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private meetings: Meeting[] = [
    {
        "id":101,
        "username": "dinesh",
        "date": "2024-06-23T18:30:00.000Z",
        "startTime": "9:30 AM",
        "endTime": "10:00 AM",
        "room": "Room #1",
        "agenda": "to discus about product architechture"
    },
    {   "id":102,
        "username": "ramesh",
        "date": "2024-06-23T18:30:00.000Z",
        "startTime": "11:00 AM",
        "endTime": "12:00 PM",
        "room": "Room #2",
        "agenda": "dfasdfasidhf a sdf as dfas dfa sdf"
    },
    {   "id":103,
        "username": "dinesh",
        "date": "2024-06-24T18:30:00.000Z",
        "startTime": "2:00 PM",
        "endTime": "3:30 PM",
        "room": "Room #2",
        "agenda": "aSDasasdaSDAsdaSD"
    },
    {
      "id": 104,
      "username": "dinesh",
      "date": "2024-06-26T18:30:00.000Z",
      "startTime": "10:30 AM",
      "endTime": "11:30 AM",
      "room": "Room #5",
      "agenda": "asdfasdf",
  },
  {
    "id": 105,
    "username": "ramesh",
    "date": "2024-06-26T18:30:00.000Z",
    "startTime": "12:00 PM",
    "endTime": "01:30 PM",
    "room": "Room #5",
    "agenda": "asdfasdf",
  },
  {
    "id": 105,
    "username": "teju",
    "date": "2024-06-28T18:30:00.000Z",
    "startTime": "12:00 PM",
    "endTime": "01:30 PM",
    "room": "Room #3",
    "agenda": "asdfasdf",
  }
];

  addMeeting(meeting: Meeting): void {
    let arr = {...meeting,id:this.meetings.length+101}
    this.meetings.push(arr);
  }

  getUserMeetings(username: string): Meeting[] {
    return this.meetings.filter(meeting => meeting.username === username);
  }

  getRoomMeetings(room: string): Meeting[] {
    return this.meetings.filter(meeting => meeting.room === room);
  }

  searchAvailableRooms(val:any){
    return this.meetings.filter(meeting => (new Date(meeting.date).getDate() === new Date(val.date).getDate() && meeting.startTime === val.startTime && meeting.endTime === val.endTime) )
  }

  deleteMeeting(meeting: Meeting): void {
    this.meetings = this.meetings.filter(m => m.id !== meeting.id);
  }
}
