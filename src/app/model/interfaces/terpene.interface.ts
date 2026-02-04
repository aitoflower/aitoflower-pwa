import { AromaType } from "../../features/aromas/model/aroma-type.enum";

export interface Terpene {
  id: string;
  name: string;
  scientificName: string;
  type: string;
  molecularFormula: string;
  molecularWeight: number;
  boilingPoint: number;
  aromas: AromaType[];
  effects: string[];
  flavors: string[];
  smiles: string;
  sdf: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
