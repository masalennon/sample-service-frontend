// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
const config = {
  apiKey: 'AIzaSyBe5DH-f_dgar__tdBbDXCP_0SsYSbtbno',
  authDomain: 'referral-platform.firebaseapp.com',
  databaseURL: 'https://referral-platform.firebaseio.com',
  projectId: 'referral-platform',
  storageBucket: 'referral-platform.appspot.com',
  messagingSenderId: '968653925554',
  appId: '1:968653925554:web:710e1a7992a71f60636dab',
  measurementId: 'G-WWG98J3BT2'
}
/* eslint-disable */

firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(user => {

  new Vue({
    el: '#app',
    router,
    components: {
      App
    },
    template: '<App/>'
  })
})
