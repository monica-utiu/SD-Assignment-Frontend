import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { GalleryUserComponent } from './home-page/gallery-user/gallery-user.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './home-page/search-bar/search-bar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { QuestionComponent } from './question/question.component';
import {HttpClientModule} from "@angular/common/http";
import { QuestionListComponent } from './question-list/question-list.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { AnswerComponent } from './answer/answer.component';
import { VoteComponent } from './vote/vote.component';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionCreatePageComponent } from './question-create-page/question-create-page.component';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
//import {MatChipList} from "@angular/material/chips";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GalleryUserComponent,
    HeaderComponent,
    SearchBarComponent,
    QuestionComponent,
    QuestionListComponent,
    UserPageComponent,
    UserInfoComponent,
    QuestionPageComponent,
    AnswerListComponent,
    AnswerComponent,
    VoteComponent,
    AnswerFormComponent,
    QuestionFormComponent,
    QuestionCreatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    MatChipsModule,
    BrowserAnimationsModule,
    MatIconModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
