	$(document).ready(function(){
				rotate();   //图片旋转轮播
				introducer();  //下部图片遮罩
				carousel();    //banner图片轮播
				animate();    //城市功能配套的特效
			
				   
			});
			function rotate(){
				var cc5 = $('.card-container-5');
				cc5.click(function(){
				  var firstCard = cc5.children('.card').first(),
				      cssRoll = {
				        transform: 'rotate(-45deg)',
				        opacity:0
				      };
				  firstCard.css(cssRoll);
				  setTimeout(function(){
				    cc5.append(firstCard);
				    firstCard.attr('style','');
				  },300);
				});
			}
			
			function introducer(){
				var i=0
				$(".square").click(function(){
					i++;
					var b=i%2;
					if(b==1){
						$(this).parent().find('div.zhezhao').css("display","block");
					} 
					else{
						$(this).parent().find('div.zhezhao').css("display","none");
					} 
					
				});
			}
			function carousel(){
				var time=0;
				$("body").everyTime("2s",function (){
					$(".photo li").css("display","none");
					$(".photo li").eq(time).css("display","block");
					time++;
					if(time===6){
						time=0;
					}
				});
			}
			function animate(){
				if( ( navigator.appName != "Microsoft Internet Explorer" || isChrome() ) && (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) == null )
				{
				    var dir;
				    var beforeTop=$(window).scrollTop();   
				    $(window).bind("scroll",function(){  
				            afterTop = $(window).scrollTop();               
				            if( afterTop > beforeTop ){//下滚   
								dir="down";
				            }else{//上滚  
								dir="up";
				            }  
				            beforeTop=afterTop;
							var Wh1=$(window).scrollTop();
							var Wh2=Wh1+$(window).height();
							$(".show-list,.parts-list,.intr-list,.more").each(function(){
								var Oh1=$(this).offset().top;
								var Oh2=Oh1+$(this).outerHeight(true); 
								var ifshow=$(this).attr("ifshow");
								var paraIn=$(this).attr("paraIn");
								var paraOut=$(this).attr("paraOut");
								if( dir=="down" && Oh1<Wh2 && Oh1>Wh1 && ifshow=="0" ){
									$(this).attr("ifshow","1").removeClass(paraOut).addClass(paraIn);
									if( $(this).attr("iftimetree") == "true" ){
										$(this).next().removeClass("h1").addClass("s1");
									}
								}else if( dir=="up" && Oh2>Wh2 && ifshow=="1" ){
									$(this).attr("ifshow","0").removeClass(paraIn).addClass(paraOut);
									if( $(this).attr("iftimetree") == "true" ){
										$(this).next().removeClass("s1").addClass("h1");
									}
								}
							});
					});
					
				}
			}

 $(document).ready(function(){ 
 	$('#myCarousel').carousel({interval:3000});//每隔5秒自动轮播 
 }); 




				 function AddFavorite(sURL, sTitle) {
					    try {
					    	window.external.addFavorite(sURL, sTitle);
					    }
					    catch (e) {
						    try {
						    	window.sidebar.addPanel(sTitle, sURL, "");
						    }
						    catch (e) {
						    	alert("加入收藏失败，请使用Ctrl+D进行添加");
						    }
					    }
					}
//				    加入收藏            END
				         function SetHome(obj, vrl) {
						    try {
						    obj.style.behavior = 'url(#default#homepage)'; obj.setHomePage(vrl);
						    }
						    catch (e) {
						    if (window.netscape) {
						    try {
						    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
						    }
						    catch (e) {
						    alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
						    }
						    var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
						    prefs.setCharPref('browser.startup.homepage', vrl);
						    }
						    }
						}
//				    设为首页                  END