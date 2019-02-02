import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';


import { AppComponent } from './app.component';
import { CommingSoonComponent } from './pages/comming-soon/comming-soon.component';
import { HomeComponent } from './pages/comming-soon/home/home.component';
import { PresentationComponent } from './pages/comming-soon/presentation/presentation.component';
import { EmailInputComponent } from './pages/comming-soon/email-input/email-input.component';
import { FAQComponent } from './pages/comming-soon/faq/faq.component';
import { FooterComponent } from './pages/comming-soon/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CommingSoonComponent,
    HomeComponent,
    PresentationComponent,
    EmailInputComponent,
    FAQComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
