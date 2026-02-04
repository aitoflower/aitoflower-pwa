import { Component, OnInit } from '@angular/core';
import { Terpene3DComponent } from '../terpene-3d/terpene-3d.component';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Terpene } from '../../../../model/interfaces/terpene.interface';
import { AromaType } from '../../../../features/aromas/model/aroma-type.enum';
import {MatTabsModule} from '@angular/material/tabs';
import { AromaSunburstComponent } from "../../../../features/aromas/components/aroma-sunburst/aroma-sunburst.component";
import { AromaChipListComponent } from '../../../../features/aromas/components/aroma-chip-list/aroma-chip-list.component';

@Component({
  selector: 'app-terpene-info',
  templateUrl: './terpene-info.component.html',
  styleUrls: ['./terpene-info.component.css'],
  standalone: true,
  imports: [Terpene3DComponent, MatCardModule, MatIconModule, MatChipsModule, AromaSunburstComponent, MatTabsModule, AromaChipListComponent]
})
export class TerpeneInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  terpene: Terpene = {
      "id": "geranylgeraniol",
      "name": "Geranylgeraniol",
      "scientificName": "(2E,6E,10E)-3,7,11,15-tetramethylhexadeca-2,6,10,14-tetraen-1-ol",
      "type": "DITERPENOID",
      "molecularFormula": "C20H34O",
      "molecularWeight": 290.48,
      "boilingPoint": 382,
      "aromas": [
        "FLORAL",
        "WOODY",
        "SWEET"
      ] as AromaType[],
      "effects": [
        "NEUROPROTECTIVE",
        "ANTIBACTERIAL",
        "ANTIOXIDANT"
      ],
      "flavors": [
        "SWEET",
        "FLORAL",
        "TEA"
      ],
      "smiles": "CC(C)=CCCC(C)=CCCC(C)=CCCC(C)=CCO",
      "sdf": "65183\n  -OEChem-01042615373D\n\n 55 54  0     0  0  0  0  0  0999 V2000\n    7.5659    0.3305   -0.1024 O   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.2182   -3.0554    0.1689 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.6776   -2.6265    0.3753 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.2074   -1.9387    0.3260 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.0208   -0.5838   -0.3773 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.4509    0.4258   -1.4202 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.6954   -0.4575   -0.5423 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.1166   -1.5599   -0.5910 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.6358   -1.5204   -0.6384 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.0487   -1.0658   -0.1542 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.0955    1.8817   -1.0837 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.1474   -1.3172    1.6983 C   0  0  0  0  0  0  0  0  0  0  0  0\n    4.1144   -0.0089    0.0270 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.7183   -0.4767    0.9535 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.6277    2.0889   -0.8322 C   0  0  0  0  0  0  0  0  0  0  0  0\n    3.8025    1.0471    1.0529 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.0198    2.4561    0.3121 C   0  0  0  0  0  0  0  0  0  0  0  0\n    5.2815    0.0166   -0.6449 C   0  0  0  0  0  0  0  0  0  0  0  0\n    6.3859    1.0156   -0.5042 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.5219    2.6075    0.3601 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.7079    2.7410    1.6167 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.9769   -3.8514    0.8850 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.1175   -3.5086   -0.8263 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.8087   -2.3064    1.4142 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.3146   -3.5068    0.2256 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.9976    0.1707   -2.3875 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -5.5349    0.3458   -1.5709 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.3882    0.3248    0.1563 H   0  0  0  0  0  0  0  0  0  0  0  0\n    1.7765    0.0382   -1.5184 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.6786   -1.6232   -1.5864 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.5784   -2.0157   -1.6068 H   0  0  0  0  0  0  0  0  0  0  0  0\n    2.9576   -1.6295    0.7833 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.3567   -1.7893   -0.9201 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.3862    2.5160   -1.9306 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.7081    2.2180   -0.2426 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.9866   -0.6284    1.8397 H   0  0  0  0  0  0  0  0  0  0  0  0\n    0.7768   -0.7718    1.9023 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.2130   -2.0966    2.4659 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.8291   -1.4428    1.4547 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -5.7350   -0.0891    0.8237 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -4.1779    0.2020    1.6182 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.0020    1.9129   -1.7068 H   0  0  0  0  0  0  0  0  0  0  0  0\n    4.6879    1.4190    1.5746 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.1573    0.6383    1.8393 H   0  0  0  0  0  0  0  0  0  0  0  0\n    3.2809    1.8906    0.5897 H   0  0  0  0  0  0  0  0  0  0  0  0\n    5.4635   -0.7703   -1.3753 H   0  0  0  0  0  0  0  0  0  0  0  0\n    6.5754    1.4760   -1.4796 H   0  0  0  0  0  0  0  0  0  0  0  0\n    6.1895    1.8174    0.2088 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.2546    3.6430    0.5953 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.1012    1.9583    1.1345 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.0440    2.3485   -0.5903 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.3643    2.0380    2.3829 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -3.7954    2.6664    1.5675 H   0  0  0  0  0  0  0  0  0  0  0  0\n   -2.4698    3.7563    1.9515 H   0  0  0  0  0  0  0  0  0  0  0  0\n    8.2801    0.9894   -0.0660 H   0  0  0  0  0  0  0  0  0  0  0  0\n  1 19  1  0  0  0  0\n  1 55  1  0  0  0  0\n  2  3  1  0  0  0  0\n  2  4  1  0  0  0  0\n  2 22  1  0  0  0  0\n  2 23  1  0  0  0  0\n  3  8  1  0  0  0  0\n  3 24  1  0  0  0  0\n  3 25  1  0  0  0  0\n  4  9  2  3  0  0  0\n  4 12  1  0  0  0  0\n  5  6  1  0  0  0  0\n  5  8  2  3  0  0  0\n  5 14  1  0  0  0  0\n  6 11  1  0  0  0  0\n  6 26  1  0  0  0  0\n  6 27  1  0  0  0  0\n  7  9  1  0  0  0  0\n  7 10  1  0  0  0  0\n  7 28  1  0  0  0  0\n  7 29  1  0  0  0  0\n  8 30  1  0  0  0  0\n  9 31  1  0  0  0  0\n 10 13  1  0  0  0  0\n 10 32  1  0  0  0  0\n 10 33  1  0  0  0  0\n 11 15  1  0  0  0  0\n 11 34  1  0  0  0  0\n 11 35  1  0  0  0  0\n 12 36  1  0  0  0  0\n 12 37  1  0  0  0  0\n 12 38  1  0  0  0  0\n 13 16  1  0  0  0  0\n 13 18  2  3  0  0  0\n 14 39  1  0  0  0  0\n 14 40  1  0  0  0  0\n 14 41  1  0  0  0  0\n 15 17  2  0  0  0  0\n 15 42  1  0  0  0  0\n 16 43  1  0  0  0  0\n 16 44  1  0  0  0  0\n 16 45  1  0  0  0  0\n 17 20  1  0  0  0  0\n 17 21  1  0  0  0  0\n 18 19  1  0  0  0  0\n 18 46  1  0  0  0  0\n 19 47  1  0  0  0  0\n 19 48  1  0  0  0  0\n 20 49  1  0  0  0  0\n 20 50  1  0  0  0  0\n 20 51  1  0  0  0  0\n 21 52  1  0  0  0  0\n 21 53  1  0  0  0  0\n 21 54  1  0  0  0  0\nM  END\n> <PUBCHEM_COMPOUND_CID>\n65183\n\n> <PUBCHEM_CONFORMER_RMSD>\n1.2\n\n> <PUBCHEM_CONFORMER_DIVERSEORDER>\n4\n57\n162\n88\n44\n69\n68\n56\n178\n7\n112\n25\n133\n13\n70\n161\n180\n46\n60\n102\n167\n26\n135\n158\n156\n147\n181\n104\n109\n94\n8\n117\n18\n92\n48\n163\n129\n152\n101\n10\n82\n139\n114\n170\n100\n76\n29\n173\n78\n49\n98\n65\n38\n155\n50\n130\n143\n172\n134\n108\n169\n131\n52\n141\n128\n20\n153\n62\n58\n177\n45\n39\n151\n140\n179\n164\n160\n138\n81\n71\n34\n77\n17\n95\n157\n24\n85\n145\n5\n66\n16\n166\n31\n47\n43\n64\n27\n96\n171\n150\n115\n176\n51\n53\n67\n174\n127\n91\n32\n132\n113\n23\n42\n159\n84\n15\n93\n86\n103\n154\n119\n74\n175\n168\n61\n22\n120\n1\n72\n35\n182\n87\n73\n59\n97\n99\n142\n79\n148\n124\n146\n28\n110\n125\n165\n33\n111\n11\n89\n83\n37\n75\n121\n21\n14\n107\n9\n3\n118\n149\n30\n144\n40\n6\n105\n106\n63\n41\n80\n122\n90\n123\n136\n54\n137\n2\n126\n12\n36\n19\n55\n116\n\n> <PUBCHEM_MMFF94_PARTIAL_CHARGES>\n26\n1 -0.68\n10 0.14\n11 0.14\n12 0.14\n13 -0.28\n14 0.14\n15 -0.29\n16 0.14\n17 -0.28\n18 -0.29\n19 0.42\n2 0.14\n20 0.14\n21 0.14\n3 0.14\n30 0.15\n31 0.15\n4 -0.28\n42 0.15\n46 0.15\n5 -0.28\n55 0.4\n6 0.14\n7 0.14\n8 -0.29\n9 -0.29\n\n> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>\n10\n\n> <PUBCHEM_PHARMACOPHORE_FEATURES>\n9\n1 1 acceptor\n1 1 donor\n1 12 hydrophobe\n1 14 hydrophobe\n1 16 hydrophobe\n3 17 20 21 hydrophobe\n4 2 3 4 8 hydrophobe\n4 5 6 11 15 hydrophobe\n4 7 9 10 13 hydrophobe\n\n> <PUBCHEM_HEAVY_ATOM_COUNT>\n21\n\n> <PUBCHEM_ATOM_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_DEF_STEREO_COUNT>\n0\n\n> <PUBCHEM_BOND_UDEF_STEREO_COUNT>\n3\n\n> <PUBCHEM_ISOTOPIC_ATOM_COUNT>\n0\n\n> <PUBCHEM_COMPONENT_COUNT>\n1\n\n> <PUBCHEM_CACTVS_TAUTO_COUNT>\n1\n\n> <PUBCHEM_CONFORMER_ID>\n0000FE9F00000004\n\n> <PUBCHEM_MMFF94_ENERGY>\n19.7641\n\n> <PUBCHEM_FEATURE_SELFOVERLAP>\n45.718\n\n> <PUBCHEM_SHAPE_FINGERPRINT>\n10291535 26 18410016562921569562\n10454371 7 18340217375217066452\n10498660 4 18339350852473961127\n10730089 173 18408603669400257486\n10759866 29 18041830706146410171\n12596602 18 16950280728161342562\n13402501 40 18343016726682014233\n13403585 85 18336545023158736470\n13583140 156 16732990820812188248\n14123250 116 17914054201220373817\n14251740 79 18342740719119518040\n14251757 5 18335702809788823218\n14251764 38 18197216945311770334\n14251764 75 17837216974191892929\n14765038 42 18128551392101421993\n14931854 50 18339627959310806813\n15183329 4 18409729522511365926\n17492 54 18189033358039667437\n18336668 15 17968098667547573300\n20101258 96 17902516213951414379\n20765182 40 18412254052473547066\n21236236 1 18341617001530756508\n23402539 116 18412822520874823062\n23557571 272 18339929315200883390\n23559900 14 18341043120933436080\n445580 37 18261967323164255996\n469060 322 17604450547638239081\n59567204 34 18410294744275679036\n6299153 45 18042395847509098578\n7226269 152 18334856142927778706\n\n> <PUBCHEM_SHAPE_MULTIPOLES>\n426.3\n13.42\n3.46\n1.28\n25.62\n0.29\n0.27\n4.28\n-2.78\n-3.91\n0.71\n-0.97\n0.35\n0.27\n\n> <PUBCHEM_SHAPE_SELFOVERLAP>\n806.534\n\n> <PUBCHEM_SHAPE_VOLUME>\n264.5\n\n> <PUBCHEM_COORDINATE_TYPE>\n2\n5\n10\n\n$$$$\n",
      "active": true,
      "createdAt": "2026-01-04T20:37:02.476Z",
      "updatedAt": "2026-01-04T20:37:02.476Z"
    }
}
