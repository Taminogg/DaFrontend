import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerToolFunctionComponent } from "../container-tool-function/container-tool-function.component";

@Component({
    selector: 'app-function-overview-page',
    standalone: true,
    templateUrl: './function-overview-page.component.html',
    styleUrls: ['./function-overview-page.component.scss'],
    imports: [CommonModule, ContainerToolFunctionComponent]
})
export class FunctionOverviewPageComponent {
    
}
