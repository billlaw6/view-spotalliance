<template>
<validator name = "login_validation">
  <form novalidate class="form-horizontal" role="form">
    {% csrf_token %}
    <div class="form-group">
      <label class="col-sm-3 control-label" for="id_username">form.username.label</label>
      <div class="col-sm-4">
        <input id="id_username" type="text" class="form-control" name="username" required="required" value=" form.data.username "/>
      </div>
    </div>

    <div class="form-group">
      <label class="col-sm-3 control-label" for="id_password"> password</label>
      <div class="col-sm-4">
        <input id="id_password" type="password" class="form-control" name="password" required="required" /> 
      </div>
    </div>
        
    <div class="form-group">
      <label class="col-sm-3 control-label" for="form.captcha.id_for_label">验证码</label>
          <div class="col-sm-4">
          </div>
    </div>

    <button class="btn">加入中国邦</button>
    <a href="https://oauth.taobao.com/authorize?client_id=23258278&response_type=code&state=1&redirect_uri=http://www.spotalliance.com&scope=item,promotion,usergrade" >
        <img src="{%static 'accounts/img/taobao_logo_63x24.png'%}" alt="淘宝登录" />
    </a>
    <a href="https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101253877&redirect_uri=http://www.spotalliance.com&state=test&scope=get_user_info,list_album,upload_pic,do_like" >
        <img src="{%static 'accounts/img/QQ_logo_63x24.png'%}" alt="QQ登录" />
    </a>
  </form>
</validator>
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
