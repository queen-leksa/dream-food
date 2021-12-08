// Получить данные из базы данных за счет ajax-запроса
let container = document.querySelector(".products");
// IIFE
(async () => {
    const res = await fetch("/api/vegetables");
    const data = await res.json();
    container.innerHTML = JSON.stringify(data.data);
})();