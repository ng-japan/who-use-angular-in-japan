import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './config/material.module';
import { FooterComponent } from './view/component/footer/footer.component';
import { HeaderComponent } from './view/component/header/header.component';
import { OrganizationCardComponent } from './view/component/organization-card/organization-card.component';
import { OrganizationListComponent } from './view/component/organization-list/organization-list.component';
import { SafeHtmlPipe } from './view/pipe/safe-html.pipe';
import { ToHtmlPipe } from './view/pipe/to-html.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationCardComponent,
    HeaderComponent,
    OrganizationListComponent,
    FooterComponent,
    ToHtmlPipe,
    SafeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
