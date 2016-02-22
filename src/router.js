import AmapView from './components/AmapView.vue'
import ChatView from './components/ChatView.vue'
import IntroView from './components/IntroView.vue'
import UserView from './components/UserView.vue'
import LoginView from './components/login.vue'

module.exports = function(router){
	router.map({
    '/intro': {
      component: IntroView
    },
    '/amap': {
      component: AmapView
    },
    '/chat': {
      component: ChatView
    },
    '/user': {
      component: UserView
    },
    '/login': {
      component: LoginView
    }
  })

  router.redirect({
    // 重定向任意未匹配路径到 /
    '*': '/intro'
  })
	
}
