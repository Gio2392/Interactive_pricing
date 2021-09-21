const d = document,
      w = window,
      slider = d.querySelector(".slider"),
      amount = d.querySelector(".price__amount"),
      viewers = d.querySelector(".view__text"),
      check = d.getElementById("check");

const data = [
    {
        q: '10K pageviews',
        p: 8
    },
    {
        q: '50K pageviews',
        p: 12
    },
    {
        q: '100K pageviews',
        p: 16
    },
    {
        q: '500K pageviews',
        p: 24
    },
    {
        q: '1M pageviews',
        p: 36
    }
];

d.addEventListener("DOMContentLoaded", () => {

    /* MEDIO QUERY PARA EL DESCUENTO */
    const mediaQ = matchMedia('(min-width: 768px)');
    function changeD(e) {
        if(e.matches){
            d.querySelector(".change__text").textContent = "25% discount";
        }else{
            d.querySelector(".change__text").textContent = "-25%";
        }
    }
    mediaQ.addEventListener('change', changeD);
    changeD(mediaQ);
    /* INICIALIZAMOS A LA CARGA DEL DOM  */

    slider.style.background = `linear-gradient(90deg, hsl(174, 86%, 45%) ${slider.value}%, hsl(174, 77%, 80%) ${slider.value}%)`;
    amount.textContent = `$${data[slider.value / 25].p}.00`;
    viewers.textContent = `${data[slider.value / 25].q}`;

    /* INTERACTIVIDAD */

    d.addEventListener('input', () => {
        let valueX = slider.value;

        slider.style.background = `linear-gradient(90deg, hsl(174, 86%, 45%) ${valueX}%, hsl(174, 77%, 80%) ${valueX}%)`;

        if (check.checked === true) {
            amount.textContent = `$${(data[valueX / 25].p) * 0.75}.00`;
            viewers.textContent = `${data[valueX / 25].q}`;
        } else {
            amount.textContent = `$${data[valueX / 25].p}.00`;
            viewers.textContent = `${data[valueX / 25].q}`;
        }
    })
})

