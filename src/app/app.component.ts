import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoginComponent } from "./features/auth/components/login/login.component";
import { RegisterComponent } from "./features/auth/components/register/register.component";
import { ContactComponent } from "./features/auth/components/contact/contact.component";
import { AboutComponent } from "./features/auth/components/about/about.component";
import { FarmerHomeComponent } from "./features/farmer/components/farmer-home/farmer-home.component";
// import { DashboardComponent } from "./features/farmer/components/dashboard/dashboard.component";
import { DealerDashboardComponent } from './features/dealer/components/dashboard/dashboard.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, LoginComponent, RegisterComponent, ContactComponent, AboutComponent, FarmerHomeComponent, DealerDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
