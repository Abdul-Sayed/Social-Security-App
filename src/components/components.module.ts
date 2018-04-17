import { NgModule } from '@angular/core';
import { ChartComponent } from './charts/charts';
import { LangaugePopoverComponent } from './langauge-popover/langauge-popover';
import { ModalDashboardComponent } from './modal-dashboard/modal-dashboard';



@NgModule({
	declarations: [ChartComponent,
    LangaugePopoverComponent,
    ModalDashboardComponent],
	imports: [],
	exports: [ChartComponent,
    LangaugePopoverComponent,
    ModalDashboardComponent]
})
export class ComponentsModule {}
