import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmainpanelComponent } from './projectmainpanel.component';

describe('ProjectmainpanelComponent', () => {
  let component: ProjectmainpanelComponent;
  let fixture: ComponentFixture<ProjectmainpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectmainpanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectmainpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
