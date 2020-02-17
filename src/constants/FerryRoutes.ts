interface Harbor {
  name: string;
  url: string;
  dest: { port: Harbor; lines: Array<string> }[];
}

class Harbor {
  constructor(name, url) {
    this.name = name;
    this.url = url;
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

const PONT_STEIGER = new Harbor('Pont steiger', 'pont-steiger');
const CS = new Harbor('Centraal', 'centraal');
const NDSM = new Harbor('NDSM', 'ndsm');

NDSM.destinations = [
  { port: CS, lines: ['905_NDM_CS', '906_NDSM_CS'] },
  { port: PONT_STEIGER, lines: ['903_NDSM_PST'] },
];
PONT_STEIGER.destinations = [{ port: NDSM, lines: ['903_PST_NDSM'] }];
CS.destinations = [{ port: NDSM, lines: ['906_CS_NDSM', '905_CS_NDSM'] }];

export const Ports = [NDSM, PONT_STEIGER, CS];
