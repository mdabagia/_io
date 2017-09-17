class Message {
  private String title;
  private String body;
  private Number claps;
  public static numMessages;
  public Number messageNum;


/**
  Messsage Constructor
  param t: Title text
  param b: Body text
**/
  function message(String t, String b) {
    title = t;
    body = b;
    claps = 1;
    numMessages++;
    messageNum = numMessages;

  }

/**
  Messsage Constructor
  param t: Title text
**/
  function message(String t) {
    title = t;
    claps = 1;
    numMessages++;
    messageNum = numMessages;
  }

  function String getTitle() {
    return title;
  }

  function String getBody() {
    return body;
  }

  function setTitle(String T) {
    title = T;

  }

  public void setBody(String B) {
    body = b;
  }

  public void updateClaps() {
    claps++;
  }

  public toDictionary() {
    var message = {
      Title: title;
      Body: body;
      Claps: claps
    }
    return message;
  }

  function pushToDatabase(t, b) {


    var message = new Message(t,b);
    var updates {};
    var postData = message.toDictionary()
    updates['/messages/ + messageNum'] = postData;

    return itemsRef.update(updates);
  }

}



addItem() {
  onPress: text => {
    //this.itemsRef.push({title: title})
    pushToDatabase(this.inputs.title, this.inputs.text);
  }
}




// Initialize Firebase

this.inputs.text
this.inputs.title
