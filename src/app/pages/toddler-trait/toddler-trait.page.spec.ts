import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToddlerTraitPage } from './toddler-trait.page';

describe('ToddlerTraitPage', () => {
  let component: ToddlerTraitPage;
  let fixture: ComponentFixture<ToddlerTraitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToddlerTraitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToddlerTraitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
