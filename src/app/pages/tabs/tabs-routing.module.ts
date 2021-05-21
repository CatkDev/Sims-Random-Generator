import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'all_traits',
                loadChildren: () => import('../all-traits/all-traits.module').then(m => m.AllTraitsPageModule)
            },
            {
                path: 'single_trait',
                loadChildren: () => import('../single-trait/single-trait.module').then(m => m.SingleTraitPageModule)
            },
            {
                path: 'toddler_trait',
                loadChildren: () => import('../toddler-trait/toddler-trait.module').then(m => m.ToddlerTraitPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/all_traits',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/all_traits',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule {}
