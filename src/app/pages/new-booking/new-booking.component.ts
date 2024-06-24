import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoomsService } from '../../service/rooms.service';

@Component({
  selector: 'app-new-booking',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './new-booking.component.html',
  styleUrl: './new-booking.component.css',
})
export class NewBookingComponent implements OnInit{
  bookingObj: any  = {
    "name": "",
    "mobileNo": "",
    "email": "",
    "aadharNo": "",
    "city": "",
    "address": "",
    "bookingId": 0,
    "roomId": 0,
    "customerId": 0,
    "bookingFromDate": "",
    "bookingToDate": "",
    "createdDate": new Date(),
    "bookingRate": 0,
    "naration": "",
    "createdBy": 1,
    "hotelBookingDetails": [
      
    ]
  };

  guestObj: any = {
    "bookingDetailId": 0,
    "bookingId": 0,
    "customerName": "",
    "aadharCardNo": ""
  };

  ngOnInit(): void {
    this.loadRooms();
  }

  roomList: any[] = [];
  constructor(private roomSrv:RoomsService){}

  addGuest() {
    const obj = JSON.stringify(this.guestObj);
    const parserobj = JSON.parse(obj);
    this.bookingObj.hotelBookingDetails.unshift(parserobj);
  }

  loadRooms() {
    this.roomSrv.getRooms().subscribe((res:any)=>{
      this.roomList = res.data;
    })
  }
  removeGuest(index:number) {
    this.bookingObj.hotelBookingDetails.splice(index, 1);
  }

  onSaveBooking() {
    this.roomSrv.createBooking(this.bookingObj).subscribe((res: any) => {
      if(res.result) {
        alert('Booking Created')
      } else {
        alert(res.message)
      }
    })
  }
}
