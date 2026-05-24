function openUniverse(choice) {

    let text = "";

    if (choice === 1) {
        text = "We stayed just friends... safe, but something always felt missing.";
    }
    else if (choice === 2) {
        text = "We never met... and that universe feels strangely empty.";
    }
    else {
        text = "Out of all universes... this one feels the most real 💫";
    }

    typeText(text);

    setTimeout(() => {
        document.getElementById("final").innerHTML =
            "✨ Maybe some universes are not chosen... they are felt.";
    }, 4000);
}

function typeText(text) {

    let i = 0;
    document.getElementById("story").innerHTML = "";

    let interval = setInterval(() => {

        document.getElementById("story").innerHTML += text.charAt(i);
        i++;

        if (i >= text.length) {
            clearInterval(interval);
        }

    }, 40);
}
