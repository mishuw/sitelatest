class MessageBox {
  constructor(id, option) {
    this.id = id;
    this.option = option;
  }
  
  show(msg, label = "<i class='fad fa-times-circle'></i>", callback = null) {
    if (this.id === null || typeof this.id === "undefined") {
      throw "Please set the 'ID' of the message box container.";
    }
    
    if (msg === "" || typeof msg === "undefined" || msg === null) {
      throw "The 'msg' parameter is empty.";
    }
    if (typeof label === "undefined" || label === null) {
      label = "<i class='fad fa-times-circle'></i>";
    }
    
    let option = this.option;

    let msgboxArea = document.querySelector(this.id);
    let msgboxBox = document.createElement("DIV");
    let msgboxContent = document.createElement("DIV");
    let msgboxClose = document.createElement("A");
    
    if (msgboxArea === null) {
      throw "The Message Box container is not found.";
    }
    msgboxContent.classList.add("msgbox-content");
    msgboxContent.innerText = msg;
    msgboxClose.classList.add("msgbox-close");
    msgboxClose.setAttribute("href", "#");
    msgboxClose.innerHTML = label;
    msgboxBox.classList.add("msgbox-box");
    msgboxBox.appendChild(msgboxContent);

    if (option.hideCloseButton === false
        || typeof option.hideCloseButton === "undefined") {
      msgboxBox.appendChild(msgboxClose);
    }
    msgboxArea.appendChild(msgboxBox);

    msgboxClose.addEventListener("click", (evt) => {
      evt.preventDefault();
      
      if (msgboxBox.classList.contains("msgbox-box-hide")) {
        return;
      }
      this.hide(msgboxBox, callback);
    });

    if (option.closeTime > 0) {
      this.msgboxTimeout = setTimeout(() => {
        this.hide(msgboxBox, callback);
      }, option.closeTime);
    }
  }
  
  hide(msgboxBox, callback) {
    if (msgboxBox !== null) {
      msgboxBox.classList.add("msgbox-box-hide");
    }
    msgboxBox.addEventListener("transitionend", () => {
      if (msgboxBox !== null) {
        msgboxBox.parentNode.removeChild(msgboxBox);
        clearTimeout(this.msgboxTimeout);
        if (callback !== null) {
          callback();
        }
      }
    });
  }
}

let msgboxShowMessage = document.querySelector("#msgboxShowMessage");
let msgboxHiddenClose = document.querySelector("#msgboxHiddenClose");

let msgboxbox = new MessageBox("#msgbox-area", {
  closeTime: 10000,
  hideCloseButton: false
});
let msgboxboxPersistent = new MessageBox("#msgbox-area", {
  closeTime: 0
});