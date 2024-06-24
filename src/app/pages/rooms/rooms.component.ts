import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../service/rooms.service';
import { FormsModule } from '@angular/forms';
import { randomInt } from 'crypto';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  providers: [RoomsService]
})
export class RoomsComponent implements OnInit{


  allRooms: any []= [];

  constructor(private roomsrv:RoomsService){
    
  }

  ngOnInit(){
    this.getAllRooms();
  }

  getAllRooms(){
    this.roomsrv.getRooms().subscribe((res:any)=>{
      this.allRooms = res.data;

    })
  }

  getRandomInt(min: number, max: number): number {
    const range = max - min + 1;
    const randomValue = new Uint32Array(1);
    window.crypto.getRandomValues(randomValue);
    return min + (randomValue[0] % range);
  }

  AddNew() {
    alert('Add New Room');
    let obj = {
      roomID: 0,
      roomName: '',
      isAcAvailable: false,
      roomCapacity: 1,
      isActive: false,
      roomTariff: 0,
      extensionNo: '0'
    }
    this.allRooms.unshift(obj);
  }

  saveRoom(){
    this.roomsrv.saveupdateRoom(this.allRooms).subscribe((res:any)=>{
      if (res.result){
        alert('Saved Successfully');
      }else{
        alert('Failed to save '+ res.message);
      }
    })
  }

  removeRoom(id:number){
    this.roomsrv.deleteRoom(id).subscribe((res:any)=>{
      if (res.result){
        alert('Deleted Successfully');
        this.getAllRooms();
      }else{
        alert('Failed to delete: '+ res.message);
      }
    })
  }

}
