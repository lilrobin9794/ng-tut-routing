import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserDetailGuard } from './user/user-detail.guard';
import { UserEditComponent } from './user/user-edit.component';
import { UserEditGuard } from './user/user-edit.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "user/:id", component: UserComponent, children: [
    { path: "detail", component: UserDetailComponent, canActivate: [UserDetailGuard] },
    { path: "edit", component: UserEditComponent, canDeactivate: [UserEditGuard] }
  ]},
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
