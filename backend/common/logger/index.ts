const resetColor = '\x1b[0m';

const redColor = '\x1b[31m';
const yellowColor = '\x1b[33m';
const blueColor = '\x1b[34m';

const Logger = {
  info: (message: string) => {
    console.log(blueColor + `[INFO]: ${message}` + resetColor);
  },

  warn: (message: string) => {
    console.warn(yellowColor + `[WARN]: ${message}` + resetColor);
  },

  error: (message: string) => {
    console.error(redColor + `[ERROR]: ${message}` + resetColor);
  }
};

export default Logger;
