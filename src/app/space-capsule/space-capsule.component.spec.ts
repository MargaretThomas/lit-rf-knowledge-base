import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCapsuleComponent } from './space-capsule.component';

import { platformEnum } from '../space-capsule';

describe('SpaceCapsuleComponent', () => {
  let component: SpaceCapsuleComponent;
  let fixture: ComponentFixture<SpaceCapsuleComponent>;
  const spaceCapsule = {
    id: 1,
    name: "Kaizen - testing version",
    url: "https://www.linkedin.com/posts/patrick-skene_excellence-incrementalgains-evolution-activity-7158549504755961856-DRHl/",
    platform: platformEnum.LinkedIn
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceCapsuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpaceCapsuleComponent);
    component = fixture.componentInstance;
    component.spaceCapsule = spaceCapsule;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
