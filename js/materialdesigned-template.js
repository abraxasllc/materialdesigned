/*! material-designed v3.1.7 (http://materialdesigned.tumblr.com)
** Davide Di Criscito <davide.dicriscito@gmail.com> (http://github.com/dcdeiv)
** (c) 2014-2015 Licensed under GPL-2.0
*/
/*! simpler-sidebar v1.4.0 (https://dcdeiv.github.io/simpler-sidebar)
** Davide Di Criscito <davide.dicriscito@gmail.com> (http://github.com/dcdeiv)
** (c) 2015-2015 Licensed under GPL-2.0
*/
!function(a){a.fn.simplerSidebar=function(b){var c=a.extend(!0,a.fn.simplerSidebar.settings,b);return this.each(function(){var b,d,e,f,g,h,i=c.attr,j=a(this),k=a(c.opener),l=c.sidebar.closingLinks,m=c.animation.duration,n=c.sidebar.width,o=c.sidebar.gap,p=n+o,q=a(window).width(),r={},s={},t=function(){a("body, html").css("overflow","hidden")},u=function(){a("body, html").css("overflow","auto")},v={duration:m,easing:c.animation.easing,complete:t},w={duration:m,easing:c.animation.easing,complete:u},x=function(){j.animate(r,v).attr("data-"+i,"active"),A.fadeIn(m)},y=function(){j.animate(s,w).attr("data-"+i,"disabled"),A.fadeOut(m)},z=function(){var a=j.attr("data-"+i),c=j.width();s[b]=-c,"active"===a&&y()},A=a("<div>").attr("data-"+i,"mask");void 0===c.sidebar.align||"right"===c.sidebar.align?b="right":"left"===c.sidebar.align&&(b="left"),d=p>q?q-o:n,e={position:"fixed",top:c.top,bottom:0,width:d},e[b]=-d,r[b]=0,f=a.extend(!0,e,c.sidebar.css),j.css(f).attr("data-"+i,"disabled"),g={position:"fixed",top:c.top,right:0,bottom:0,left:0,zIndex:c.sidebar.css.zIndex-1,display:"none"},h=a.extend(!0,g,c.mask.css),!0===c.mask.display&&A.appendTo("body").css(h),k.click(function(){var a=j.attr("data-"+i),c=j.width();s[b]=-c,"disabled"===a?x():"active"===a&&y()}),A.click(z),j.on("click",l,z),a(window).resize(function(){var c,d,e=j.attr("data-"+i),f=a(window).width();c=p>f?f-o:n,d={width:c},"disabled"===e?(d[b]=-c,j.css(d)):"active"===e&&j.css(d)})})},a.fn.simplerSidebar.settings={attr:"simplersidebar",top:0,animation:{duration:500,easing:"swing"},sidebar:{width:300,gap:64,closingLinks:"a",css:{zIndex:3e3}},mask:{display:!0,css:{backgroundColor:"black",opacity:.5,filter:"Alpha(opacity=50)"}}}}(jQuery);
(function($) {
    $(document).ready(function() {
        var fixheight, tcontrols, cHeight, tcHeight,
            controls = $('#tumblr_controls'),
            toolbar = $('.toolbar-fixed');

        controls.wrap('<div id="tmblrcontrols">');

        tcontrols = $('#tmblrcontrols');

        fixHeight = function() {
            cHeight = parseInt(controls.attr('height'));

            tcontrols.css({
                height: cHeight + 2,
                minHeight: 28,
                position: 'fixed',
                top:0,
                left: 0,
                right: 0,
                background: 'rgba(0, 0, 0, 0.2) none repeat scroll 0% 0%',
            });

            tcHeight = tcontrols.height();

            toolbar.css('top', tcHeight);
        };

        $(window).load(function() {
            fixHeight();
            setTimeout(fixHeight, 100);
        });

        fixHeight();
    });
})(jQuery);

(function($){
    $(document).ready(function(){
        var toggleSecondaryTitle,
            secondaryTitle = $('.toggle-title-secondary'),
            header = $('.toolbar-header header h1');

        toggleSecondaryTitle = function() {
            var st = $(window).scrollTop(),
                thOffset = header.offset().top,
                thHeight = header.height(),
                thOffsetBottom = thOffset + thHeight;

            if (st >= thOffsetBottom) {
                secondaryTitle.fadeIn('fast');
            } else {
                secondaryTitle.fadeOut('fast');
            }
        };

        toggleSecondaryTitle();

        $(window)
            .scroll(function() {
                toggleSecondaryTitle();
            })
            .resize(function(){
                toggleSecondaryTitle();
            });
    });
})(jQuery);
