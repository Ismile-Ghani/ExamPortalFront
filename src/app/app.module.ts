import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegistrationComponent } from './components/registration/registration.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './components/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component';
import { authInterceptorProviders } from './service/auth.interceptor';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminSidebarComponent } from './components/admin/sidebar/admin-sidebar/admin-sidebar.component';
import {MatListModule} from '@angular/material/list';
import { WelcomeComponent } from './components/admin/welcome/welcome.component';
import {MatTableModule} from '@angular/material/table';
import { CategoryComponent } from './components/admin/category/category.component';
import { AddCategoryComponent } from './components/admin/add-category/add-category.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditDialogOverviewComponent } from './components/admin/edit-dialog-overview/edit-dialog-overview.component';
import { ShowQuizzesComponent } from './components/admin/show-quizzes/show-quizzes.component';
import { EditQuizDialogComponent } from './components/admin/edit-quiz-dialog/edit-quiz-dialog.component';
import { AddQuizComponent } from './components/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ShowQuizQuestionsComponent } from './components/admin/show-quiz-questions/show-quiz-questions.component';
import { AddQuestionComponent } from './components/admin/add-question/add-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';






@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    NavbarComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    AdminSidebarComponent,
    WelcomeComponent,
    CategoryComponent,
    AddCategoryComponent,
    EditDialogOverviewComponent,
    ShowQuizzesComponent,
    EditQuizDialogComponent,
    AddQuizComponent,
    ShowQuizQuestionsComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    CKEditorModule,
    
    

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
