import Busboy from 'busboy';
import fs from 'fs';
import { pipeline } from 'stream/promises';
import { logger } from './logger';
export default class UploadHandler {
  constructor({ io, socketId, downloadsFolder }) {
    (this.io = io),
      (this.socketId = socketId),
      (this.downloadsFolder = downloadsFolder);
  }

  handleFileBuffer() {}

  async onFile(fieldname, file, filename) {
    const saveTo = `${this.downloadsFolder}/${filename}`;
    await pipeline(
      //fonte de dados (readable stream)
      file,
      // filtrar/converter/transformar dados (transform stream)
      this.handleFileBuffer(filename),
      // saída (writeble stream)
      fs.createWriteStream(saveTo)
    );

    logger.info(`File [${filename}] finished`);
  }

  registerEvents(headers, onFinish) {
    const busboy = new Busboy({ headers });
    busboy.on('file', this.onFile.bind(this));
    busboy.on('finish', onFinish);

    return busboy;
  }
}
