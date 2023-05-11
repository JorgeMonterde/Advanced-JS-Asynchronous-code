//RESUELVE TUS EJERCICIOS AQUI

//DOG API
//1º
async function getAllBreeds(){
    return fetch("https://dog.ceo/api/breeds/list/all")
                                                        .then(res => res.json())
                                                        .then(colection => Object.keys(colection.message).map(item => item))
                                                        .catch(error => console.log(error));
}


//2º
async function getRandomDog(){
    return fetch("https://dog.ceo/api/breeds/image/random")
                                                             .then(res => res.json())
                                                             .then(colection => colection.message)
                                                             .catch(error => console.log(error))
}
getRandomDog()


//3º
async function getAllImagesByBreed(){
    return fetch("https://dog.ceo/api/breed/komondor/images")
                                                            .then(res => res.json())
                                                            .then(item => item.message)
                                                            .catch(error => console.log(error))                                           
}
console.log(getAllImagesByBreed())


//4º
let breed = "komondor"
async function getAllImagesByBreed2(breed){
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
                                                        .then(res => res.json())
                                                        .then(item => item.message)
                                                        .catch(error => console.log(error))
}
console.log(getAllImagesByBreed2(breed))


//GitHub API (I) 
//1º

let username = "JorgeMonterde"
async function getGitHubUserProfile(username){
    return fetch(`https://api.github.com/users/${username}`)
                                                            .then(res => res.json())
                                                            .then(item => item)
}
console.log(getGitHubUserProfile(username))


//2º

async function printGithubUserProfile(username){
    return fetch (`https://api.github.com/users/${username}`)
                                                        .then(res => res.json())
                                                        .then(colection => {
                                                            let {name, avatar_url} = colection;
                                                            let h1 = document.createElement("h1");
                                                            let text = document.createTextNode(name);
                                                            h1.appendChild(text);

                                                            let image = document.createElement("img");
                                                            image.src = avatar_url;
                                                            //image.setAttribute ("src", avatar_url);

                                                            let div1 = document.createElement("div");
                                                            div1.appendChild(h1);
                                                            div1.appendChild(image);
                                                            document.body.appendChild(div1)
                                                            return {name, avatar_url}});
}
printGithubUserProfile(username)



/*
// Solucion de Fer :
 const printGithubUserProfile = (username) => {
     return fetch(`https://api.github.com/users/${username}`)
       .then((res) => res.json())
       .then((data) => {
         let { name, avatar_url } = data;
         document.body.innerHTML += `<section>
         <img id="1" src="${avatar_url}" alt="${name}">
         <h1>${name}</h1>
     </section>`;
         return { name, avatar_url };
       });
   };
   printGithubUserProfile(username)
*/


//3º 

function  getAndPrintGitHubUserProfile(username){
    fetch (`https://api.github.com/users/${username}`)
                                                        .then(res => res.json())
                                                        .then(colection => {
                                                            let src = colection.avatar_url;
                                                            let name = colection.name;
                                                            let publicRep = colection.public_repos;
                                                            let str = `<section>
                                                            <img src=${src} alt="imagen de ${name}">
                                                            <h1>${name}</h1>
                                                            <p>Public repos: ${publicRep}</p>
                                                            </section>`;
                                                            document.body.innerHTML += str;
                                                            return str;
                                                        })
}
getAndPrintGitHubUserProfile(username)




//4º
/*
meter los tags desde aquí no me funciona:

let searchDiv = document.createElement("div"); 
let textInput = document.createElement("input"); 
textInput.type = "text";
textInput.placeholder = "your search here";
textInput.name = "search";

let button = document.createElement("button");
let buttonText = document.createTextNode("Search profile");
button.appendChild(buttonText);

searchDiv.appendChild(textInput);
searchDiv.appendChild(button);

let formTag = document.createElement("form");

formTag.appendChild(searchDiv);
document.body.appendChild(formTag);
*/

let button = document.querySelector("#button");
button.addEventListener("click", function (){
    getAndPrintGitHubUserProfile(textInput.value)
})


//5º

let userNames = ["JorgeMonterde","Guille-Rubio"];

async function fetchGithubUsers(userNames) {
    let userProfiles = []
    for(let i=0; i<userNames.length; i++){
        userProfiles[i] = fetch (`https://api.github.com/users/${userNames[i]}`).then(res => res.json())
    }
    Promise.all(userProfiles).then((profiles) => {
                                for(let j=0; j<profiles.length; j++){
                                    console.log(profiles[j].url);
                                    console.log(profiles[j].name);
                                }})
}
fetchGithubUsers(userNames)

