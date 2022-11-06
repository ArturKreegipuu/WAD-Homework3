<template>
  <Header/>
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
export default {
  components: {Footer, Header}
}

</script>