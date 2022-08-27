let count = 3;

let addUser = () => {
    count++;
    const newUser = document.createElement('p');
    newUser.setAttribute('class', 'item');
    newUser.innerHTML = `User ${count}`;

    document.getElementById("users").appendChild(newUser);
}

let removeUser = () => {
    if(count == 0) return
    
    count--;
    document.getElementById("users").lastChild.remove();
}