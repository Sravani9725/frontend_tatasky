import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
// import {MatButtonModule} from '@angular/material/button';
// import {MatCardModule} from '@angular/material/card';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    LoginComponent

   
  ],
  imports: [
    BrowserModule,
    FormsModule,

    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
