import {
  Component,
  Input,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';
import * as echarts from 'echarts';
import { AromaType } from '../../model/aroma-type.enum';
import { AromaCategory } from '../../model/aroma-category.enum';
import { AROMA_MAP } from '../../model/aroma.map';
import { FeatureI18nService } from '../../../../core/i18n/feature-i18n.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-aroma-sunburst',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './aroma-sunburst.component.html',
})
export class AromaSunburstComponent implements AfterViewInit, OnChanges {
  injectedFeatureI18n = inject(FeatureI18nService).init('aromas');
  translate = inject(TranslateService);

  @Input() aromas: AromaType[] = [];

  @ViewChild('sunburstContainer', { static: false })
  container!: ElementRef<HTMLDivElement>;

  private chart?: echarts.ECharts;

  ngAfterViewInit(): void {
    setTimeout(() => this.initChart());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['aromas'] && this.chart) {
      this.updateChart();
    }
  }

  private initChart(): void {
    if (!this.container) return;
    this.chart = echarts.init(this.container.nativeElement);
    this.updateChart();
  }

  private getCategoryIcon(cat: AromaCategory): string {
    const aroma = Object.values(AROMA_MAP).find((a) => a.category === cat);
    return aroma?.icon ?? '';
  }

  private getCategoryColor(cat: AromaCategory): string {
    const aroma = Object.values(AROMA_MAP).find((a) => a.category === cat);
    return aroma?.color ?? '';
  }

  private updateChart(): void {
    if (!this.chart) return;

    const categories = Object.values(AromaCategory);

    const grouped = categories.map((cat) => {
      const children = Object.values(AROMA_MAP)
        .filter((a) => a.category === cat)
        .map((a) => ({
          key: a.label, // ← CLAVE INTERNA
          name: this.translate.instant('AROMAS.' + a.label + '.name'),
          value: 1,
          itemStyle: {
            color: this.aromas.includes(a.label as AromaType)
              ? a.color
              : 'transparent',
          },
          label: {
            color: this.aromas.includes(a.label as AromaType)
              ? '#ffffff'
              : 'rgba(255,255,255,0.35)',
          },
        }));

      const anySelected = children.some((c) =>
        this.aromas.includes(c.key as AromaType)
      );

      return {
        key: cat, // ← CLAVE INTERNA DE CATEGORÍA
        name: this.translate.instant('AROMA_CATEGORIES.' + cat),
        children,
        itemStyle: {
          color: anySelected ? this.getCategoryColor(cat) : 'transparent',
        },
        label: {
          formatter: this.getCategoryIcon(cat),
          fontFamily: 'Material Symbols Outlined',
          fontSize: 28,
          rotate: 0,
          color: anySelected
            ? '#ffffff'
            : 'rgba(255,255,255,0.35)',
          align: 'center',
          verticalAlign: 'middle',
        },
      };
    });

    this.chart.setOption({
      tooltip: {
        trigger: 'item',
        formatter: (info: any) => {
          const data = info.data;

          // Categoría
          if (data.children) {
            const detected =
              this.aromas
                .filter((a) => AROMA_MAP[a].category === data.key)
                .map((a) => this.translate.instant('AROMAS.' + a + '.name'))
                .join(', ') ||
              this.translate.instant('COMMON.NONE');

            return `<b>${data.name}</b><br>${detected}`;
          }

          // Aroma
          return `<b>${data.name}</b>`;
        },
      },

      series: [
        {
          type: 'sunburst',
          radius: ['0%', '50%'],
          sort: undefined,
          data: grouped,

          levels: [
            {},

            {
              r0: '10%',
              r: '50%',
              label: {
                position: 'inside',
                distance: 0,
                rotate: 0,
              },
              itemStyle: { borderWidth: 0 },
            },

            {
              r0: '50%',
              r: '55%',
              label: {
                position: 'outside',
                color: '#eee',
                fontSize: 12,
                padding: 3,
                overflow: 'truncate',
                width: 80,
              },
              labelLine: {
                show: false,
                length: 12,
                length2: 8,
                smooth: true,
              },
              itemStyle: { borderWidth: 0 },
            },
          ],

          emphasis: { focus: 'ancestor' },
        },
      ],
    });

    this.chart.resize();
  }
}
