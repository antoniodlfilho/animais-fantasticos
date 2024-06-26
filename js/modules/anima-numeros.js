export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");

  function animaNumeros() {
    numeros.forEach((numero) => {
      const total = +numero.innerText;

      let start = 0;
      const timer = setInterval(() => {
        const incremento = Math.floor(total / 100);
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let observer;
  
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }
  observer = new MutationObserver(handleMutation)

  const observeTarget = document.querySelector(".numeros");

  observer.observe(observeTarget, { attributes: true });
}
