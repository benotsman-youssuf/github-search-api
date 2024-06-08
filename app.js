const search = document.querySelector('#search');
const input = document.querySelector('#username');

const avatar = document.querySelector('.avatar');
const name = document.querySelector('.name');
const username = document.querySelector('.username');
const joinDtae = document.querySelector('.joined');
const bio = document.querySelector('.bio');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');
const repos = document.querySelector('.repos');



const url = 'https://api.github.com/users/';

const searchUser = async (user) => {

    const response = await fetch(url + user)
    const data = await response.json();
    console.log(data);

    avatar.src = data.avatar_url;
    name.textContent = data.name;
    username.textContent = data.login;
    user
    joinDtae.textContent = data.created_at;
    bio.textContent = data.bio;
    followers.textContent = data.followers;
    following.textContent = data.following;
    repos.textContent = data.public_repos;
    
};



search.addEventListener('click', () => {
    searchUser(input.value);
    input.value = '';
});