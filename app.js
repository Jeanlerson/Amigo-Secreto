//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listFriends = [];

let ulFriend = document.getElementById('listaAmigos');
let ulDrawFriends = document.getElementById('resultado');

function addFriends() {
    let friend = document.getElementById('amigo').value.trim();
    
    if(ulDrawFriends.innerHTML != '') {
        alert('Para adicionar de novo, deve fazer outro sorteio.');
        return;
    }

    if(friend != '') {
        listFriends.push(friend);

        clean();
        showList();
    } else {
        alert('Por favor, insira um nome.');
        clean();
    }
}
function clean() {
    let friend = document.querySelector('input');
    friend.value = '';
}
function showList() {
    ulFriend.innerHTML = '';

    for(let friend = 0; friend < listFriends.length; friend++) {
        let liFriend = document.createElement('li');
        liFriend.textContent = listFriends[friend];
        ulFriend.appendChild(liFriend);
    }
}
function drawFriends() {
    let numberRandom = Math.floor(Math.random() * listFriends.length);
    ulDrawFriends.innerHTML = '';

    if(listFriends.length > 0) {
        let liDrawFriends = document.createElement('li');
        liDrawFriends.textContent = `O amigo sorteado é: ${listFriends[numberRandom]}`;
        ulDrawFriends.appendChild(liDrawFriends);

        document.getElementById('listaAmigos').innerHTML = '';
    } else {
        alert('Por favor, insira um nome antes.');
    }
}
function resetDraw() {
    listFriends.length = 0;
    ulDrawFriends.innerHTML = '';
    ulFriend.innerHTML = '';
    clean();
}