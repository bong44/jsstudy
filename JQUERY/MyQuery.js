(function () {
    function factory(p_중계) {
        return new mydom(p_중계);
    }

    var mydom = function (p_selector) {
        var v_elems = document.querySelectorAll(p_selector);
        this.length = v_elems.length;
        for (var i = 0; i < this.length; i++) {
            this[i] = v_elems[i];
        }
        return this;
    }

    //이 부분 좀 잘 기억해야할 듯
    window.$ = factory;
    factory.fn = mydom.prototype;
    // mydom.prototype.함수이름 = function(){...}
    // 프로토타입 선언 하는 방식 기본적으로 기억!
    // ===========!!===========
})();

$.fn.eq = function (p_index) {
    return this(p_index);
}

// console.log($('body')[0].innerHTML);

// $.fn.attr = function (p_attr, p_val) {
//     for (var i = 0; i < this.length; i++) {
//         this[i].setAttribute(p_attr, p_val);
//     }
//     return this;
// }

/* 자바스크립트에는 오버로딩이 없음 */
$.fn.attr = function(p_attr,p_callback){
    var v_firstType=typeof(p_attr);
    var v_secondType=typeof(p_callback);
    //조건문으로 오버로딩을 극복
    if(v_firstType=="string" && v_secondType == "function"){
        for(var i=0; i<this.length; i++){
            var p_val = this[i].getAttribute(p_attr);
            this[i].setAttribute(p_attr,p_callback.call(this[i],i,p_val))
        }    
    //조건문으로 오버로딩을 극복
    }else if(v_firstType == "object" && v_secondType == "undefined"){
        for(var i=0; i<this.length; i++){
            //json의 key값 뽑아내서 값 주기
            for(var v_attr in p_attr){
                this[i].setAttribute(v_attr,p_attr[v_attr]);
            }
        }
    }
    return this;
}
// $.fn.attr = function (p_json) {
//     for (var i = 0; i < this.length; i++) {
//         for (var v_attr in p_json) {
//             console.log("ppp",v_attr);
//             this[i].setAttribute(v_attr, p_json[v_attr]);
//         }
//     }
    // this[i].setAttribute(p_json);
    return this;
}