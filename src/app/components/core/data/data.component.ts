import { Component } from '@angular/core';
import { Terpene3DComponent } from '../../shared/viewers/terpene-3d/terpene-3d.component';
import { MatIconModule } from '@angular/material/icon';
import { TerpeneInfoComponent } from "../../shared/viewers/terpene-info/terpene-info.component";
import { TerpenesComponent } from './terpenes/terpenes.component';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    TerpenesComponent
]
})
export class DataComponent {

}
