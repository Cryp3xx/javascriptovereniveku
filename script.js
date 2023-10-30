function mainfunction() {
    const inputcheck = parseInt(document.getElementById("ageInput").value);
    if (inputcheck >= 18) {
        document.getElementById("result").textContent = "Jsi dospělý.";
    } else {
        document.getElementById("result").textContent = "Nejsi dospělý.";
    }
}

function checkYear() {
    const yearSelect = parseInt(document.getElementById("yearInput").value);

    if (yearSelect <= 2005) {
        document.getElementById("result").textContent = "Jsi dospělý.";
    } else {
        document.getElementById("result").textContent = "Nejsi dospělý.";
    }
}

function allfunction() {
    const allinputselect = parseInt(document.getElementById("allInput").value);
    if (allinputselect > 1800) 
                      { 
        checkYear()
    } else {
        mainfunction()
    }

}