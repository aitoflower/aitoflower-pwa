import { AromaCategory } from './aroma-category.enum';
import { AromaType } from './aroma-type.enum';
import { AromaUI } from './aroma-ui.interface';
import { AromaColor } from './aroma-color.enum';
import { AromaIcon } from './aroma-icon.enum';

export const AROMA_MAP: Record<AromaType, AromaUI> = {

  // WOODY
  WOODY: { label: AromaType.WOODY, icon: AromaIcon.WOODY, color: AromaColor.WOODY, category: AromaCategory.WOODY },
  PINE: { label: AromaType.PINE, icon: AromaIcon.WOODY, color: AromaColor.WOODY, category: AromaCategory.WOODY },
  CEDAR: { label: AromaType.CEDAR, icon: AromaIcon.WOODY, color: AromaColor.WOODY, category: AromaCategory.WOODY },
  SANDALWOOD: { label: AromaType.SANDALWOOD, icon: AromaIcon.WOODY, color: AromaColor.WOODY, category: AromaCategory.WOODY },
  RESINOUS: { label: AromaType.RESINOUS, icon: AromaIcon.WOODY, color: AromaColor.WOODY, category: AromaCategory.WOODY },
  BALSAMIC: { label: AromaType.BALSAMIC, icon: AromaIcon.WOODY, color: AromaColor.WOODY, category: AromaCategory.WOODY },
  OAK: { label: AromaType.OAK, icon: AromaIcon.WOODY, color: AromaColor.WOODY, category: AromaCategory.WOODY },

  // CITRUS
  CITRUS: { label: AromaType.CITRUS, icon: AromaIcon.CITRUS, color: AromaColor.CITRUS, category: AromaCategory.CITRUS },
  LEMON: { label: AromaType.LEMON, icon: AromaIcon.CITRUS, color: AromaColor.CITRUS, category: AromaCategory.CITRUS },
  ORANGE: { label: AromaType.ORANGE, icon: AromaIcon.CITRUS, color: AromaColor.CITRUS, category: AromaCategory.CITRUS },
  GRAPEFRUIT: { label: AromaType.GRAPEFRUIT, icon: AromaIcon.CITRUS, color: AromaColor.CITRUS, category: AromaCategory.CITRUS },
  LIME: { label: AromaType.LIME, icon: AromaIcon.CITRUS, color: AromaColor.CITRUS, category: AromaCategory.CITRUS },
  TANGY: { label: AromaType.TANGY, icon: AromaIcon.CITRUS, color: AromaColor.CITRUS, category: AromaCategory.CITRUS },
  SOUR: { label: AromaType.SOUR, icon: AromaIcon.CITRUS, color: AromaColor.CITRUS, category: AromaCategory.CITRUS },

  // FRUIT
  BERRY: { label: AromaType.BERRY, icon: AromaIcon.FRUIT, color: AromaColor.FRUIT, category: AromaCategory.FRUIT },
  GRAPE: { label: AromaType.GRAPE, icon: AromaIcon.FRUIT, color: AromaColor.FRUIT, category: AromaCategory.FRUIT },
  APPLE: { label: AromaType.APPLE, icon: AromaIcon.FRUIT, color: AromaColor.FRUIT, category: AromaCategory.FRUIT },
  PEACH: { label: AromaType.PEACH, icon: AromaIcon.FRUIT, color: AromaColor.FRUIT, category: AromaCategory.FRUIT },
  APRICOT: { label: AromaType.APRICOT, icon: AromaIcon.FRUIT, color: AromaColor.FRUIT, category: AromaCategory.FRUIT },
  PLUM: { label: AromaType.PLUM, icon: AromaIcon.FRUIT, color: AromaColor.FRUIT, category: AromaCategory.FRUIT },
  LYCHEE: { label: AromaType.LYCHEE, icon: AromaIcon.FRUIT, color: AromaColor.FRUIT, category: AromaCategory.FRUIT },
  FRUITY: { label: AromaType.FRUITY, icon: AromaIcon.FRUIT, color: AromaColor.FRUIT, category: AromaCategory.FRUIT },

  // SWEET
  SWEET: { label: AromaType.SWEET, icon: AromaIcon.SWEET, color: AromaColor.SWEET, category: AromaCategory.SWEET },
  HONEY: { label: AromaType.HONEY, icon: AromaIcon.SWEET, color: AromaColor.SWEET, category: AromaCategory.SWEET },
  SUGAR: { label: AromaType.SUGAR , icon: AromaIcon.SWEET, color: AromaColor.SWEET, category: AromaCategory.SWEET },
  CANDY: { label: AromaType.CANDY, icon: AromaIcon.SWEET, color: AromaColor.SWEET, category: AromaCategory.SWEET },
  AMBER: { label: AromaType.AMBER, icon: AromaIcon.SWEET, color: AromaColor.SWEET, category: AromaCategory.SWEET },

  // FLORAL
  FLORAL: { label: AromaType.FLORAL, icon: AromaIcon.FLORAL, color: AromaColor.FLORAL, category: AromaCategory.FLORAL },
  ROSE: { label: AromaType.ROSE, icon: AromaIcon.FLORAL, color: AromaColor.FLORAL, category: AromaCategory.FLORAL },
  LAVENDER: { label: AromaType.LAVENDER, icon: AromaIcon.FLORAL, color: AromaColor.FLORAL, category: AromaCategory.FLORAL },
  LILAC: { label: AromaType.LILAC, icon: AromaIcon.FLORAL, color: AromaColor.FLORAL, category: AromaCategory.FLORAL },
  JASMINE: { label: AromaType.JASMINE, icon: AromaIcon.FLORAL, color: AromaColor.FLORAL, category: AromaCategory.FLORAL },
  VIOLET: { label: AromaType.VIOLET, icon: AromaIcon.FLORAL, color: AromaColor.FLORAL, category: AromaCategory.FLORAL },

  // HERBAL
  HERBAL: { label: AromaType.HERBAL, icon: AromaIcon.HERBAL, color: AromaColor.HERBAL, category: AromaCategory.HERBAL },
  GRASSY: { label: AromaType.GRASSY, icon: AromaIcon.HERBAL, color: AromaColor.HERBAL, category: AromaCategory.HERBAL },
  GREEN: { label: AromaType.GREEN, icon: AromaIcon.HERBAL, color: AromaColor.HERBAL, category: AromaCategory.HERBAL },
  TEA: { label: AromaType.TEA, icon: AromaIcon.HERBAL, color: AromaColor.HERBAL, category: AromaCategory.HERBAL },
  HAY: { label: AromaType.HAY, icon: AromaIcon.HERBAL, color: AromaColor.HERBAL, category: AromaCategory.HERBAL },
  EUCALYPTUS: { label: AromaType.EUCALYPTUS, icon: AromaIcon.HERBAL, color: AromaColor.HERBAL, category: AromaCategory.HERBAL },
  MINTY: { label: AromaType.MINTY, icon: AromaIcon.HERBAL, color: AromaColor.HERBAL, category: AromaCategory.HERBAL },
  MENTHOL: { label: AromaType.MENTHOL, icon: AromaIcon.HERBAL, color: AromaColor.HERBAL, category: AromaCategory.HERBAL },
  SPEARMINT: { label: AromaType.SPEARMINT, icon: AromaIcon.HERBAL, color: AromaColor.HERBAL, category: AromaCategory.HERBAL },

  // SPICY
  SPICY: { label: AromaType.SPICY, icon: AromaIcon.SPICY, color: AromaColor.SPICY, category: AromaCategory.SPICY },
  PEPPERY: { label: AromaType.PEPPERY, icon: AromaIcon.SPICY, color: AromaColor.SPICY, category: AromaCategory.SPICY },
  CLOVES: { label: AromaType.CLOVES, icon: AromaIcon.SPICY, color: AromaColor.SPICY, category: AromaCategory.SPICY },
  CINNAMON: { label: AromaType.CINNAMON, icon: AromaIcon.SPICY, color: AromaColor.SPICY, category: AromaCategory.SPICY },
  GINGER: { label: AromaType.GINGER, icon: AromaIcon.SPICY, color: AromaColor.SPICY, category: AromaCategory.SPICY },
  ANISE: { label: AromaType.ANISE, icon: AromaIcon.SPICY, color: AromaColor.SPICY, category: AromaCategory.SPICY },
  PUNGENT: { label: AromaType.PUNGENT, icon: AromaIcon.SPICY, color: AromaColor.SPICY, category: AromaCategory.SPICY },
  SHARP: { label: AromaType.SHARP, icon: AromaIcon.SPICY, color: AromaColor.SPICY, category: AromaCategory.SPICY },
  ACRID: { label: AromaType.ACRID, icon: AromaIcon.SPICY, color: AromaColor.SPICY, category: AromaCategory.SPICY },

  // FUNKY / SKUNK
  CHEESY: { label: AromaType.CHEESY, icon: AromaIcon.CHEESY, color: AromaColor.CHEESY, category: AromaCategory.CHEESY },
  SKUNK: { label: AromaType.SKUNK, icon: AromaIcon.CHEESY, color: AromaColor.CHEESY, category: AromaCategory.CHEESY },
  FUNKY: { label: AromaType.FUNKY, icon: AromaIcon.CHEESY, color: AromaColor.CHEESY, category: AromaCategory.CHEESY },
  STINKY: { label: AromaType.STINKY, icon: AromaIcon.CHEESY, color: AromaColor.CHEESY, category: AromaCategory.CHEESY },
  ROTTEN: { label: AromaType.ROTTEN, icon: AromaIcon.CHEESY, color: AromaColor.CHEESY, category: AromaCategory.CHEESY },
  SWEATY: { label: AromaType.SWEATY, icon: AromaIcon.CHEESY, color: AromaColor.CHEESY, category: AromaCategory.CHEESY },

  // CHEMICAL
  SULFUROUS: { label: AromaType.SULFUROUS, icon: AromaIcon.CHEMICAL, color: AromaColor.CHEMICAL, category: AromaCategory.CHEMICAL },
  MEDICINAL: { label: AromaType.MEDICINAL, icon: AromaIcon.CHEMICAL, color: AromaColor.CHEMICAL, category: AromaCategory.CHEMICAL },
  CAMPHOR: { label: AromaType.CAMPHOR, icon: AromaIcon.CHEMICAL, color: AromaColor.CHEMICAL, category: AromaCategory.CHEMICAL },
  WAXY: { label: AromaType.WAXY, icon: AromaIcon.CHEMICAL, color: AromaColor.CHEMICAL, category: AromaCategory.CHEMICAL },
  OILY: { label: AromaType.OILY, icon: AromaIcon.CHEMICAL, color: AromaColor.CHEMICAL, category: AromaCategory.CHEMICAL },
  MUSTARD: { label: AromaType.MUSTARD, icon: AromaIcon.CHEMICAL, color: AromaColor.CHEMICAL, category: AromaCategory.CHEMICAL },
  CHEMICAL: { label: AromaType.CHEMICAL, icon: AromaIcon.CHEMICAL, color: AromaColor.CHEMICAL, category: AromaCategory.CHEMICAL },
  SOLVENT: { label: AromaType.SOLVENT, icon: AromaIcon.CHEMICAL, color: AromaColor.CHEMICAL, category: AromaCategory.CHEMICAL },

  // GAS
  FUEL: { label: AromaType.FUEL, icon: AromaIcon.GAS, color: AromaColor.GAS, category: AromaCategory.GAS },
  GAS: { label: AromaType.GAS, icon: AromaIcon.GAS, color: AromaColor.GAS, category: AromaCategory.GAS },
  DIESEL: { label: AromaType.DIESEL, icon: AromaIcon.GAS, color: AromaColor.GAS, category: AromaCategory.GAS },
  KEROSENE: { label: AromaType.KEROSENE, icon: AromaIcon.GAS, color: AromaColor.GAS, category: AromaCategory.GAS },

  // EARTHY
  EARTHY: { label: AromaType.EARTHY, icon: AromaIcon.EARTHY, color: AromaColor.EARTHY, category: AromaCategory.EARTHY },
  MUSKY: { label: AromaType.MUSKY, icon: AromaIcon.EARTHY, color: AromaColor.EARTHY, category: AromaCategory.EARTHY },
  MUSTY: { label: AromaType.MUSTY, icon: AromaIcon.EARTHY, color: AromaColor.EARTHY, category: AromaCategory.EARTHY },
  MOSSY: { label: AromaType.MOSSY, icon: AromaIcon.EARTHY, color: AromaColor.EARTHY, category: AromaCategory.EARTHY },
  PATCHOULI: { label: AromaType.PATCHOULI, icon: AromaIcon.EARTHY, color: AromaColor.EARTHY, category: AromaCategory.EARTHY },
  TOBACCO: { label: AromaType.TOBACCO, icon: AromaIcon.EARTHY, color: AromaColor.EARTHY, category: AromaCategory.EARTHY },
  LEATHER: { label: AromaType.LEATHER, icon: AromaIcon.EARTHY, color: AromaColor.EARTHY, category: AromaCategory.EARTHY },
};
