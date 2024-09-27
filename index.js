// 1 та 2 Завдання

const openModalEl = document.querySelector(".modal-open");
const modalBackdropEl = document.querySelector(".backdrop");
const closeModalEl = document.querySelector(".modal-close");

closeModalEl.addEventListener("click", () => {
    modalBackdropEl.classList.add("ishidden");
  });

openModalEl.addEventListener("click", () => {
  modalBackdropEl.classList.remove("ishidden");
});


// 3 Завдання

const radios = document.querySelectorAll("input[name='color']");

radios.forEach(radio => {
  radio.addEventListener("change", (e) => {
    document.body.style.backgroundColor = e.target.value;
  });
});


// 4 Завдання

document.querySelector("#name-input").addEventListener("input", e => {
    document.querySelector("#name-output").textContent = e.target.value || "незнайомець";
  });
  
  document.querySelector("#validation-input").addEventListener("blur", e => {
    const input = e.target;
    const requiredLength = Number(input.dataset.length);
  
    if (input.value.length === requiredLength) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid");
      input.classList.remove("valid");
    }
  });


// 5 Завдання

document.querySelector("#font-size-control").addEventListener("input", e => {
  document.querySelector("#text").style.fontSize = `${e.target.value}px`;
});
