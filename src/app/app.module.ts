import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { OrganizationCardComponent } from './view/component/organization-card/organization-card.component';
import { MaterialModule } from './config/material.module';
import { HeaderComponent } from './view/component/header/header.component';
import { OrganizationListComponent } from './view/component/organization-list/organization-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationCardComponent,
    HeaderComponent,
    OrganizationListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
