declare namespace NodeJS {
  export interface Global {
    sqlclient: any;
    sqlconnected: boolean;
  }
}

declare var sqlclient: any;
declare var sqlconnected: boolean;
