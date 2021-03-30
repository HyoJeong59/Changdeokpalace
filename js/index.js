$(function(){
  // --- menu
  $(".submenu").hide();
  $(".hamburger").click(function(){
    if($(this).hasClass("ham_active")) {
      $(".submenu").slideUp(500);
      $(this).removeClass("ham_active");
    } else {
      $(this).addClass("ham_active");
      $(".submenu").slideDown(500);
    }
  });

  $(".menu, .submenu").hover(function(){
    $(".submenu").stop().slideDown(500);
    $(".hamburger").addClass("ham_active");
  }, function(){
    $(".submenu").stop().slideUp(500);
    $(".hamburger").removeClass("ham_active");
  });

  $(".submenu > ul > li").hover(function(){
    let n = $(this).index();
    $(".menu li").eq(n).addClass("header_on");     
  }, function(){
    let n = $(this).index();
    $(".menu li").eq(n).removeClass("header_on");
  });

  // --- video slide
  function video_next() {
    $(".video_list ul").animate({"marginLeft":"-802px"}, function(){
      $(".video_list ul li").eq(0).appendTo(".video_list ul");
      $(".video_list ul").css({"marginLeft":"0"});
      
      let video_next_img = $(".video_list ul li").eq(1).find("iframe").attr("src").substr(30, 11);
      let video_prev_img = $(".video_list ul li").eq(2).find("iframe").attr("src").substr(30, 11);
      $(".video_next div").css({"background-image":"url(https://img.youtube.com/vi/" + video_next_img + "/0.jpg)"});
      $(".video_prev div").css({"background-image":"url(https://img.youtube.com/vi/" + video_prev_img + "/0.jpg)"});
    });
  }

  function video_prev() {
    $(".video_list ul li").eq(2).prependTo(".video_list ul");
    $(".video_list ul").css({"marginLeft":"-802px"});
    $(".video_list ul").animate({"marginLeft":"0"});

    let video_next_img = $(".video_list ul li").eq(1).find("iframe").attr("src").substr(30, 11);
    let video_prev_img = $(".video_list ul li").eq(2).find("iframe").attr("src").substr(30, 11);
    $(".video_next div").css({"background-image":"url(https://img.youtube.com/vi/" + video_next_img + "/0.jpg)"});
    $(".video_prev div").css({"background-image":"url(https://img.youtube.com/vi/" + video_prev_img + "/0.jpg)"});
  }

  $(".video_next").click(function(){
    video_next();
  });

  $(".video_prev").click(function(){
    video_prev();
  });

  // --- map
  $(".map_list li").eq(0).addClass("map_on");
  $(".map_txt li").hide(0);
  $(".map_txt li").eq(0).show(0);
  $(".map_img img").hide(0);
  $(".map_img img").eq(0).show(0);

  $(".map_royalpalace").click(function(){
    $(".map_list li").removeClass("map_on");
    $(this).addClass("map_on");
    $(".map_txt li").hide(0);
    $(".map_txt li").eq(0).show(0);
    $(".map_img img").hide(0);
    $(".map_img img").eq(0).show(0);
  });

  $(".map_backgarden").click(function(){
    $(".map_list li").removeClass("map_on");
    $(this).addClass("map_on");
    $(".map_txt li").hide(0);
    $(".map_txt li").eq(1).show(0);
    $(".map_img img").hide(0);
    $(".map_img img").eq(1).show(0);
  });

  // --- site
  function site_next() {
    $(".site_list").animate({"marginLeft":"-200px"}, function(){
      $(".site_list li").eq(0).appendTo(".site_list");
      $(".site_list").css({"marginLeft":"0"});
    });
  }

  function site_prev() {
    $(".site_list li").eq(8).prependTo(".site_list");
    $(".site_list").css({"marginLeft":"-200px"});
    $(".site_list").animate({"marginLeft":"0"});
  }

  $(".site_next").click(function(){
    site_next();
  });

  $(".site_prev").click(function(){
    site_prev();
  });

  var interval = setInterval(site_next,4500);

  $(".site_wrap").hover(function(){
    clearInterval(interval);
  }, function(){
    interval = setInterval(site_next,4500);
  });

});