import { describe, test, expect, jest } from '@jest/globals';
import fs from 'fs';
import { resolve } from 'path';
import UploadHandler from './../../src/uploadHandler';
import TestUtils from '../utils/testUtils';

describe('#UploadHandler test suite', () => {
  const ioObject = {
    to: id => ioObject,
    emit: (event, message) => {},
  };

  describe('#registerEvents', () => {
    test('should call onFile and onFinish functions on Busboy instance', () => {
      const uploadHandler = new UploadHandler({ io: ioObject, socketId: '01' });

      jest.spyOn(uploadHandler, uploadHandler.onFile.name).mockResolvedValue();

      const headers = {
        'content-type': 'multipart/form-data; boundary=',
      };
      const onFinish = jest.fn();

      const busboyInstance = uploadHandler.registerEvents(headers, onFinish);
      const fileStream = TestUtils.generateReadableStream([
        'chunk',
        'of',
        'data',
      ]);
      busboyInstance.emit('file', 'fieldname', fileStream, 'filename.txt');

      busboyInstance.listeners('finish')[0].call();

      expect(uploadHandler.onFile).toHaveBeenCalled();
      expect(onFinish).toHaveBeenCalled();
    });
  });

  describe('#onFile', () => {
    test('given a stream file it should save it on disk', async () => {
      const chunks = ['chunk', 'of', 'file'];
      const downloadsFolder = '/tmp';
      const handler = new UploadHandler({
        io: ioObject,
        socketId: '01',
        downloadsFolder,
      });

      const onData = jest.fn();
      jest
        .spyOn(fs, fs.createWriteStream.name)
        .mockImplementation(() => TestUtils.generateWritableStream(onData));

      const onTransform = jest.fn();
      jest
        .spyOn(handler, handler.handleFileBuffer.name)
        .mockImplementation(() =>
          TestUtils.generateTransformStream(onTransform)
        );

      const params = {
        fieldname: 'video',
        file: TestUtils.generateReadableStream(chunks),
        filename: 'mockfile.mp4',
      };
      await handler.onFile(...Object.values(params));

      expect(onData.mock.calls.join()).toEqual(chunks.join());
      expect(onTransform.mock.calls.join()).toEqual(chunks.join());

      const expectFilename = resolve(handler.downloadsFolder, params.filename);

      expect(fs.createWriteStream).toHaveBeenCalledWith(expectFilename);
    });
  });
});
