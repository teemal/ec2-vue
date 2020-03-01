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
import axios from "axios";
require("dotenv").config();
// @ is an alias to /src
/*eslint-disable*/
export default {
  name: "signup",
  components: {},
  data() {
    return {
      email: "",
      name: "",
      id: ""
    };
  },
  methods: {
    SignInWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      this.$firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
          this.id = res.user.uid;
          this.name = res.user.displayName;
          this.email = res.user.email;
          axios
            .post("http://ec2-18-208-114-118.compute-1.amazonaws.com:3000/save-user?id=" + this.id + "&name=" + this.name + "&email=" + this.email )
            .then(res => {
              console.log(res);
                if(res.status === 200){
                    this.$router.push('content/' + res.data);
                }else{
                    alert('something went wrong with login, please try again!');
                }
            })
            .catch(e => {
              console.log(e);
            });
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