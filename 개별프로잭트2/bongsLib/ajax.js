

    //selfmade jQuery
    (function () { 
        var myFactory = function (p_selector) { 
            return new MyClass(p_selector);
        }
        
        var MyClass = function (p_selector) {
            var v_elems = document.querySelectorAll(p_selector); 
            this.length = v_elems.length;
            for (var i = 0; i < v_elems.length; i++) {
                this[i] = v_elems[i];
            }
        }
        window.$ = myFactory; 
        myFactory.fn = MyClass.prototype;
    })(); 
    
    //jQueryAJAX
    $.fn.ajax = function (p_json) {
        var v_ajax = new XMLHttpRequest();
        v_ajax.open(p_json.method, p_json.url, true);
        v_ajax.send();
        v_ajax.onreadystatechange = function () {
            if (v_ajax.readyState == 4 && v_ajax.status == 200) {
                p_json.success(v_ajax.responseText);
            }
        }
    }

    //jQueryAJAX 설명서
    // $.ajax({
    //     "method":"메소드",
    //     "url":"URL",
    //     "success":function (p_data) {
    //         //가져온 데이터에 대한 액션
    //     }
    // });