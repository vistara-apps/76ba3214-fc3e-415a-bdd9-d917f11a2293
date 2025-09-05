declare module 'eventemitter2' {
  export class EventEmitter2 {
    constructor(options?: any);
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    emit(event: string | symbol, ...args: any[]): boolean;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
    removeAllListeners(event?: string | symbol): this;
  }
  export default EventEmitter2;
}
