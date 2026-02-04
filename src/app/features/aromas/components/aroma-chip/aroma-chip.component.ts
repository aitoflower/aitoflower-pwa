import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { MatChipsModule } from "@angular/material/chips";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { AromaType } from '../../model/aroma-type.enum';
import { AromaUI } from '../../model/aroma-ui.interface';
import { AROMA_MAP } from '../../model/aroma.map';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FeatureI18nService } from '../../../../core/i18n/feature-i18n.service';



@Component({
  selector: 'app-aroma-chip',
  templateUrl: './aroma-chip.component.html',
  styleUrls: ['./aroma-chip.component.css'],
  standalone: true,
  imports: [MatChipsModule, CommonModule, MatIconModule,TranslateModule,MatTooltipModule],

})
export class AromaChipComponent  implements OnInit {
  injectedTranslate = inject(TranslateService);
  injectedFeatureI18n = inject(FeatureI18nService).init('aromas');

  @Input() chipType?: 'icon' | 'text' | 'icon-text' = 'icon-text';
  @Input() aromaType!: AromaType;
  aromaUI!: AromaUI;

  ngOnInit(): void {
    this.aromaUI = AROMA_MAP[this.aromaType];
  }
}
