function checkLove() {
    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();
    let message = document.getElementById("message");

    // Input validation: both fields must be filled
    if (name1 === "" || name2 === "") {
        message.textContent = "Please enter both names first! 😅";
        message.style.color = "yellow";
        return;
    }

    // Generate a compatibility percentage between 50% and 100%
    let compatibility = Math.floor(Math.random() * 51) + 50;

    // Display message based on compatibility score
    if (compatibility > 90) {
        message.innerHTML = `🔥 ${name1} & ${name2} are a Perfect Match! ❤️ (${compatibility}%)`;
        message.style.color = "lime";
    } else if (compatibility > 70) {
        message.innerHTML = `💕 ${name1} & ${name2} are a great match! (${compatibility}%)`;
        message.style.color = "pink";
    } else if (compatibility > 50) {
        message.innerHTML = `🤔 ${name1} & ${name2} might work with effort! (${compatibility}%)`;
        message.style.color = "orange";
    } else {
        message.innerHTML = `💔 ${name1} & ${name2}, maybe think twice... (${compatibility}%)`;
        message.style.color = "red";
    }
}
