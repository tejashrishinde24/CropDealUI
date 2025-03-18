import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutComponent } from './features/auth/components/about/about.component';
import { ContactComponent } from './features/auth/components/contact/contact.component';
// import { AddonsComponent } from './features/addons/addons.component';/
import { ViewCropsComponent } from './features/farmer-dealer/components/view-crops/view-crops.component';
import { DashboardComponent } from './features/farmer/components/farmer-dashboard/dashboard.component';
import { AddCropDetailComponent } from './features/farmer/components/add-crop-detail/add-crop-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path:'dashboard', component: DashboardComponent},
  // { path: 'addons', component: AddonsComponent }, 
  {path: 'add-crop-detail', component: AddCropDetailComponent},
  {path: 'view-crops', component: ViewCropsComponent}
  //  // Add Ons route
];
