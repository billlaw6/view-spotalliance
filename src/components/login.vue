<template>
<validator name = "login_validation">
  <form novalidate class="form-horizontal" role="form" @click.prevent="submit()">
    <div class="alert alert-danger" v-if="error">
      <p></p>
    </div>
    <div class="form-group">
      <label class="col-sm-3 control-label" for="id_username">form.username.label</label>
      <div class="col-sm-4">
        <input id="id_username" type="text" class="form-control" name="username" required="required" placeholder="username" v-model="credentials.username"/>
        {{ credentials.username }}
      </div>
    </div>

    <div class="form-group">
      <label class="col-sm-3 control-label" for="id_password"> password</label>
      <div class="col-sm-4">
        <input id="id_password" type="password" class="form-control" name="password" required="required" placeholder="password" v-model="credentials.password"/> 
        {{ credentials.password }}
      </div>
    </div>
        
    <button class="btn" @click.stop.prevent="submit()">加入中国邦</button>
    </a>
  </form>
    <button class="btn" @click.stop.prevent="get_user_info()">USER INFO</button>
    <button class="btn" @click.stop.prevent="cors_test()">CORS TEST</button>
    <button class="btn" @click.stop.prevent="xhr_cors_test()">XHR CORS TEST</button>
</validator>
</template>

<script>
import mdl from 'material-design-lite/material.js'
import autosize from 'autosize'
import store from '../store/index.js'
import auth from '../auth/index.js'

export default {
  data () {
    return {
      // We need to initialize the component with any properties that will be used in it
      credentials: {
        username: '',
        password: '',
      },
      error: ''
    }
  },

  ready:function(){
    this.$nextTick(function(){
      componentHandler.upgradeAllRegistered();
    })
  },

  methods:{
    submit(){
      var credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }

      let data = {login_info: 'nothing'}
      data = auth.login(this, credentials, 'chat')
      console.log(data)
      console.log(window.localStorage.getItem('id_token'))
    },
    get_user_info(){
      let data = auth.get_user_info(this)
      console.log(data)
      console.log(window.localStorage.getItem('headers'))
    },
    cors_test(){
      let data = auth.cors_test(this)
      console.log(data)
      console.log(window.localStorage.getItem('headers'))
    },
    xhr_cors_test(){
      let method="POST"
      let url = "http://www.spotalliance.com/rest-auth/user/"
      //let url = "http://www.spotalliance.com/users/"
      function createCORSRequest(method, url){
        var xhr = new XMLHttpRequest()
        if("withCredentials" in xhr){
          xhr.open(method, url, true)
          xhr.onload = function(e) {
            var data = JSON.parse(this.response)
          }
        } else if (typeof XDomainRequest != "undefined") {
          xhr = new XDomainRequest()
          xhr.onload = function(e) {
            var data = JSON.parse(this.response)
          }
          xhr.open(method, url)
        } else {
          xhr = null
        }
        return xhr
      }
      let request = createCORSRequest(method, url)
      request.send()
    },

    signUp(){
      var self = this;
      let isEmail = store.state.common.isEmail;

      if(!isEmail.test(this.sign.username)){
        this.showModal('提示','请输入正确的邮件地址')
        return false;
      }

      if(this.sign.password.length<6){
        this.showModal('提示','请使用更加复杂的密码')
        return false;
      }
    },
    logIn(){
      var self = this;
      let isEmail = store.state.common.isEmail;
      if(!isEmail.test(this.login.username)){
        this.showModal('提示','请输入正确的邮件地址')
        return false;
      }

      if(this.login.password.length<6){
        this.showModal('提示','请使用更加复杂的密码')
        return false;
      }
    }
  }


}
</script>

<style>
  .login-card-wide.mdl-card {
    width: 512px;
  }
  .login-card-wide > .mdl-card__title {
    color: #fff;
    height: 176px;
    background: url('../assets/img/welcome_card.jpg') center / cover;
  }
  .login-card-wide > .mdl-card__menu {
    color: #fff;
  }
  .login-bg{
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    z-index: 100;
  }
  .login-bg .login-card-wide{
    
  }
  .login-bg .input-box{
    text-align: center;
  }
  .login-bg .login-btn{
    float: right;
  }
</style>
