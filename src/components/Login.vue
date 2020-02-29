<template>
  <div class="home">
    <div class="columns">
      <div class="columns">
        <div class="column is-6 is-offset-10">
          <img
            src="../assets/GoogleSignUpDark.png"
            alt
            id="google-signin-button"
            v-on:click="SignInWithGoogle()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
require("dotenv").config();
// @ is an alias to /src
/*eslint-disable*/
export default {
  name: "signup",
  components: {},
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    SignInWithGoogle() {
    //   console.log(process.env.VUE_APP_API_KEY);
      var provider = new firebase.auth.GoogleAuthProvider();
      this.$firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
          this.user = res;
          var userId = res.user.uid;
          this.$router.push("userpage/" + userId);
        })
        .catch(e => {
          alert(e);
        });
    }
  },
  mounted() {}
};
/*eslint-enable*/
</script>

<style scoped>
#google-signin-button {
  width: 90%;
}
#google-signin-button:hover {
  cursor: pointer;
}
.btn:hover {
  cursor: pointer;
}
.field {
  margin-top: 20px;
}
#buttons-box {
  width: 10vw;
}
</style>