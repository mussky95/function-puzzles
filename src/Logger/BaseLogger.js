class BaseLogger {
  constructor(provider) {
    this.provider = provider;
  }

  log(message) {
    this.provider.log(message);
  }
}

export default BaseLogger;
