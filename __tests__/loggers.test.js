import BaseLogger from '../src/Logger/BaseLogger';
import TableLogger from '../src/Logger/TableLogger';
import TableTimeLogger from '../src/Logger/TableTimeLogger';

describe('loggers test', () => {
  const originalLog = console.log;

  let consoleOutput = [];
  const mockedLog = (output) => consoleOutput.push(output);

  beforeEach(() => { console.log = mockedLog; });

  afterEach(() => {
    console.log = originalLog;
    consoleOutput = [];
  });

  test('base logger test', () => {
    const logger = new BaseLogger(console);
    const message = 'Hello World!';

    logger.log(message);

    expect(consoleOutput).toEqual([message]);
  });

  test('table logger test', () => {
    const logger = new TableLogger(console, ' | ');
    const messages = ['Hello', 'World', '!'];

    logger.log(...messages);

    expect(consoleOutput).toEqual(['Hello | World | !']);
  });

  test('table time logger test', () => {
    const logger = new TableTimeLogger(console, ' | ');
    const messages = ['Hello', 'World', '!'];
    const date = (new Date()).toLocaleString();

    logger.log(date, messages);

    expect(consoleOutput).toEqual([`${date} | Hello | World | !`]);
  });
});
