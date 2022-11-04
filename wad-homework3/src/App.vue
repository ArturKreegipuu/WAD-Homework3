<template>
  <!--<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/addPost">About</router-link>
  </nav>
  <router-view/>-->
  <Header/>
  <router-link to="/"/>
  <router-view/>


  <Footer/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #f1dedeff;
}
</style>


<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeView from "@/views/HomeView";
export default {
  components: {HomeView, Footer, Header}
}
</script>