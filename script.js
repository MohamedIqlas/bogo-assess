function updateBogo(bogoCount) {
    let total = document.getElementById("total");
    let SPrice = document.querySelector(`input[value="${bogoCount}"]`).getAttribute("data-price");


    document.querySelectorAll(".bogo-details").forEach(bogo => {
        bogo.style.display = "none";
    });

    if (bogoCount == 1) {
        document.getElementById("bogo1-details").style.display = "block";
    }
    if (bogoCount == 2) {
        document.getElementById("bogo2-details").style.display = "block";
    }
    if (bogoCount == 3) {
        document.getElementById("bogo3-details").style.display = "block";
    }
    total.innerText = `$${SPrice}.00 USD`;
}
