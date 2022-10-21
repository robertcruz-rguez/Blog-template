(function ($) {

    function init(){
        
        document.body.classList.add('loading');

        $('.hero__slider').slick({
            pauseOnHover:false,
            pauseOnFocus:false,
            arrows:true,
            dots:false,
            infinite: true,
            adaptativeHeight:true,
            slidesToShow: 1,
            fade:true,
            asNavFor:'.hero__bg,.hero__figure',
            prevArrow: $('#heroPrev'),
            nextArrow: $('#heroNext'),
        });

        $('.hero__bg').slick({
          pauseOnHover:false,
          pauseOnFocus:false,
          arrows:false,
          dots:false,
          infinite: true,
          slidesToShow: 1,
          fade:true,
      });

      $('.hero__figure').slick({
        pauseOnHover:false,
        pauseOnFocus:false,
        arrows:false,
        dots:false,
        infinite: true,
        slidesToShow: 1,
        fade:true,
    });

    $('#categorySlider').slick({
      pauseOnHover:false,
      pauseOnFocus:false,
      arrows:false,
      dots:true,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow:1
          }
        }
        ]
  });

  $('#projectSlider').slick({
    pauseOnHover:false,
    pauseOnFocus:false,
    arrows:false,
    dots:true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:4,
          dots:true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:4,
          dots:true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:1,
          dots:true,
        }
      }
      ]
});

$('#logosSlider').slick({
  pauseOnHover:false,
  pauseOnFocus:false,
  arrows:false,
  dots:false,
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow:3,
        dots:true,
      }
    }
    ]
});

$('.footer__maps').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots:false,
  fade:true,
  // asNavFor: '.shop-modal_list ul',
  
});

