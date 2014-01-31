/**
 * Created by Katie Steinberg on 1/3/14.
 */

$(document).ready(function() {
    window.parent.Shadowbox.skin.dynamicResize(550,180);
    setTimeout(function(){
        window.parent.Shadowbox.close();
    },1400);
   
});