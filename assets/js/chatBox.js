//*************** ChatBox ***************//
let messageContentInfo = document.querySelector(".message-content-info");
document.querySelector(".message-content-info").addEventListener('click', openMessage);

function openMessage() {
    let messageBox = document.querySelector(".message-box");
    let chatBox = document.querySelector(".chat-box");
    chatBox.style.display = 'flex';
    messageBox.style.display = 'none';
}