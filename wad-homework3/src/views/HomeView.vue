<template>
  <div class="gridContainer">
    <div class="side"></div>
    <div id="feed">
      <template v-for="post in postsList" :key="post.id">
        <Post v-bind:content="post"/>
      </template>
    </div>
    <div class="side"></div>
  </div>
  <Footer/>
</template>

<script>

import Post from "@/components/Post";
import Footer from "@/components/Footer";

export default {
  name: 'HomeView',
  components: {Footer, Post},
  data() {
    return {
      postsList: this.getPostsData()
    };
  },
  methods: {
    getPostsData() {
      fetch("http://myjson.dit.upm.es/api/bins/7ydi")
          .then(response => response.json())
          .then(data => (this.postsList = data));
    }
  }
}
</script>

<style>
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
.postHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}

.postBody {
  padding: 5px;
}

.postFooter {
  padding: 5px;
  background-color: transparent;
}

.post {
  background-color: #9699a1;
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 5px;

}

.profilePic {
  width: 25px;
  height: 25px;

}

.like {
  width: 30px;
  height: 30px;
}

.like:hover {
  opacity: 30%;
}

.postPic {
  margin: auto;
  width: 100%;
  height: 100%;
}

footer {
  background-color: #69a2b0ff;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.75);
  margin-top: auto;


}
</style>
