import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersService } from './service/users.service';
import { StrengthPipe } from './strength/strength.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StrengthPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
