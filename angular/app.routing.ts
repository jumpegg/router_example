import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TodosComponent} from './components/todos/todos.component';
import {TestComponent} from './components/test/test.component';

const routes: Routes = [
    {path: '', redirectTo: '/todo', pathMatch: 'full'},
    {path: 'todo', component: TodosComponent},
    {path: 'test', component: TestComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
