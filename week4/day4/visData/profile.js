// let clickedID = 0


let profile_name = data.results[clickedIDO].name.first
let pTag = document.createElement("p")
pTag.innerText = profile_name

let profile_user = data.results[clickedIDO].login.username
let other = document.createElement("p")
other.innerText = profile_user

let profile = document.getElementById("profile")
profile.appendChild(pTag)
profile.appendChild(other)