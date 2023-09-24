import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './MWH/menu-bar/menu-bar.component';
import { AppGridComponent } from './MWH/commonComponents/app-grid/app-grid.component';
import { AppMultiSelectDropdownComponent } from './MWH/commonComponents/app-multi-select-dropdown/app-multi-select-dropdown.component';
import { HomePageComponent } from './MWH/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    AppGridComponent,
    AppMultiSelectDropdownComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
