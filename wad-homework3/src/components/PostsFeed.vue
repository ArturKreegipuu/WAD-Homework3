<template>
  <div class="gridContainer">
    <div class="side"></div>
    <div id="feed">
    </div>
    <div class="side"></div>
  </div>
</template>

<script>
export default {
  name: "PostsFeed",
  mounted:function (){
    this.loadPosts()
  },
  methods:{
    loadPosts:function (){
      fetch("http://myjson.dit.upm.es/api/bins/7ydi") // validated at https://jsonlint.com/
          .then(response => response.json())
          .then(json => {


            for (let post of json) {

              let postContainer = document.createElement("div")
              postContainer.className = "post"

              let postHeader = document.createElement("div")
              postHeader.className = "postHeader"

              let postBodyContainer = document.createElement("div")
              postBodyContainer.className = "postBody"

              let postFooter = document.createElement("div")
              postFooter.className = "postFooter"

              // Adding profile picture to post's header
              let profilePic = document.createElement("img")
              profilePic.src = "@/assets/logo.png"
              profilePic.alt = "logo"
              profilePic.className = "profilePic"
              postHeader.appendChild(profilePic)

              // Adding date of the post to post's header
              let time = document.createElement("p")
              let postTime = document.createTextNode(post.createTime)
              time.appendChild(postTime)
              postHeader.appendChild(time)

              // Adding post's image if provided in the json file
              if (post.image != null) {
                let postImg = document.createElement("img")
                postImg.src = post.image
                postImg.alt = "Post's image"
                postImg.className = "postPic"
                postBodyContainer.appendChild(postImg)
              }
              // Adding post's text to post's body
              let postBody = document.createElement("p")
              let postText = document.createTextNode(post.post)
              postBody.appendChild(postText)
              postBodyContainer.appendChild(postBody)

              // Adding like button to post's footer
              let likeBtn = document.createElement("img")
              likeBtn.src = "@/assets/like.png"
              likeBtn.alt = "like"
              likeBtn.className = "like"
              postFooter.appendChild(likeBtn)

              postContainer.appendChild(postHeader)
              postContainer.appendChild(postBodyContainer)
              postContainer.appendChild(postFooter)

              let feed = document.getElementById("feed")
              feed.appendChild(postContainer)
            }
          })
    }
  }
}
</script>



<style scoped>
/* Feed of posts */
.gridContainer {
  display: grid;
  grid-template-columns: auto 50% auto;
}

#feed {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 10px auto;
}

.side {
  background-color: #c2f8cbff;
  border-radius: 10px;
  margin: 10px;
  width: auto;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.75);
}

p ~ span {
  color: red;
}
</style>