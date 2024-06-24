import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoomsService } from '../../service/rooms.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Corrected to styleUrls
  providers: [RoomsService]
})
export class LoginComponent {
  loginObj: any = {
    "phone": "",
    "password": ""
  };

  constructor(private service: RoomsService, private router: Router) {}

  onsubmit() {
    console.log(this.loginObj);
    this.service.LoginService(this.loginObj).subscribe(
      (res: any) => {
        if (res.result) {
          console.log("res", res.data);
          
          localStorage.setItem('hoteluser', JSON.stringify(res.data));
          this.router.navigate(['/newbooking']);
        } else {
          alert('Invalid Credentials');
        }
      },
      error => {
        console.log("error a jmi");
      }
    );
  }
}
