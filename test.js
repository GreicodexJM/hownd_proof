console.log("Script loaded");
if(null == window.scriptLoadedHowndProof) {
    function fn() {
        var col=document.getElementsByClassName("kid-birthday")[0].getElementsByClassName("block");
        for(var i =0;i<col.length;i++) {
            var e = col.item(e);
            if(0==e.getElementsByClassName("coupon_num").length) {
                var c=document.createElement("div"); 
                c.className="field is-floating-label"; 
                c.innerHTML='<label class="label">Coupon</label><div class="control is-clearfix coupon_num"><input type="text" id="coupon_number" autocomplete="on" required="required" class="input"></div>';
                e.append(c);
            }
        }
    }
    var a = document.getElementsByClassName('linkOverride');
    a[1].addEventListener('click',fn);
    fn();
    window.scriptLoadedHowndProof=true;
}