import { Routes } from '@angular/router';
import { ModeCardComponent } from './mode-card/mode-card.component';
import { ModeListComponent } from './mode-list/mode-list.component';
import { DisplayDocumentsComponent } from './display-documents.component';

export const DisplayDocumentsRouting: Routes = [
  {
    path: 'recent',
    component: ModeCardComponent
  },
  {
    path: 'shared',
    component: ModeCardComponent
  },
  {
    path: 'starred',
    component: ModeCardComponent
  },
  {
    path: 'archive',
    component: ModeCardComponent
  },
  {
    path: 'list',
    component: ModeListComponent
  }
];
