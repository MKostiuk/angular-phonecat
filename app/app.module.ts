import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Phone } from './core/phone/phone.service';
import { FormsModule } from "@angular/forms";
import { PhoneListComponent } from "./phone-list/phone-list.component";
import { PhoneDetailComponent } from "./phone-detail/phone-detail.component";
import { CheckmarkPipe } from "./core/checkmark/checkmark.pipe";
import { AppRoutingModule } from "./app-routing.module";
import {AppComponent} from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
      FormsModule,
      AppRoutingModule
  ],
    declarations: [
        AppComponent,
      PhoneListComponent,
        PhoneDetailComponent,
        CheckmarkPipe
    ],
  providers: [
    Phone,
  ],
    bootstrap: [AppComponent]
})
export class AppModule {}