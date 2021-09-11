import { Readable, Transform, Writable } from 'stream';

export default class TestUtils {
  static generateReadableStream(data) {
    return new Readable({
      objectMode: true,
      read() {
        for (const item of data) {
          this.push(item);
        }
        this.push(null);
      },
    });
  }

  static generateTransformStream(onTransform) {
    return new Transform({
      objectMode: true,
      transform(chunk, encoding, callback) {
        onTransform(chunk);
        callback(null, chunk);
      },
    });
  }

  static generateWritableStream(onData) {
    return new Writable({
      objectMode: true,
      write(chunk, encoding, callback) {
        onData(chunk);
        callback(null, chunk);
      },
    });
  }
}
