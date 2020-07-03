// alert(document.getElementById("id_test").innerHTML); //?
//head 밑에 있어서 body에 있는 것들에 접근을 못해서 값을 못 불러옴
//순서에 영향받기 때문에 편하게 쓰라고 만들어준 이벤트 window.onload!!!
// onload이벤트는 page 로딩이 끝난 다음에 실행됨. 그래서 다 가져올 수 있는거임
// 약가 프라퍼티랑 비슷한 느낌인듯
var v_test;
window.onload = function(){
    // alert(document.getElementById("id_test").innerHTML); //?
    v_test = document.getElementById("id_test");
} //으마무시하게 자주쓰는 엄척 중요!!!!!!! (</html> 까지 진행된 다음에..)

window.onresize = function(){ //window 사이즈가 변경되었을 때 자동 발생

    // console.log("폭"+window.innerWidth);
    // console.log("높이"+window.innerHeight);

    var v_wW =window.innerWidth;
    var v_hH =window.innerHeight;
    
    v_test.style.left = parseInt(v_wW/2) - 75 +"px";
    v_test.style.top = parseInt(v_hH/2) - 75 +"px";

} //동적프로그래밍에서 중요할 듯

// window.onresize = 에 꼭 바로 익명 함수가 안 와도 되고 위에 함수를 변수에 넣어서 만들고 이자리에 넣어줘도 댐

var f_myFunc = function(msg){
    alert(msg);
}

