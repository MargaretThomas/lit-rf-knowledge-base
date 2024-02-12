import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationBarItemComponent } from './side-navigation-bar-item.component';

describe('SideNavigationBarItemComponent', () => {
  let component: SideNavigationBarItemComponent;
  let fixture: ComponentFixture<SideNavigationBarItemComponent>;
  const navBarItem = {
    id: 1,
    title: "Test logo",
    imageSource: "../../assets/test-logo.png"
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavigationBarItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideNavigationBarItemComponent);
    component = fixture.componentInstance;
    component.navigationItem = navBarItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
