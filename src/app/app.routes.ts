import {RouterModule,Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ShowcaseComponent} from './showcase/showcase.component';

const APP_ROUTES: Routes=
[
	{path:'',redirectTo:'/home',pathMatch: 'full'},
	{path:'home',component:HomeComponent},
	{path:'showcase',component:ShowcaseComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);