export interface FerryTime {
  validFrom: string;
  validThrough: string;
  generatedAt: string;
  line: PossibleTransfersEntityOrLine;
  stop: Stop;
  journey: Journey;
  schedules?: SchedulesEntity[] | null;
}
export interface PossibleTransfersEntityOrLine {
  number: string;
  vehicletype: string;
}
export interface Stop {
  code: string;
  name: string;
  city: string;
  wheelchairAccessible: string;
}
export interface Journey {
  code: string;
  direction: string;
  origin: OriginOrDestination;
  destination: OriginOrDestination;
  strip?: StripEntity[] | null;
}
export interface OriginOrDestination {
  code: string;
  fullname: string;
}
export interface StripEntity {
  code: string;
  name: string;
  city: string;
  secondsUnderway: number;
  possibleTransfers?: PossibleTransfersEntityOrLine[] | null;
}
export interface SchedulesEntity {
  validFor?: string[] | null;
  times?: TimesEntity[] | null;
}
export interface TimesEntity {
  departure: string;
  wheelchairAccessible: string;
}

export type HarborName = 'Centraal' | 'Pont steiger' | 'NDSM';

export type DepTimes = {
  [key in HarborName]: string[];
};

export interface RouteInfo {
  dep: string;
  des: string;
}

export interface IndexOfClosestDepTime {
  name: string;
  value: number;
}
