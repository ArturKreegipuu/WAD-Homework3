<template>
  <div class="login">
    <div>
      <form>
        <div>
        <label>Email</label>
        <input type="email" id="email" v-model="form" placeholder="Email" required>
        </div>
        <div>
        <label>Password</label>
        <input type="Password" id="password" v-model="form" placeholder="Password" required>
        </div>
        <input class="signUpButton" type="submit" @click.stop.prevent="submit()" value="Sign up">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data(){
    return {
      form : null
    }
  },
  methods: {
    submit(){
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>
.login {
  position: center;
  border-radius: 10px;
  background-color: #9699a1;
  width: fit-content;
  margin: 5% auto;
  padding: 2%;
}

div div {
  position: relative;
  margin: 2% auto;
  display: flex;
  justify-content: center;
}
label {
  display: inline-block;
  align-content: baseline;
  width: 100px;
  text-align: right;
  margin: auto;
  margin-right: 5px;
}


.signUpButton {
  background-color: #4267B2;
  color: white;
  border-color: #4267B2;
  border-width: thin;
  width: 100px;
  height: 20px;
  position: center;
  margin: auto;
  padding: 3px;
  cursor: pointer;

}
.signUpButton:hover{
  opacity: 85%;
}

div form {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}

form input {
  margin: 2px;
  border-radius: 10px;
  padding: 5px;
}
</style>