import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare var $3Dmol: any;

@Component({
  selector: 'app-terpene-3d',
  templateUrl: './terpene-3d.component.html',
  styleUrls: ['./terpene-3d.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Terpene3DComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;
  @Input() terpene: any = '';

  viewer: any;

  constructor(private cdr: ChangeDetectorRef,private sanitizer: DomSanitizer) {}

  ngAfterViewInit() {
    this.initViewer();
  }

  initViewer() {
    this.viewer = $3Dmol.createViewer(this.container.nativeElement, {
      defaultcolors: $3Dmol.rasmolElementColors,
      antialias: true,
      preserveDrawingBuffer: true,
      backgroundColor: 'white', // <--- OJO: A veces ayuda inicializarlo y luego borrarlo
    });
    // CORRECCIÓN CLAVE:
    // En lugar de blanco transparente (0xffffff, 0), usa NEGRO transparente.
    // Esto elimina el "halo" blanco y problemas de blending.
    this.viewer.setBackgroundColor(0x000000, 0);

    this.renderMolecule();
  }

  renderMolecule() {
    if (!this.terpene.sdf || !this.viewer) return;
    this.viewer.clear();
    this.viewer.addModel(this.terpene.sdf, 'sdf');
    // CLAVE 2: Solo Stick con colores Jmol
    this.viewer.setStyle(
      {},
      {
        stick: {
          colorscheme: 'Jmol',
          radius: 0.25, // Un poco más grueso para que se vea mejor sin esferas
          opacity: 1.0,
        },
      }
    );
    this.viewer.zoomTo();
    this.viewer.spin(true);
    this.viewer.render();
    this.cdr.markForCheck();
  }

  renderFormula(formula: string) {
    const html =formula.replace(/(\d+)/g, '<sub>$1</sub>');
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
