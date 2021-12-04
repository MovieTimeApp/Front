import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveSidenavListComponent } from './responsive-sidenav-list.component';

describe('ResponsiveSidenavListComponent', () => {
  let component: ResponsiveSidenavListComponent;
  let fixture: ComponentFixture<ResponsiveSidenavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveSidenavListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveSidenavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
