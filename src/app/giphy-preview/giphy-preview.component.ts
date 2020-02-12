import { Component, TemplateRef, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-giphy-preview',
  templateUrl: './giphy-preview.component.html',
  styleUrls: ['./giphy-preview.component.scss']
})
export class GiphyPreviewComponent implements OnInit {
  @Input() popupEvent: Observable<void>;
  @ViewChild('popupTemplate') popupTemplate: ElementRef;
  template: TemplateRef<any>
  modalRef: BsModalRef;
  previewURL: string;
  config = {
    backdrop: true,
    ignoreBackdropClick: false,
    class: 'modal-dialog-centered'
  };
  constructor(private modalService: BsModalService) { }

  openModal() {
    this.modalRef = this.modalService.show(this.popupTemplate, this.config);
  }

  ngOnInit(): void {
    this.popupEvent.subscribe((url: any) => {
      this.previewURL = url;
      this.openModal();
    });

  }

}
