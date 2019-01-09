import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// ---------------------------------------------------- //
import { AppComponent } from './app.component';
import { UsersService } from './service/users.service';
import { HomeComponent } from './home/home.component';
import { StrengthPipe } from './strength/strength.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        AppComponent,
        HomeComponent,
        StrengthPipe
      ],
      providers: [
        UsersService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
