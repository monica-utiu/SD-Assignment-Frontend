import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {GalleryUserComponent} from "./home-page/gallery-user/gallery-user.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {QuestionListComponent} from "./question-list/question-list.component";
import {QuestionPageComponent} from "./question-page/question-page.component";
import {QuestionCreatePageComponent} from "./question-create-page/question-create-page.component";

const routes: Routes = [
  {path: '',redirectTo: 'login',pathMatch:'full'},
  {path: "login", component: LoginComponent},
  {path: "gallery", component: GalleryUserComponent},
  {path: "account", component: UserPageComponent},
  {path: "question", component: QuestionListComponent},
  {path: "question/:id", component: QuestionPageComponent},
  {path: "new-question", component: QuestionCreatePageComponent},
  {path: '**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
