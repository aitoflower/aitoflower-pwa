import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription, filter } from 'rxjs';
import type { Breadcrumb } from '../../../model/interfaces/breadcrumb.interface';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  standalone: true,
  imports: [CommonModule, MatIconModule, TranslateModule, RouterLink],
})
export class BreadcrumbComponent implements OnDestroy {
  breadcrumbs: Breadcrumb[] = [];
  private sub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
    this.sub = this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      this.breadcrumbs = this.build(this.route.root);
    });
  }

  private build(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Breadcrumb[] = []
  ): Breadcrumb[] {
    const children = route.children;
    if (!children.length) {
      return breadcrumbs;
    }

    for (const child of children) {
      const path = child.snapshot.url.map((s) => s.path).join('/');
      const nextUrl = path ? `${url}/${path}` : url;

      const data = child.snapshot.data;

      const parent = data['parent'] as Breadcrumb | undefined;
      if (parent) {
        const exists = breadcrumbs.some((b) => b.url === parent.url);
        if (!exists) {
          breadcrumbs.push(parent);
        }
      }

      const label = data['breadcrumb'];
      if (label) {
        breadcrumbs.push({
          label,
          url: nextUrl,
          icon: data['icon'],
        });
      }

      return this.build(child, nextUrl, breadcrumbs);
    }

    return breadcrumbs;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
