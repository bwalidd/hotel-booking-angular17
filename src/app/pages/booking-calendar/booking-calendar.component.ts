import { Component } from '@angular/core';
import { RoomsService } from '../../service/rooms.service';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-calendar',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './booking-calendar.component.html',
  styleUrl: './booking-calendar.component.css',
  providers: [RoomsService]
})
export class BookingCalendarComponent {

  selectedDate: Date = new Date(); 
  dayInMonthList: number []=[];
  allRooms: any[]=[];
  bookingList: any []= [];

  constructor(private roomSrv: RoomsService){}

  ngOnInit(): void {
      this.getAllRooms();
      this.GFG_Fun(this.selectedDate);
      this.GetBookingsByMonth(this.selectedDate.getMonth()+1)
  }

  getAllRooms() {
    this.roomSrv.getRooms().subscribe((res:any)=>{
      this.allRooms = res.data;
    })
  }
  GetBookingsByMonth(month: number) {
    this.roomSrv.GetBookingsByMonth(month).subscribe((res:any)=>{
      this.bookingList = res.data;
    })
  }
  
  isDateGone(day:number) {
    const currentDay = new Date().getDate();
    const currDay = Number(currentDay.toString().slice(-2));
    if (day >= currDay && this.selectedDate.getMonth() +1 >= new Date().getMonth())  {
      return true;
    } else {
      if (this.selectedDate.getMonth() +1 > new Date().getMonth()) {
        return true;
      } else {
        return false;
      }
    }
  }

  checkIfBooked(day:number, RoomNo:number) {
    debugger;
    const isbooked = this.bookingList.find(m => m.roomName === RoomNo && m.monthDay === day);
    if (isbooked !== undefined) {
      return isbooked;
    } else {
      return false;
    }
  }

  onDateChange(date: Date) {
    debugger;
    this.GFG_Fun(date);
    this.GetBookingsByMonth(new Date(date).getMonth()+1)
  }

  daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }

  GFG_Fun(newDate: Date) {
    let date = new Date(newDate);
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    console.log();
    this.dayInMonthList = [];
    for (let index = 1; index <= this.daysInMonth(month, year); index++) {
     this.dayInMonthList.push(index)
    }
  }
}
