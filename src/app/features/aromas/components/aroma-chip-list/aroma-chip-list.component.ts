import { Component, Input, OnInit } from '@angular/core';
import { AromaType } from '../../model/aroma-type.enum';
import { AromaChipComponent } from '../aroma-chip/aroma-chip.component';

@Component({
  selector: 'app-aroma-chip-list',
  templateUrl: './aroma-chip-list.component.html',
  styleUrls: ['./aroma-chip-list.component.css'],
  standalone: true,
  imports: [AromaChipComponent],
})
export class AromaChipListComponent {

  @Input() aromas!: AromaType[];

}
