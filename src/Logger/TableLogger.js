import BaseLogger from './BaseLogger';

class TableLogger extends BaseLogger {
  constructor(provider, delimeter) {
    super(provider);

    this.delimeter = delimeter;
  }

  log(...messages) {
    super.log(messages.join(this.delimeter));
  }
}

export default TableLogger;
