import { CommonModule } from '@angular/common';
import { NgModule }     from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent }   from './footer/footer.component';
import { HeaderComponent }   from './header/header.component';
import { HomeComponent }     from './home/home.component';
import { LoginComponent }    from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [HomeComponent, HeaderComponent, FooterComponent, LoginComponent],
  exports: [CommonModule, HeaderComponent, FooterComponent]
})
export class CoreModule {
}
