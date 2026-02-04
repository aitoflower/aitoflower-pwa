import { RoleOption } from '../interfaces/role-option.interface';
import { Roles } from '../enums/roles.enum';

export class RoleConstants {
  static readonly roles: RoleOption[] = [
    { role: Roles.ADMIN, label: 'Administrador', icon: 'shield' },
    { role: Roles.SEED, label: 'Semilla', icon: 'grass' },
    { role: Roles.BUD, label: 'Cogollo', icon: 'spa' },
    { role: Roles.HARVEST, label: 'Cosecha', icon: 'agriculture' },
    { role: Roles.FARM, label: 'Granja', icon: 'park' },
    { role: Roles.B2B, label: 'B2B', icon: 'business' },
    { role: Roles.DATA_API, label: 'Data API', icon: 'api' },
    { role: Roles.BO, label: 'BackOffice', icon: 'admin_panel_settings' },
  ];
  static readonly defaultRoles: Roles[] = [Roles.SEED];
}
