let name = prompt('Имя')
if (name == 'Alex') {
} else {
    alert('Пользователь не найден , досвидули')
}
let account = prompt('номер счета')
if (account == 7777) {
} else {
    alert('не провилный номер счете')
}
let money = prompt('сколко обналичат')
if (money < 10000) {
    prompt(10000 - money)
    prompt(money)
} else {
    alert('Недостаточно средств')
}
