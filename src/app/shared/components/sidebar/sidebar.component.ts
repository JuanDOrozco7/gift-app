import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
    selector: 'shared-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  constructor ( private giftService: GifsService ) {}

  get tags() {
    return this.giftService.tagsHistory;
  }

  public searchTag(tag: string){
    this.giftService.searchTag(tag);
  }
}
