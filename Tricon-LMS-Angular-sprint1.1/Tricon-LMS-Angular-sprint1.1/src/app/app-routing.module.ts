import { RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthCoursesComponent } from './auth-courses/auth-courses.component';
import {CreateCourseComponent} from './create-course/create-course.component';
import { CoursedescComponent } from './coursedesc/coursedesc.component';
import { SigninComponent } from './signin/signin.component';
import { MessageComponent } from './message/message.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';


export const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'authcourses', component: AuthCoursesComponent },
  { path: 'createCourse', component: CreateCourseComponent },
  { path: 'coursedesc', component: CoursedescComponent },
  { path: 'signin', component: SigninComponent},
  { path: 'message', component: MessageComponent},
  { path: 'user', component: UserComponent },
  {path: 'form', component: FormComponent}
];

