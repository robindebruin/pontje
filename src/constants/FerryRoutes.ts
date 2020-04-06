export interface Harbor {
  name: string;
  url: string;
  dest: { port: Harbor; lines: Array<string> }[];
  fullName: string;
}

export class Harbor {
  constructor(name: string, url: string, fullName: string) {
    this.name = name;
    this.url = url;
    this.fullName = fullName;
  }

  get destinations() {
    return this.dest;
  }

  set destinations(val) {
    this.dest = val;
  }

  get allDepartureTimes() {
    return '';
  }
}

const PONT_STEIGER = new Harbor('Pont steiger', 'pont-steiger', 'Pontsteiger');
const CS = new Harbor('Centraal', 'centraal', 'Centraal Station');
const NDSM = new Harbor('NDSM', 'ndsm', 'NDSM');
const IJPLEIN = new Harbor('IJplein', 'ijplein', 'IJplein');
const AZARTPLEIN = new Harbor('Azartplein', 'azartplein', 'Azartplein');
const ZAMENHOFSTRAAT = new Harbor('Zamenhofstr', 'zamenhofstr', 'Zamenhofstraat');
const DISTELWEG = new Harbor('Distelweg', 'distelweg', 'Distelweg');

NDSM.destinations = [
  { port: CS, lines: ['905_NDSM_CS', '906_NDSM_CS'] },
  { port: PONT_STEIGER, lines: ['903_NDSM_PST'] },
];
PONT_STEIGER.destinations = [
  { port: NDSM, lines: ['903_PST_NDSM'] },
  { port: DISTELWEG, lines: ['900_PST_DSW'] },
];
CS.destinations = [
  { port: NDSM, lines: ['906_CS_NDSM', '905_CS_NDSM'] },
  { port: IJPLEIN, lines: ['902_CS_IJN'] },
];
AZARTPLEIN.destinations = [{ port: ZAMENHOFSTRAAT, lines: ['915_AZP_ZHS'] }];
ZAMENHOFSTRAAT.destinations = [{ port: AZARTPLEIN, lines: ['915_ZHS_AZP'] }];
DISTELWEG.destinations = [{ port: PONT_STEIGER, lines: ['900_DSW_PST'] }];
IJPLEIN.destinations = [{ port: CS, lines: ['902_IJN_CS'] }];

export const Ports = [NDSM, PONT_STEIGER, CS, IJPLEIN, AZARTPLEIN, ZAMENHOFSTRAAT, DISTELWEG];