$('.footer__contents').slick({
  variableWidth:true,
  slidesToScroll: 1,
  asNavFor: '.footer__maps',
  dots: false,
  arrows:false,
  focusOnSelect: true,
  draggable: false,
  infinite:false,
  slidesToShow:6,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:4,
        draggable: true,
        infinite:true,
        arrows:true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow:4,
        draggable: true,
        infinite:true,
        arrows:true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow:2,
        draggable: true,
        infinite:true,
        arrows:true,
      }
    }
    ]
});

  /*---------------------*/
        /* Activando header reversed
        /*---------------------*/
            
        var heightH = $("#header").outerHeight();
        var elmnt = $("body, html").scrollTop();
        // console.log(heightH);

        if(elmnt > heightH){
            $("#header").addClass("activeFixed");
        }else{
            $("#header").removeClass("activeFixed");
        }

        window.onscroll = function() {
            var heightH = $("#header").outerHeight();
            var elmnt = $("body, html").scrollTop();

            if(elmnt > heightH){
                $("#header").addClass("activeFixed");
            }else{
                $("#header").removeClass("activeFixed");
            }
        };
        
      //   $('#categories-home_slider').slick({
      //       pauseOnHover:false,
      //       pauseOnFocus:false,
      //       arrows:false,
      //       dots:true,
      //       infinite: false,
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       rows:6,
      //       appendDots: $('.categories_dots'),
      //       responsive: [
      //             {
      //               breakpoint: 1024,
      //               settings: {
      //                 rows:6,
      //               }
      //             },
      //             {
      //               breakpoint: 600,
      //               settings: {
      //                 rows:6,
      //               }
      //             },
      //             {
      //               breakpoint: 480,
      //               settings: "unslick"
      //             }
      //       ]
      //   });
        
      //   $('#categories_slider').slick({
      //       pauseOnHover:false,
      //       pauseOnFocus:false,
      //       arrows:false,
      //       dots:true,
      //       infinite: false,
      //       slidesToShow: 3,
      //       slidesToScroll: 1,
      //       appendDots: $('.categories_dots'),
      //       responsive: [
      //             {
      //               breakpoint: 1024,
      //               settings: {
      //                 slidesToShow: 4,
      //               }
      //             },
      //             {
      //               breakpoint: 600,
      //               settings: {
      //                 slidesToShow: 4,
      //               }
      //             },
      //             {
      //               breakpoint: 480,
      //               settings: "unslick"
      //             }
      //       ]
      //   });
        
      //   $('.products-featured_slider').slick({
      //       pauseOnHover:false,
      //       pauseOnFocus:false,
      //       arrows:false,
      //       dots:true,
      //       appendDots: $('.products-featured_dots'),
      //       infinite: false,
      //       slidesToShow: 4,
      //       slidesToScroll: 1,
      //       responsive: [
      //         {
      //           breakpoint: 1024,
      //           settings: {
      //             slidesToShow: 3,
      //           }
      //         },
      //         {
      //           breakpoint: 600,
      //           settings: {
      //             slidesToShow:3,
      //           }
      //         },
      //         {
      //           breakpoint: 480,
      //           settings: {
      //             slidesToShow: 1,
      //             centerMode:true,
      //             centerPadding:'45px',
      //           }
      //         }
      //         ]
      //   });
        
        
      //   $('.about-intro_slider').slick({
      //       pauseOnHover:false,
      //       pauseOnFocus:false,
      //       arrows:false,
      //       dots:true,
      //       infinite: true,
      //       autoplay:true,
      //       autoplaySpeed:3000,
      //       speed:800,
      //       slidesToShow: 1,
      //       fade:true,
      //       appendDots: $('.about-intro_dots'),
            
      //   });
        
      //   $('.about-brands_slider').slick({
      //       pauseOnHover:false,
      //       pauseOnFocus:false,
      //       arrows:true,
      //       dots:false,
      //       infinite: false,
      //       rows:4,
      //       slidesToShow: 1,
      //       prevArrow: '#about-brands_prev',
			// nextArrow: '#about-brands_next',
			// responsive: [
      //         {
      //           breakpoint: 1024,
      //           settings: {
      //             rows:4,
      //           }
      //         },
      //         {
      //           breakpoint: 600,
      //           settings: {
      //             rows:4,
      //           }
      //         },
      //         {
      //           breakpoint: 480,
      //           settings: {
      //             rows:2,
      //           }
      //         }
      //         ]
      //   });


      function TabWidget (el, selectedIndex) {

        if (!el) {
            return;
        }
    
        this.el = el;
        this.tabTriggers = this.el.getElementsByClassName('js-tab-trigger');
        this.tabPanels = this.el.getElementsByClassName('js-tab-panel');
    
        if (this.tabTriggers.length === 0 || this.tabTriggers.length !== this.tabPanels.length) {
            return;
        }
    
        this._init(selectedIndex);
    }
    
    TabWidget.prototype._init = function (selectedIndex) {
    
        this.tabTriggersLength = this.tabTriggers.length;
        this.selectedTab = 0;
        this.prevSelectedTab = null;
        this.clickListener = this._clickEvent.bind(this);
        this.keydownListener = this._keydownEvent.bind(this);
        this.keys = {
            prev: 37,
            next: 39
        };
    
        for (var i = 0; i < this.tabTriggersLength; i++) {
            this.tabTriggers[i].index = i;
            this.tabTriggers[i].addEventListener('click', this.clickListener, false);
            this.tabTriggers[i].addEventListener('keydown', this.keydownListener, false);
    
            if (this.tabTriggers[i].classList.contains('is-selected')) {
                this.selectedTab = i;
            }
        }
    
        if (!isNaN(selectedIndex)) {
            this.selectedTab = selectedIndex < this.tabTriggersLength ? selectedIndex : this.tabTriggersLength - 1;
        }
    
        this.selectTab(this.selectedTab);
        this.el.classList.add('is-initialized');
    };
    
    TabWidget.prototype._clickEvent = function (e) {
    
        e.preventDefault();
    
        if (e.target.index === this.selectedTab) {
            return;
        }
    
        this.selectTab(e.target.index, true);
    };
    
    TabWidget.prototype._keydownEvent = function (e) {
    
        var targetIndex;
    
        if (e.keyCode === this.keys.prev || e.keyCode === this.keys.next) {
            e.preventDefault();
        }
        else {
            return;
        }
    
        if (e.keyCode === this.keys.prev && e.target.index > 0) {
            targetIndex = e.target.index - 1;
        }
        else if (e.keyCode === this.keys.next && e.target.index < this.tabTriggersLength - 1) {
            targetIndex = e.target.index + 1;
        }
        else {
            return;
        }
    
        this.selectTab(targetIndex, true);
    };
    
    TabWidget.prototype._show = function (index, userInvoked) {
    
        this.tabTriggers[index].classList.add('is-selected');
        this.tabTriggers[index].setAttribute('aria-selected', true);
        this.tabTriggers[index].setAttribute('tabindex', 0);
    
        this.tabPanels[index].classList.remove('is-hidden');
        this.tabPanels[index].setAttribute('aria-hidden', false);
        this.tabPanels[index].setAttribute('tabindex', 0);
    
        if (userInvoked) {
            this.tabTriggers[index].focus();
        }
    };
    
    TabWidget.prototype._hide = function (index) {
    
        this.tabTriggers[index].classList.remove('is-selected');
        this.tabTriggers[index].setAttribute('aria-selected', false);
        this.tabTriggers[index].setAttribute('tabindex', -1);
    
        this.tabPanels[index].classList.add('is-hidden');
        this.tabPanels[index].setAttribute('aria-hidden', true);
        this.tabPanels[index].setAttribute('tabindex', -1);
    };
    
    TabWidget.prototype.selectTab = function (index, userInvoked) {
    
        if (this.prevSelectedTab === null) {
            for (var i = 0; i < this.tabTriggersLength; i++) {
                if (i !== index) {
                    this._hide(i);
                }
            }
        }
        else {
            this._hide(this.selectedTab);
        }
    
        this.prevSelectedTab = this.selectedTab;
        this.selectedTab = index;
    
        this._show(this.selectedTab, userInvoked);
    };
    
    TabWidget.prototype.destroy = function () {
    
        for (var i = 0; i < this.tabTriggersLength; i++) {
            this.tabTriggers[i].classList.remove('is-selected');
            this.tabTriggers[i].removeAttribute('aria-selected');
            this.tabTriggers[i].removeAttribute('tabindex');
    
            this.tabPanels[i].classList.remove('is-hidden');
            this.tabPanels[i].removeAttribute('aria-hidden');
            this.tabPanels[i].removeAttribute('tabindex');
    
            this.tabTriggers[i].removeEventListener('click', this.clickListener, false);
            this.tabTriggers[i].removeEventListener('keydown', this.keydownListener, false);
    
            delete this.tabTriggers[i].index;
        }
    
        this.el.classList.remove('is-initialized');
    };
    
    new TabWidget(document.getElementsByClassName('js-tabs')[0]);
    
        
    }
    
    window.addEventListener('load', function(){ init();});
    
 

})(jQuery);