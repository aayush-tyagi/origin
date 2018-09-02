import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import {BehaviorSubject} from '../../node_modules/rxjs';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { routes } from './app-routing.module';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthCoursesComponent } from './pages/auth-courses/auth-courses.component';
import { CreateCourseComponent } from './pages/create-course/create-course.component';

import { SidebarComponent } from './common/sidebar/sidebar.component';
import { UploadcoursesComponent } from './common/uploadcourses/uploadcourses.component';
import { SigninComponent } from './pages/signin/signin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from 'angular5-social-login';
import { LogoutComponent } from './common/logout/logout.component';
import { MessageComponent } from './pages/message/message.component';
import { CourseDescriptionComponent } from './common/course-description/course-description.component';
import { CourseTableComponent } from './common/course-table/course-table.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { EditComponent } from './pages/edit/edit.component';

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("361913955768-h08iheqognma71rub15ltj7tf7htjnaa.apps.googleusercontent.com")
        },
      ]
  );
  return config;
  }
  


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AuthCoursesComponent,
    CreateCourseComponent,

    SidebarComponent,
    UploadcoursesComponent,
    SigninComponent,
    LogoutComponent,
    MessageComponent,
    CourseDescriptionComponent,
    CourseTableComponent,
    UserManagementComponent,
    EditComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    SocialLoginModule,
    BrowserModule,
    HttpModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
