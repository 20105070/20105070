/*cloud.component.ts - Daniel Syrén (20105070)*/
import { Component } from '@angular/core';
import { University } from '../models/university';
import { HttpService } from '../http_service';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html'
})
export class CloudComponent {

    universities: University[];
    responses: University[];

  constructor(private httpService: HttpService) {
    this.universities = [];
    this.responses = [];
  }

  delete() {
    alert("Deleted!");
}

  load() {
    this.httpService.getData().subscribe((response: any) => {
      this.responses = response;
    });
}

}