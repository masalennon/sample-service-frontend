<template>
  <div class="signup">
    <h2>Sign up</h2>
    <input type="text" v-model="email" placeholder="Username" />
    <input type="password" v-model="password" placeholder="Password" >
    <button @click="authFaceBook">Register</button>
    <p>
      Do you have an account?
      <router-link to="/signin">sign in now!!</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'

export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    authFaceBook: function () {
      const provider = new firebase.auth.FacebookAuthProvider()
      firebase
        .auth().signInWithPopup(provider).then(
          res => {
            res.user.getIdToken().then(idToken => {
              localStorage.setItem('jwt', idToken.toString())
            })
            axios({
              method: 'post',
              url: 'http://localhost:8083/api/users',
              headers: {
                'Content-Type': 'application/json'
              },
              data: {
                referrer: {
                  uid: res.user.uid,
                  username: res.user.displayName,
                  email: res.user.email
                }
              }
            })
            this.$router.push('/')
          },
          err => {
            alert(err.message)
          }
        )
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signup {
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
button {
  margin: 10px 0;
  padding: 10px;
}
</style>
