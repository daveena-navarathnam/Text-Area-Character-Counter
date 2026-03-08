var textarea = document.getElementById("textarea")
var count = document.getElementById("count")
var remainingText = document.getElementById("remaining")

var maxCharacters = 200

textarea.addEventListener("input", charactercount)

function charactercount() {

    var typedcharacters = textarea.value.length
    var remaining = maxCharacters - typedcharacters

    count.textContent = typedcharacters + " / " + maxCharacters + " characters"
    remainingText.textContent = remaining + " remaining"

    if (remaining <= 20) {
        remainingText.style.color = "red"
    }
    else {
        remainingText.style.color = "green"
    }

}