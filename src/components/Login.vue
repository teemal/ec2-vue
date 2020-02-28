<template>
  <div class="home">
    <form action v-on:submit.prevent>
      <div class="field">
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <input class="input" type="email" placeholder="Email" v-model="email" />
          </div>
        </div>
        <div class="field">
          <div class="columns">
            <div class="column is-4 is-offset-4">
              <input
                class="input"
                type="password"
                placeholder="Password"
                v-model="password"
                @keydown.enter="emailLogin()"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
          <div class="column is-4 is-offset-4">
              <div class="box has-text-centered">
          <div class="columns">
            <div class="column is-3 is-offset-2">
              <button class="button is-info" v-on:click="goToSignUp()">Sign Up</button>
            </div>
            <div class="column is-3 is-offset-2">
              <button class="button is-success" v-on:click="emailLogin()">Login</button>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12">
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
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
/*eslint-disable*/
const firebaseApp = require("../firebase/ConfigFirebase");
import firebase from "firebase";
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
    goToSignUp() {
      this.$router.push("signup");
    },
    emailLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(res => {
          // console.log(res.user.uid);
          var userId = res.user.uid;
          this.$emit("setUid", userId);
          this.$router.push("userpage/" + userId);
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
    SignInWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
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
  }
};
/*eslint-enable*/
</script>

<style scoped>
#google-signin-button {
  width: 80%;
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
#buttons-box{
    width: 10vw;
}
</style>