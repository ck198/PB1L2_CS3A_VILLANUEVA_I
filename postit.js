const userForm = document.getElementById("userForm");
const postForm = document.getElementById("postForm");
const postArea = document.getElementById("postArea");
const userDisplay = document.getElementById("userDisplay");
const thread = document.getElementById("thread");


let user = "";
userForm.addEventListener("submit", function(e) {
    e.preventDefault();
    user = document.getElementById("username").value;
    userDisplay.textContent = user;
    userForm.classList.add("hidden");
    postArea.classList.remove("hidden");

});

postForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const post = document.getElementById("caption").value;
    const date = new Date().toISOString();

    const data = JSON.stringify({
        username: user,
        post: post,
        date: date
    });

    const encrypted = CryptoJS.AES.encrypt(
        data,
        "PB1-L2-Key"
    ).toString();

    thread.innerHTML +=
        "<div class='post'>" +
        "<b>ORIGINAL POST</b>" +
        "<p>" + post + "</p>" +
        "<b>ENCRYPTED</b>" +
        "<p class='encrypted'>" + encrypted + "</p>" +
        "<small>" + date + "</small>" +

        "</div>";
    postForm.reset();

});