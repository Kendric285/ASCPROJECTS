let all_users = data.results
let clickedIDO;
console.log(all_users[0])
for(i = 0; i < all_users.length; i++){
     let all_posts_div = document.getElementById("all_posts")



     let pic_username = document.createElement("div")
     pic_username.id = i
     pic_username.classList.add("click")

     pic_username.setAttribute("onclick", "clicked()");

     // pic_username.style.display = "flex"
     // pic_username.style.flexDirection = "row"
     // pic_username.style.alignItems = "center"

     let profile_pic = document.createElement("img")
     profile_pic.src = all_users[i].picture.thumbnail
     profile_pic.id = "hello"

     let username = document.createElement("p")
     username.innerText = all_users[i].login.username

     pic_username.appendChild(profile_pic)
     pic_username.appendChild(username)
     pic_username.style.display = "flex"
     pic_username.style.backgroundColor = "blue"
     pic_username.style.color = "white"



     let post_image = document.createElement("img")
     post_image.src = images[i].download_url
     post_image.width = 565
     post_image.height = 300

     let image_holder = document.createElement("div")
     image_holder.appendChild(post_image)
     


     let description = document.createElement("p")
     description.innerText = "Hi my name is " + all_users[i].name.first + ". I hope you guys like my picture it was taken in " + all_users[i].location.city  + ", " + all_users[i].location.country

     let user_post = document.createElement("div")
     user_post.style.display = "flex"
     user_post.style.flexDirection = "column"
     
     let br = document.createElement("br")

     user_post.appendChild(pic_username)
     user_post.appendChild(image_holder)
     user_post.appendChild(description)

     user_post.style.textAlign = "center"
     user_post.style.borderStyle = "solid"
     user_post.style.width = "40%"
     

     all_posts_div.appendChild(user_post)
     all_posts_div.appendChild(br)
     all_posts_div.style.display = "flex"
     all_posts_div.style.flexDirection = "column"
     all_posts_div.style.justifyContent = "center"

     console.log("My name is " + all_users[i].name.first + " " + all_users[i].name.last)
     console.log(images[i].download_url)
}

function clicked(){
     console.log("You've been clicked")
}

let all_profiles = document.querySelectorAll(".click")
for(i = 0; i < all_profiles.length; i++){
     all_profiles[i].addEventListener('click', function(){
          all_users.id = this.id
          console.log(this.id)
          clickedIDO = this.id
          location.href = "/day4/visData/profile.html"
          
          // var clickedID = this.id
     });
     console.log(all_profiles[i].id)
}


function getId(btn){
     console.log(btn)
}



