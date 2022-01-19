class LocalStorageService {
  constructor(m) {
    this.m = m;
  }

  get(key) {
    return this.m.get(key, null);
  }

  set(key, value) {
    this.m.update(key, value);
  }
}

module.exports = LocalStorageService;
