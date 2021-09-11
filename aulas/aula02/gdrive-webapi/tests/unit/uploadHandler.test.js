import { describe, test, expect, jest } from '@jest/globals';
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
});
