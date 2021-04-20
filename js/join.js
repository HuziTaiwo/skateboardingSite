const toggle = document.querySelector(".toggle");
const menuBar = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menuBar.classList.toggle("active");
});

const valiadtion = () => {
  const form = document.forms["form"];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userInput = document.querySelector("#username");
    const emailInput = document.querySelector("#email");
    const passInput = document.querySelector("#password");

    const userValue = userInput.value;
    const emailValue = emailInput.value;
    const passValue = passInput.value;

    const formContent = document.querySelector("#form-content");

    if (userValue === "" || emailValue === "" || passValue === "") {
      err = document.createElement("p");
      err.classList.add("error");
      err.textContent = "Oops! Fill all fields";

      form.appendChild(formContent.appendChild(err));

      setTimeout(() => {
        form.removeChild(err);
      }, 1000);
    } else {
      msg = document.createElement("div");
      msg.classList.add("fade");
      msg.innerHTML = `
      <div class="wrap">
      <div class="msg">
        <p>${userValue} has sucessfully become a member</p>
        <div class="to_home">
          <button id="back">
            <i class="fas fa-arrow-left"></i>
          </button>
          <p>back to home</p>
        </div>
      </div>
    </div>
      `;
      document.body.appendChild(msg);

      const backBtn = document.querySelector("#back");

      backBtn.addEventListener("click", () => {
        document.body.removeChild(msg);

        userValue === "";
        emailValue === "";
        passValue === "";
      });
    }
  });
};

valiadtion();
