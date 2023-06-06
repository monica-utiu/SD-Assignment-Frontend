import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {fakeAsync, TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {GalleryUserComponent} from "./home-page/gallery-user/gallery-user.component";
import {QuestionCreatePageComponent} from "./question-create-page/question-create-page.component";
import {LoginComponent} from "./components/login/login.component";
import {Location} from "@angular/common";

describe('Router: App', ()=>{

  let location: Location;
  let router: Router;
  let fixture;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        GalleryUserComponent,
        QuestionCreatePageComponent,
        AppComponent
      ]
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  xit('navigate to "" redirects you to /login', fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/gallery");
    });
  }));

  it('navigate to "gallery" takes you to /gallery', fakeAsync(() => {
    router.navigate(["/gallery"]).then(() => {
      expect(location.path()).toBe("/gallery");
    });
  }));

});
