/*cloud.component.spec.ts - Daniel Syrén (20105070)*/
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudComponent } from './cloud.component';

describe('CloudComponent', () => {
  let component: CloudComponent;
  let fixture: ComponentFixture<CloudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudComponent]
    });
    fixture = TestBed.createComponent(CloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});