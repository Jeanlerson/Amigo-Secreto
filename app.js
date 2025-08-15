//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listFriends = [];

function addFriends() {
    let friend = document.getElementById('amigo').value;
    
    if(friend != '') {
        listFriends.push(friend);

        clean();
        showList();
    } else {
        alert('Por favor, insira um nome.');
    }
}
function clean() {
    let friend = document.querySelector('input');
    friend.value = '';
}
function showList() {
    let ulFriend = document.getElementById('listaAmigos');
    ulFriend.innerHTML = '';

    for(let friend = 0; friend < listFriends.length; friend++) {
        let liFriend = document.createElement('li');
        liFriend.textContent = listFriends[friend];
        ulFriend.appendChild(liFriend);
    }
}
function drawFriends() {
    let numberRandom = Math.floor(Math.random() * listFriends.length);
    let ulDrawFriends = document.getElementById('resultado');
    ulDrawFriends.innerHTML = '';

    if(listFriends.length > 0) {
        let liDrawFriends = document.createElement('li');
        liDrawFriends.textContent = `O amigo sorteado é: ${listFriends[numberRandom]}`;
        ulDrawFriends.appendChild(liDrawFriends);

        document.getElementById('listaAmigos').innerHTML = '';
    } else {
        alert('Por favor, insire um nome antes.');
    }
}