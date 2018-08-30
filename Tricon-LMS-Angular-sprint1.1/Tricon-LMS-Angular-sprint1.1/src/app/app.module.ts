import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'
import { Observable } from '../../node_modules/rxjs';
import {BehaviorSubject}from '../../node_modules/rxjs';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routes } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthCoursesComponent } from './auth-courses/auth-courses.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CoursedescComponent } from './coursedesc/coursedesc.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UploadcoursesComponent } from './uploadcourses/uploadcourses.component';
import { SigninComponent } from './signin/signin.component';
import {UserService} from './user.service'; 
import { HttpClientModule } from '@angular/common/http';


import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular5-social-login";
import { LogoutComponent } from './logout/logout.component';
import { MessageComponent } from './message/message.component';
import { AuthdeskComponent } from './authdesk/authdesk.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';

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
    CoursedescComponent,
    SidebarComponent,
    UploadcoursesComponent,
    SigninComponent,
    LogoutComponent,
    MessageComponent,
    AuthdeskComponent,
    UserComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    SocialLoginModule,
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory:getAuthServiceConfigs
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
