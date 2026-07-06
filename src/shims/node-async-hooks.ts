export class AsyncLocalStorage<T = unknown> {
  private store: T | undefined;

  constructor() {
    this.store = undefined;
  }

  run<R = unknown>(storeValue: T, callback: () => R): R {
    const previous = this.store;
    this.store = storeValue;
    try {
      return callback();
    } finally {
      this.store = previous;
    }
  }

  getStore(): T | undefined {
    return this.store;
  }

  enterWith(storeValue: T): void {
    this.store = storeValue;
  }

  disable(): void {
    this.store = undefined;
  }
}
