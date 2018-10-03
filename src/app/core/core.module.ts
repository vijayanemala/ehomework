import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent }     from './home/home.component';
import { HeaderComponent }   from './header/header.component';
import { FooterComponent }   from './footer/footer.component';
import { LoginComponent }    from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [HomeComponent, HeaderComponent, FooterComponent, LoginComponent]
})
export class CoreModule { }
