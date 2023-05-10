function encodeAndDecodeMessages() {
    const buttons = Array.from(document.querySelectorAll('div button'))
    let sendBtn = buttons[0]
    let decodeBtn = buttons[1]

    const inputs = Array.from(document.querySelectorAll('div textarea'))
    let inputMessage = inputs[0]
    let recievedMessage = inputs[1]

    sendBtn.addEventListener('click', send)
    decodeBtn.addEventListener('click', decode)

    function send() {
        let encoded = ''
        for (let ch of inputMessage.value) {
            currentNum = ch.charCodeAt(0)
            encoded += String.fromCharCode(currentNum + 1)
        }
        recievedMessage.value = encoded
        inputMessage.value = ''
    }

    function decode() {
        let decoded = ''
        for (let ch of recievedMessage.value) {
            currentNum = ch.charCodeAt(0)
            decoded += String.fromCharCode(currentNum - 1)
        }
        recievedMessage.value = decoded
    }
}