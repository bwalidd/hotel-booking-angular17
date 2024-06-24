import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewBookingComponent } from './pages/new-booking/new-booking.component';
import { BookingListComponent } from './pages/booking-list/booking-list.component';
import { BookingCalendarComponent } from './pages/booking-calendar/booking-calendar.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'',
        component: LayoutComponent,
        children:
        [
            {
                path:'dashboard',
                component: DashboardComponent
            },
            {
                path:'rooms',
                component: RoomsComponent
            },
            {
                path: 'newbooking',
                component: NewBookingComponent
            },
            {
                path: 'bookings',
                component: BookingListComponent
            },
            {
                path: 'booking-calendar',
                component: BookingCalendarComponent
            },
            {
                path: 'customers',
                component: CustomersComponent
            },
            {
                path: 'employees',
                component: UsersComponent
            }
        ]
    }
];
