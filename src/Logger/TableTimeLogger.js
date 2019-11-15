import TableLogger from './TableLogger';

class TableTimeLogger extends TableLogger {
  constructor(provider, delimeter) {
    super(provider, delimeter);

    this.delimeter = delimeter;
  }

  log(date, messages) {
    super.log(...[date, ...messages]);
  }
}

export default TableTimeLogger;
