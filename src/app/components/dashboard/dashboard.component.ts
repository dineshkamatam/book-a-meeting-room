import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeetingService } from '../../services/meeting.service';
import { Meeting } from '../../models/meeting';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { BookMeetingComponent } from '../book-meeting/book-meeting.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: any  = '';
  userMeetings:Meeting[] = [];
  selectedRoom: string = ''
  meetings: Meeting[] = [];
  rooms = ['Room #1', 'Room #2', 'Room #3', 'Room #4', 'Room #5', 'Room #6', 'Room #7', 'Room #8', 'Room #9', 'Room #10'];
  roomMeetings: Meeting[] = [];
displayedColumns1: string[] = ['srno', 'userName', 'agenda', 'date','time','room','star'];
displayedColumns2: string[] = ['srno', 'userName', 'agenda', 'date','time','room'];
  constructor(
    private meetingService: MeetingService,
    private router: Router,
    private authService: AuthService,
    public dialog: MatDialog
    ) {}

  ngOnInit() {
    this.username = this.authService.getUsername();
    if(!this.username){
      this.router.navigate(['/login']);
    }
    this.userMeetings = this.meetingService.getUserMeetings(this.username);
  }

  filterMeetingsByRoom() {
    this.roomMeetings = this.meetingService.getRoomMeetings(this.selectedRoom);
  }

  deleteMeeting(ele:any){
    this.meetingService.deleteMeeting(ele)
    this.userMeetings = this.meetingService.getUserMeetings(this.username);
    this.roomMeetings = this.meetingService.getRoomMeetings(this.selectedRoom);
  }

  openBookingDialog(): void {
    const dialogRef = this.dialog.open(BookMeetingComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.meetingService.addMeeting(result);
        if (this.username) {
          this.userMeetings = this.meetingService.getUserMeetings(this.username);
        }
      }
    });
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
