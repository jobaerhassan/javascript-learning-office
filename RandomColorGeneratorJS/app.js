const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 167777215);
    const randomCode = "#"+randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    navigator.clipboard.writeText(randomCode);  //clip board e copy hobe.
}
document.getElementById('btn').addEventListener(
    "click",
    getColor
)
getColor()