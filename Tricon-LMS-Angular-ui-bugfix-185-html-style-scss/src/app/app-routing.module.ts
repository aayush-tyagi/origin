import { RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthCoursesComponent } from './pages/auth-courses/auth-courses.component';
import {CreateCourseComponent} from './pages/create-course/create-course.component';
import { CourseTableComponent } from './common/course-table/course-table.component';
import { SigninComponent } from './pages/signin/signin.component';
import { MessageComponent } from './pages/message/message.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { EditComponent } from './pages/edit/edit.component';


export const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'authcourses', component: AuthCoursesComponent },
  { path: 'createCourse', component: CreateCourseComponent },
  { path: 'courseTable', component: CourseTableComponent },
  { path: 'signin', component: SigninComponent},
  { path: 'message', component: MessageComponent},
  {path: 'user', component:UserManagementComponent},
  {path: 'edit', component:EditComponent}
];

