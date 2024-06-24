import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet,Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,RouterModule
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'] // Fixed typo: styleUrl -> styleUrls
})
export class LayoutComponent {
  localObj: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {
    if (isPlatformBrowser(this.platformId)) {
      const localData = localStorage.getItem('hoteluser');
      if (localData) {
        this.localObj = JSON.parse(localData);
      }
    }
  }

  Tologout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('hoteluser');
      this.localObj = null;
      this.router.navigateByUrl('/login');
    }
  }
}
