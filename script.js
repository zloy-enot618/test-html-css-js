const message_one = document.getElementById('message')
const button1 = document.getElementById('myButton')
const status = document.getElementById('button')
const body = document.getElementById('sitl')

const button2 = document.getElementById('but')
const text = document.getElementById('changer')



button1.onclick = function() {
    message_one.textContent = 'Новое сообщение: Hello, World!';
    button1.textContent = 'Состояние: обновлено.';
    status.textContent = 'Статус: обновлено.';
    button1.style = 'font-size:33px';
    body.style = 'background-color: white';
};


button2.onclick = function() {
    text.textContent = 'Олег!';
    button2.textContent = "ОЛЕГ!"
}
