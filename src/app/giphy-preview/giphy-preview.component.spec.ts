import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyPreviewComponent } from './giphy-preview.component';

describe('GiphyPreviewComponent', () => {
  let component: GiphyPreviewComponent;
  let fixture: ComponentFixture<GiphyPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
