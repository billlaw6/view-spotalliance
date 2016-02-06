<template>
  UserView
  <div> {{ msg }} </div>
</template>

<script>
export default {
  name: 'UserView',

  // 本组件的数据
  data () {
    return {
      msg: 'Message from UserView'
    }
  },

  asyncData: function (resolve, reject) {
    this.$http.get('../testData.json', {}, {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      emulateJSON: true
    }).then( function (response) {
      var data = response.data
      resolve({
        msg: data
      });
      }, function(response) {
        console.log('Error in UserView asyncData')
      }
    )
  }

}
</script>
