import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgCampaignComponent } from './ig-campaign.component';

describe('IgCampaignComponent', () => {
  let component: IgCampaignComponent;
  let fixture: ComponentFixture<IgCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
