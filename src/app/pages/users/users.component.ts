import { Component } from '@angular/core';
import { RoomsService } from '../../service/rooms.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  providers: [RoomsService]

})
export class UsersComponent {

  allUsers: any []= [];
  objj = {}
  constructor(private roomsrv:RoomsService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.roomsrv.getAllUsers().subscribe((res:any) => {
      if (res.result) {
        this.allUsers = res.data;
      }else{
        alert('No Users Found');
      }
    });
  }

  AddNewEmp() {
    let obj = {
      "userId": 0,
      "userName": "",
      "password": "",
      "role": "",
    }
    this.allUsers.unshift(obj);
  }

  saveData() {
    this.objj = this.allUsers[0];
    // console.log('obj:', obj);

    this.roomsrv.addUpdateUser(this.objj).subscribe((res: any) => {
      if (res && res.result) {
        alert('Saved Successfully');
      } else {
        alert('Failed to Save');
      }
    }, error => {
      console.error('Error saving data:', error);
      alert('An error occurred while saving data.');
    });
  }
}
