import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeetingService } from '../../services/meeting.service';
import { Meeting } from '../../models/meeting';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { BookMeetingComponent } from '../book-meeting/book-meeting.component';

const ELEMENT_DATA: any= [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string | null = '';
  userMeetings = [];
  //========
  meetings: Meeting[] = [];
  meetingRooms: string[] = [
    'Meeting Room 1', 'Meeting Room 2', 'Meeting Room 3',
    'Meeting Room 4', 'Meeting Room 5', 'Meeting Room 6',
    'Meeting Room 7', 'Meeting Room 8', 'Meeting Room 9',
    'Meeting Room 10'
  ];
  roomMeetings: Meeting[] = [];
// ===========
displayedColumns: string[] = ['srno', 'userName', 'agenda', 'date','time','room'];
  dataSource = ELEMENT_DATA;
  constructor(
    private meetingService: MeetingService,
    private router: Router,
    private authService: AuthService,
    public dialog: MatDialog
    ) {}

  ngOnInit() {
    this.username = this.authService.getUsername();
    // this.getMeetings();
  }

  // getMeetings() {
  //   this.meetingService.getMeetings().subscribe(meetings => (this.meetings = meetings));
  // }

  // filterMeetingsByRoom(room: string) {
  //   this.roomMeetings = this.meetings.filter(meeting => meeting.meetingRoom === room);
  // }


  openBookingDialog(): void {
    const dialogRef = this.dialog.open(BookMeetingComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.meetingService.addMeeting(result);
        if (this.username) {
          // this.userMeetings = this.meetingService.getUserMeetings(this.username);
        }
      }
    });
  }



  logout() {
    this.router.navigate(['/login']);
  }
}
