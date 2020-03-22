class VigenereCipheringMachine {
    constructor(mode = true) {
      this.mode = mode;
      this.alphabetLength = 26;
    }
  
    checkParameters(a, b) {
      if (typeof a === 'undefined' || typeof b === 'undefined')
        throw new Error();
    }
  
    adjustKey(message, key) {
      if (key.length < message.length) {
        let n = 0;
        while (key.length != message.length) {
          key += key[n];
          n++;
          if (n == key.length - 1)
            n = 0;
        }
      }
      else
        if (key.length > message.length) {
          key = key.substring(0, message.length);
        }
      return key;
    }
  
    encrypt(message, key) {
      this.checkParameters(message, key);
      message = message.toUpperCase();
      key = key.toUpperCase();
      key = this.adjustKey(message, key);
      let encryptedMessage = "";
      let keyIndex = 0;
      for (let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
          encryptedMessage += String.fromCharCode((message.charCodeAt(i) - 65 + key.charCodeAt(keyIndex) - 65) % this.alphabetLength + 65);
          keyIndex++;
        }
        else
          encryptedMessage += message[i];
      }
      return this.getResult(encryptedMessage);
    }
  
    decrypt(encryptedMessage, key) {
      this.checkParameters(encryptedMessage, key);
      encryptedMessage = encryptedMessage.toUpperCase();
      key = key.toUpperCase();
      key = this.adjustKey(encryptedMessage, key);
      let decryptedMessage = "";
      let keyIndex = 0;
      for (let i = 0; i < encryptedMessage.length; i++) {
        if (encryptedMessage.charCodeAt(i) >= 65 && encryptedMessage.charCodeAt(i) <= 90) {
          decryptedMessage += String.fromCharCode((encryptedMessage.charCodeAt(i) - 65 + this.alphabetLength - (key.charCodeAt(keyIndex) - 65)) % this.alphabetLength + 65);
          keyIndex++;
        }
        else
          decryptedMessage += encryptedMessage[i];
      }
      return this.getResult(decryptedMessage);
    }
  
    getResult(message) {
      if (this.mode == false)
        return message.split('').reverse().join('');
      return message;
    }
  }

module.exports = VigenereCipheringMachine;
