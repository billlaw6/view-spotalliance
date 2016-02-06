<template>
  <div >
    <div >
      <div>
        <h2 >Please Login</h2>
      </div>
      <div >
        <div >
          <div >
            <input pattern="([A-Za-z0-9][-A-Za-z0-9]+\@)+([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}" v-model="login.username" type="text">
            <label class="mdl-textfield__label">E-mail</label>
          </div>
          <div >
            <input v-model="login.password" type="password">
            <label >Password</label>
          </div>
        </div>
      </div>
      <div >
        <a @click="showSign">
          Sign up
        </a>
         <a v-tap="logIn">
          Log in
        </a>
      </div>
    </div>
  </div>

  <div >
    <div >
      <div >
        <h2 >Welcome to sign up</h2>
      </div>
      <div >
        <div >
          <div >
            <input pattern="([A-Za-z0-9][-A-Za-z0-9]+\@)+([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}" v-model="sign.username" type="text">
            <label >E-mail</label>
          </div>
          <div >
            <input v-model="sign.password" type="password">
            <label >Password</label>
          </div>
        </div>
      </div>
      <div >
        <a @click="showLogin">
          Log in
        </a>
         <a v-tap="Signup">
          Sign up
        </a>
      </div>
    </div>
  </div>

</template>

<script>
import mdl from 'material-design-lite/material.js'
import autosize from 'autosize'
import store from '../store/index.js'

export default {
  data () {
    return {
      username: '',
      login: {
        username: '',
        password: '',
        passwordType: 'password'
      },
      sign: {
        username: '',
        password: '',
        passwordType: 'password'
      }
    }
  },
  ready:function(){
    this.$nextTick(function(){
      componentHandler.upgradeAllRegistered();
    })
  },
  methods:{
    showModal (title,text) {
      store.actions.showModal(title,text);
      
      this.$nextTick(function(){
        componentHandler.upgradeAllRegistered();
      })
    },
    showSign(){
      store.actions.hideLogin()
      store.actions.showSign()
      this.$nextTick(function(){
        componentHandler.upgradeAllRegistered();
      })
    },
    showLogin(){
      store.actions.showLogin()
      store.actions.hideSign()
       this.$nextTick(function(){
          componentHandler.upgradeAllRegistered();
        })
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
