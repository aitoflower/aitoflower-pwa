import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { AuthService } from '../services/auth.service';

interface InventoryItem {
    id: number;
    name: string;
    category: 'semilla' | 'maceta' | 'sustrato' | 'nutriente' | 'iluminacion' | 'riego' | 'ambiente' | 'herramienta' | 'otro';
    brand?: string;
    quantity: number;
    unit: string;
    notes?: string;
}

@Component({
    selector: 'app-almacen',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
        MatTableModule
    ],
    templateUrl: './almacen.component.html',
    styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent {
    authService = inject(AuthService);

    displayedColumns: string[] = ['name', 'category', 'brand', 'quantity', 'actions'];

    // Mock data
    inventoryItems: InventoryItem[] = [
        {
            id: 1,
            name: 'Northern Lights Auto',
            category: 'semilla',
            brand: 'Royal Queen Seeds',
            quantity: 3,
            unit: 'semillas',
            notes: 'Feminizadas'
        },
        {
            id: 2,
            name: 'Maceta Textil',
            category: 'maceta',
            brand: 'Root Pouch',
            quantity: 4,
            unit: 'unidades',
            notes: '11L'
        },
        {
            id: 3,
            name: 'Light Mix',
            category: 'sustrato',
            brand: 'BioBizz',
            quantity: 20,
            unit: 'L'
        },
        {
            id: 4,
            name: 'Bio Grow',
            category: 'nutriente',
            brand: 'BioBizz',
            quantity: 500,
            unit: 'ml'
        },
        {
            id: 5,
            name: 'LED Quantum Board',
            category: 'iluminacion',
            brand: 'Spider Farmer',
            quantity: 1,
            unit: 'unidad',
            notes: '240W'
        },
        {
            id: 6,
            name: 'Sistema de Riego',
            category: 'riego',
            brand: 'AutoPot',
            quantity: 1,
            unit: 'sistema',
            notes: '4 macetas'
        },
        {
            id: 7,
            name: 'Extractor + Filtro',
            category: 'ambiente',
            brand: 'PrimaKlima',
            quantity: 1,
            unit: 'unidad',
            notes: '125mm'
        },
        {
            id: 8,
            name: 'Tijeras de poda',
            category: 'herramienta',
            brand: 'Fiskars',
            quantity: 2,
            unit: 'unidades'
        }
    ];

    getCategoryIcon(category: string): string {
        const icons: Record<string, string> = {
            'semilla': 'eco',
            'maceta': 'potted_plant',
            'sustrato': 'layers',
            'nutriente': 'science',
            'iluminacion': 'lightbulb',
            'riego': 'water_drop',
            'ambiente': 'air',
            'herramienta': 'handyman',
            'otro': 'inventory_2'
        };
        return icons[category] || 'inventory_2';
    }

    getCategoryColor(category: string): string {
        const colors: Record<string, string> = {
            'semilla': 'primary',
            'maceta': '',
            'sustrato': 'warn',
            'nutriente': 'accent',
            'iluminacion': '',
            'riego': '',
            'ambiente': '',
            'herramienta': '',
            'otro': ''
        };
        return colors[category] || '';
    }

    get semillasCount(): number {
        return this.inventoryItems.filter(i => i.category === 'semilla').length;
    }

    get macetasCount(): number {
        return this.inventoryItems.filter(i => i.category === 'maceta').length;
    }

    get sustratosCount(): number {
        return this.inventoryItems.filter(i => i.category === 'sustrato').length;
    }

    get nutrientesCount(): number {
        return this.inventoryItems.filter(i => i.category === 'nutriente').length;
    }

    get iluminacionCount(): number {
        return this.inventoryItems.filter(i => i.category === 'iluminacion').length;
    }

    get riegoCount(): number {
        return this.inventoryItems.filter(i => i.category === 'riego').length;
    }

    get ambienteCount(): number {
        return this.inventoryItems.filter(i => i.category === 'ambiente').length;
    }

    get herramientasCount(): number {
        return this.inventoryItems.filter(i => i.category === 'herramienta').length;
    }

    get totalCount(): number {
        return this.inventoryItems.length;
    }

    login() {
        this.authService.login();
    }

    addItem() {
        // TODO: Open dialog to add new item
        console.log('Add new item');
    }

    editItem(item: InventoryItem) {
        // TODO: Open dialog to edit item
        console.log('Edit item', item);
    }

    deleteItem(item: InventoryItem) {
        // TODO: Confirm and delete
        console.log('Delete item', item);
    }
}
