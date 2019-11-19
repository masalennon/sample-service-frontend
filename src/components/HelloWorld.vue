/* eslint-disable no-tabs */
<template>
  <div class="hello">
<h1>{{ msg }}</h1>
<h2>Essential Links</h2>
<button @click="signOut">Sign out</button>
<button @click="apiPublic">public</button>
<button @click="apiPrivate">private</button>
</div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import firebase from 'firebase'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    apiPublic: async function() {
      console.log(localStorage.getItem('jwt'))
      let res = await axios.get('http://localhost:8083/api/guests/public')
      this.msg = res.data
    },
    // apiPrivate: async function() {
    //   let res = await axios.get('http://localhost:8083/api/referrer/private')
    //   this.msg = res.data
    // },
    apiPrivate: async function () {
    let res = await axios.get('http://localhost:8083/api/referrer/private', {
    headers: {'Authorization': `Bearer ${localStorage.getItem('jwt')}`}
    })

    console.log(localStorage.getItem('jwt'))
    this.msg = res.data
    },
    signOut: function () {
      firebase.auth().signOut().then(() => {
        localStorage.removeItem('jwt')
        this.$router.push('/signin')
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
