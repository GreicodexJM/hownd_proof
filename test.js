console.log("Script loaded");
if(null == window.scriptLoadedHowndProof) {
    var col=document.getElementsByClassName("kid-birthday")[0].getElementsByClassName("block");
    for(var i =0;i<col.length;i++) {
        var e = col.item(e);
        var c=document.createElement("div"); 
        c.className="field is-floating-label"; 
        c.innerHTML='<label class="label">Coupon</label><div class="control is-clearfix"><input type="text" id="coupon_number" autocomplete="on" required="required" class="input"></div>';
        e.append(c);
    }
    window.scriptLoadedHowndProof=true;
}