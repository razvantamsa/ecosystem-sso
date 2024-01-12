declare namespace NodeJS {
  export interface Global {
    sqlclient: any;
    sqlconnected: boolean;
    cacheclient: any;
    cacheconnected: boolean;
  }
}

declare var sqlclient: any;
declare var sqlconnected: boolean;
declare var cacheclient: any;
declare var cacheconnected: boolean;
