import { Component,OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-meeting',
  templateUrl: './book-meeting.component.html',
  styleUrls: ['./book-meeting.component.css']
})
export class BookMeetingComponent implements OnInit{
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  username: (string | null) | undefined;

  meetingForm!: FormGroup; 

  rooms = ['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5', 'Room 6', 'Room 7', 'Room 8', 'Room 9', 'Room 10'];

  constructor(
    public dialogRef: MatDialogRef<BookMeetingComponent>,
    private authService: AuthService,
    private fb: FormBuilder,
  ) {

  }
  ngOnInit(): void {
    this.username  = this.authService.getUsername();
    this.initializeForm()
  }

  initializeForm() {
     this.meetingForm = this.fb.group({
      
    });
  }

  save(): void {
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
