import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { adminGuard } from './service/guard/admin.guard';
import { normalUsersGuard } from './service/guard/normal/normal-users.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { WelcomeComponent } from './components/admin/welcome/welcome.component';
import { CategoryComponent } from './components/admin/category/category.component';
import { AddCategoryComponent } from './components/admin/add-category/add-category.component';
import { ShowQuizzesComponent } from './components/admin/show-quizzes/show-quizzes.component';
import { AddQuizComponent } from './components/admin/add-quiz/add-quiz.component';
import { ShowQuizQuestionsComponent } from './components/admin/show-quiz-questions/show-quiz-questions.component';
import { AddQuestionComponent } from './components/admin/add-question/add-question.component';

const routes: Routes = [
  {
    path:'signup',
    component:RegistrationComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[normalUsersGuard]
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent,
    canActivate:[adminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'category',
        component:CategoryComponent
      },
      {
        path:'add-category',
        component:AddCategoryComponent
      },
      {
        path:'show-quizzes',
        component:ShowQuizzesComponent
      },
      {
        path:'add-quizzes',
        component:AddQuizComponent
      },
      {
        path:'show-questions',
        component:ShowQuizQuestionsComponent
      },
      {
        path:'add-question',
        component:AddQuestionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
