import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { GiphySearchComponent } from './giphy-search/giphy-search.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  giphyData: any;
  popupEventSubject: Subject<void> = new Subject<void>();
  @ViewChild(GiphySearchComponent) giphySearchComponent;
  title = 'giphy';
  ngAfterViewInit() {
    // this.data = this.giphySearchComponent.data;
  }
  receivedGiphyData($event) {
    this.giphyData = this.formatDataForGrid($event);
    console.log('achiedved', this.giphyData);
  }


  emitEventToModel(url) {
    this.popupEventSubject.next(url);
  }
  formatDataForGrid(giphyData) {
    let rowData = [];
    let colData = [];
    for (let index = 0; index < giphyData.length; index++) {
      colData.push(giphyData[index]);
      if (index != 0 && index % 4 == 0) {
        rowData.push(colData);
        colData = [giphyData[index]];
      }
    }
    return rowData;
  }
}
