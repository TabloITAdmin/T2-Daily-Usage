const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "She" && password === "00032") {
        window.open("main.html", "_self");
    }
    else if (username === "Cel" && password === "00081") {
        window.open("main.html", "_self");
    }
    else if (username === "Gel" && password === "00635") {
        window.open("main.html", "_self");
    }
    else if (username === "Lex" && password === "00223") {
        window.open("main.html", "_self");
    }
    else if (username === "marvs" && password === "00622") {
        window.open("main.html", "_self");
    }
    else if (username === "DPS" && password === "00051") {
        window.open("main.html", "_self");
    }
    else if (username === "Val" && password === "00060") {
        window.open("main.html", "_self");
    }
    else {
        loginErrorMsg.style.opacity = 1;
    }

})
