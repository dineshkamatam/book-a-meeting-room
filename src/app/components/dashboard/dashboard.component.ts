import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeetingService } from '../../services/meeting.service';
import { Meeting } from '../../models/meeting';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  meetings: Meeting[] = [];
  meetingRooms: string[] = [
    'Meeting Room 1', 'Meeting Room 2', 'Meeting Room 3',
    'Meeting Room 4', 'Meeting Room 5', 'Meeting Room 6',
    'Meeting Room 7', 'Meeting Room 8', 'Meeting Room 9',
    'Meeting Room 10'
  ];
  roomMeetings: Meeting[] = [];

  constructor(private meetingService: MeetingService, private router: Router) {}

  ngOnInit() {
    this.getMeetings();
  }

  getMeetings() {
    this.meetingService.getMeetings().subscribe(meetings => (this.meetings = meetings));
  }

  filterMeetingsByRoom(room: string) {
    this.roomMeetings = this.meetings.filter(meeting => meeting.meetingRoom === room);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
