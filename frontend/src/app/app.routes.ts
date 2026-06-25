import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';

export const routes: Routes = [
    { path: '', component: LayoutComponent,
        children: [
            {
          path: '',
          component: HomeLayoutComponent
        },
        {
        path: 'course/:slug',
        loadComponent: () => import('./course-page/course-page.component').then(m => m.CoursePageComponent)
        },
        {
            path:'users',
            loadComponent: () => import('./userstable/userstable.component').then(m => m.UsersComponent)
        }
      ]
     },
  
];
