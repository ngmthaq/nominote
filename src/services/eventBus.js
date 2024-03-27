class EventBus {
  _events = {};

  on(name, callback) {
    if (this._events[name]) {
      this._events[name].push(callback);
    } else {
      this._events[name] = [callback];
    }
  }

  off(name, callback) {
    if (this._events[name]) {
      this._events[name] = this._events[name].filter((cb) => cb !== callback);
    } else {
      this._events[name] = [];
    }
  }

  emit(name, params = null) {
    if (this._events[name]) {
      this._events[name].forEach((callback) => {
        callback(params);
      });
    }
  }

  once(name, callback) {
    const handler = (params) => {
      callback(params);
      this.off(name, callback);
    };

    if (this._events[name]) {
      this._events[name].push(handler);
    } else {
      this._events[name] = [handler];
    }
  }
}

export const eventBus = new EventBus();
