let currentPage = 1;
let totalPagesApi;
function getUsers (page) {
    currentPage == page ;
    let requist = new XMLHttpRequest();
    requist.addEventListener('load', render);
    requist.addEventListener('error', errorRender);

    requist.open('GET', 'https://reqres.in/api/users?page=' + page);
    requist.send();
}
function render () {
    let response = this.responseText;
    let responseDate = JSON.parse(response);
    let fragment = document.createDocumentFragment();

    responseDate.data.forEach(item => {
        let li = document.createElement('li');

        let pEmail = document.createElement('p');
        pEmail.textContent = item.email;

        let imgUser = document.createElement('img');
        imgUser.src = item.avatar;
        imgUser.classList.add('image-block');

        li.appendChild(imgUser);
        li.appendChild(pEmail);

        li.classList.add('li-item');

        fragment.appendChild(li);

    });
    document.getElementById('ul-list').innerHTML = ' ';
    document.getElementById('ul-list').appendChild(fragment);

    totalPagesApi = responseDate.total_pages;

}
function errorRender() {
    let p = document.createElement('p');
    p.textContent = 'Server Error';

    document.getElementById('api-user-email').appendChild(p);
}
document.getElementById('loadprev').addEventListener('click', function() {
    if (currentPage == 1) {
        return;
    }
    currentPage -= 1;
    getUsers(currentPage);
} )
document.getElementById('loadnext').addEventListener('click', function() {
    if (currentPage == totalPagesApi) {
        return;
    }
    currentPage += 1;
    getUsers(currentPage);
})
getUsers(currentPage);





