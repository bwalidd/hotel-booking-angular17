import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  endpoint: string = '/api/HotelBooking/';  // Use the proxy path

  constructor(private http: HttpClient) {}

  LoginService(data: any) {
    return this.http.post(this.endpoint + 'Login', data);
  }

  getRooms() {
    return this.http.get(this.endpoint + 'GetAllRooms');
  }

  createBooking(obj: any) {
    return this.http.post(this.endpoint + 'bookroom', obj);
  }

  saveupdateRoom(data: any) {
    return this.http.post(this.endpoint + 'AddUpdateBulkRooms', data);
  }

  deleteRoom(id: any) {
   // console.log('-----> '+this.endpoint + 'DeleteRoomByRoomId?roomId=' + id);
    return this.http.delete(this.endpoint + 'DeleteRoomByRoomId?roomId=' + id);
  }

  getAllCustomers() {
    return this.http.get(this.endpoint + 'GetAllCustomers');
  }

  getAllUsers() {
    return this.http.get(this.endpoint + 'GetAllUsers');
  }

  addUpdateUser(data:any){
    return this.http.post(this.endpoint + 'AddUpdateUser', data);
  }

  GetBookingsByMonth(month: number) {
    return this.http.get(this.endpoint + 'GetBookingsByMonth?month='+month)
  } 
}
