import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TodosComponent} from './components/todos/todos.component';
import {MdComponent} from './components/md/md.component';

const routes: Routes = [
    {path: '', redirectTo: '/todo', pathMatch: 'full'},
    {path: 'todo', component: TodosComponent},
    {path: 'md', component: MdComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
