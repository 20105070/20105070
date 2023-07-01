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

  constructor(private httpService: HttpService) {
    this.universities = [];
  }

  delete(name: string) {
    this.httpService.deleteUniversity(name).subscribe(() => {
      this.load();
    });
  }

  load() {
    this.httpService.getUniversities().subscribe((universities: University[]) => {
      this.universities = universities;
    });
  }

}