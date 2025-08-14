//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listFriends = [];

function addFriends() {
    let friend = document.getElementById('amigo').value;
    
    if(friend != '') {
        listFriends.push(friend);

        console.log(listFriends)

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