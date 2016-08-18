var indexHome = require('../tpls/home.string');

SPA.defineView('home', {
  html: indexHome,

  plugins: [{
    name: 'avalon',
    options: function (vm) {
      vm.livelist = [];
    }
  }],

  // 绑定视图事件
  bindEvents: {
    'show': function () {
      var vm = this.getVM();
      $.ajax({
        url: '/weihaihui/mock/livelist.json',
        type: 'get',
        data: {},
        success: function (res) {
          vm.livelist = res.data;
        }
      })
      var mySwiper = new Swiper('#home-swiper', {
        loop: false,
        onSlideChangeStart: function(swiper){
          var index = swiper.activeIndex;
          $('#home-nav li').eq(index).addClass('active').siblings().removeClass('active');
        }
      });
      $('#home-nav li').on('tap', function () {
        mySwiper.slideTo($(this).index());
      });
    }
  }
});
