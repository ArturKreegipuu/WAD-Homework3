<template>
  <PostsFeed/>
</template>

<script>
// @ is an alias to /src
import PostsFeed from '@/components/PostsFeed.vue'

export default {
  name: 'HomeView',
  components: {
    PostsFeed
  }
}
</script>

<style>
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
</style>
