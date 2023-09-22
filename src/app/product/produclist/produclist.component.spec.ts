import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduclistComponent } from './produclist.component';

describe('ProduclistComponent', () => {
  let component: ProduclistComponent;
  let fixture: ComponentFixture<ProduclistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduclistComponent]
    });
    fixture = TestBed.createComponent(ProduclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
