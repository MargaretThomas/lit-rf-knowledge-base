import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCapsuleComponent } from './space-capsule.component';

describe('SpaceCapsuleComponent', () => {
  let component: SpaceCapsuleComponent;
  let fixture: ComponentFixture<SpaceCapsuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceCapsuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpaceCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
