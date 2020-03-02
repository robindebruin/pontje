export interface Harbor {
  name: string;
  url: string;
  dest: { port: Harbor; lines: Array<string> }[];
  fullName: string;
}

export class Harbor {
  constructor(name, url, fullName) {
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

NDSM.destinations = [
  { port: CS, lines: ['905_NDSM_CS', '906_NDSM_CS'] },
  { port: PONT_STEIGER, lines: ['903_NDSM_PST'] },
];
PONT_STEIGER.destinations = [{ port: NDSM, lines: ['903_PST_NDSM'] }];
CS.destinations = [{ port: NDSM, lines: ['906_CS_NDSM', '905_CS_NDSM'] }];

export const Ports = [NDSM, PONT_STEIGER, CS];
