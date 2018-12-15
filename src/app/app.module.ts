import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component';
import { HumanDatePipe } from './human-date.pipe';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ShowAllComponent,
    ShowDetailsComponent,
    StatusIndicatorComponent,
    HumanDatePipe
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
