import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2SearchPipeModule],
  declarations: [AppComponent, HelloComponent, FilterPipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
