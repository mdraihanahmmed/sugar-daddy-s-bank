const loginButton = document
  .getElementById("login-button")
  .addEventListener("click", () => {
    // getting papas pari's email
    const emailInputTag = document.getElementById("email-field");
    const emailInputValue = emailInputTag.value;

    // getting  papas pari's password
    const passwordInputTag = document.getElementById("password-field");
    const passwordInputValue = passwordInputTag.value;

    console.log(passwordInputValue);

    if (
      emailInputValue == "papaspari@gmail.com" &&
      passwordInputValue == "papaspari"
    ) {
      window.location.href = "banking.html";
    } else {
      alert("please enter valid email or password!");
    }
  });
