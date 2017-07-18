import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LookupComponent } from './lookup.component';
import { LookupService } from './lookup.service';
import { NdBannerComponent } from './header/nd-banner/nd-banner.component';
import { HeaderComponent } from './header/header.component';
import { ClaimLookupComponent } from './claim-lookup/claim-lookup.component';
import { ClaimListComponent } from './claim-lookup/claim-list/claim-list.component';

@NgModule({
imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpModule ],
  declarations: [ AppComponent, LookupComponent, NdBannerComponent, HeaderComponent, ClaimLookupComponent, ClaimListComponent ],
  providers: [LookupService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
