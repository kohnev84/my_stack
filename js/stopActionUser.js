let flagVisible = false;
let flag = false;
var x = document.getElementById("snackbar");
var no_active_delay = 10; // Количество секунд простоя мыши, при котором пользователь считается неактивным
var now_no_active = 0; // Текущее количество секунд простоя мыши
setInterval("now_no_active++;", 1000); // Каждую секунду увеличиваем количество секунд простоя мыши
setInterval("updateChat()", 1000); // Запускаем функцию updateChat() через определённый интервал
document.onmousemove = activeUser; // Ставим обработчик на движение курсора мыши

function activeUser() {
    now_no_active = 0; // Обнуляем счётчик простоя секунд
    if (flagVisible === true) {
        x.className = x.className.replace("show", "none");
        setTimeout(function () { x.className = x.className.replace("none", "nonePlus"); }, 2500);
        flagVisible = false;
        flag = false;
    }
}

function updateChat() {
    if (now_no_active >= no_active_delay) { // Проверяем не превышен ли "предел активности" пользователя
        x.className = "show"; // В реальности стоит убрать, а здесь дано как доказательство того, что всё работает
        flagVisible = true;
        if (flag === false) {
            flag = true;
            document.getElementById("sound").play();
        }
        return;
    }
}