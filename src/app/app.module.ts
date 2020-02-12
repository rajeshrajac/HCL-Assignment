import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GiphySearchComponent } from './giphy-search/giphy-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GiphyPreviewComponent } from './giphy-preview/giphy-preview.component';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    AppComponent, GiphySearchComponent, GiphyPreviewComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
