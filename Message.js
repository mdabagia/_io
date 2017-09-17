import GLOBAL from './src/scenes/helper/Globals.js';
export default class Message {
  /**
  Messsage Constructor
  param t: Title text
  param b: Body text
  **/
  constructor(t, b) {
    this.title = t;
    this.body = b;
    this.claps = 1;
    GLOBAL.numMessages++;
    //console.warn(Message.numMessages)
    this.messageNum = GLOBAL.numMessages;

  }

  /**
  Messsage Constructor
  param t: Title text
  **/
  message(t) {
    this.title = t;
    this.claps = 1;
    Message.numMessages += 1;
    this.messageNum = this.numMessages;
  }

  getTitle() {
    return this.title;
  }

  getBody() {
    return this.body;
  }

  setTitle(T) {
    this.title = T;

  }

  setBody(B) {
    this.body = B;
  }

  updateClaps() {
    this.claps++;
  }

  toDictionary() {
    var message = {
      Title: this.title,
      Body: this.body,
      Claps: this.claps
    }
    return message;
  }

}
