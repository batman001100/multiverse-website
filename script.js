function openUniverse(choice) {

    let text = "";

    if (choice === 1) {
        text = "We stayed just friends... and something always felt missing.";
    }
    else if (choice === 2) {
        text = "We never met... and that universe feels empty.";
    }
    else if (choice === 3) {
        text = "Out of all universes... this one feels the most special 💫";
    }

    typeText(text);
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

    }, 50);
}
