import { Routes } from '@angular/router';
import { MyPdfGenComponent } from './my-pdf-gen/my-pdf-gen.component';

export const routes: Routes = [
  { path: 'pdf', component: MyPdfGenComponent }, // 將 /pdf 路徑映射到 MyPdfGenComponent
  { path: '', redirectTo: '/pdf', pathMatch: 'full' }, // 預設重定向到 /pdf
];
