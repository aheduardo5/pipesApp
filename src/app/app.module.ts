import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// PrimeNG
import { SharedModule } from './shared/shared.module';

// locale setting app
import localeEsMX from '@angular/common/locales/es-MX';
import localeffCM from '@angular/common/locales/ff-CM';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsMX);
registerLocaleData(localeffCM);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-MX'
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
