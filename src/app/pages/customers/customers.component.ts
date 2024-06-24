import { Component } from '@angular/core';
import { RoomsService } from '../../service/rooms.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
  providers: [RoomsService]
})
export class CustomersComponent {

  allCustomers: any []= [];
  constructor(private roomsrv:RoomsService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.roomsrv.getAllCustomers().subscribe((res:any) => {
      if (res.result) {
        this.allCustomers = res.data;
      }else{
        alert('No Customers Found');
      }
    });
  }


}
