//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listFriends = [];

function addFriends() {
    let friend = document.getElementById('amigo').value;
    
    if(friend != '') {
        listFriends.push(friend);

        clean();
    } else {
        alert('Por favor, insira um nome.');
    }
}
function clean() {
    friend = document.querySelector('input');
    friend.value = '';
}