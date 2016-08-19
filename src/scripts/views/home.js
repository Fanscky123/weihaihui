var indexHome = require('../tpls/home.string');

SPA.defineView('home', {
  html: indexHome,

  plugins: [{
    name: 'avalon',
    options: function (vm) {
      vm.livelist = [];
      vm.adlist=[];
    }
  }],

  // 绑定视图事件
  bindEvents: {
    'show': function () {
      var vm = this.getVM();
      $.ajax({
        url: '/weihaihui/mock/index.json',
        type: 'get',
        data: {},
        success: function (res) {
          vm.livelist = res.data.categoryList;
          vm.adlist=res.data.specList;
          console.log(res.data.specList)
        }
      })
      /*var mySwiper = new Swiper('#home-swiper', {
        loop: false,
        onSlideChangeStart: function(swiper){
          var index = swiper.activeIndex;
          $('#home-nav li').eq(index).addClass('active').siblings().removeClass('active');
        }
      });
      $('#home-nav li').on('tap', function () {
        mySwiper.slideTo($(this).index());
      });*/
    }
  }
});
