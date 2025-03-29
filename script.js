const messages = [
    "แน่ใจนะ?",
    "แน่ใจจริงๆนะ??",
    "คิดดีแล้วหรอ?",
    "นะเถอะน้าาา",
    "ลองคิดดูดีๆก่อน!",
    "ถ้าที่รักปฏิเสธ เราจะเสียใจมากเลยน้า",
    "เราจะเสียในนะ",
    "เราจะเสียใจ มากๆ มากๆ เลยนะ...",
    "โอเคก็ได้ เราไม่ถามแล้วก็ได้...",
    "ล้อเล่นนะ! ตอบตกลงเถอะน้าาาา ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
