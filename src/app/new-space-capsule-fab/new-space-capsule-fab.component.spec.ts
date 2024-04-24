import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpaceCapsuleFabComponent } from './new-space-capsule-fab.component';

describe('NewSpaceCapsuleFabComponent', () => {
  let component: NewSpaceCapsuleFabComponent;
  let fixture: ComponentFixture<NewSpaceCapsuleFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSpaceCapsuleFabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewSpaceCapsuleFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
