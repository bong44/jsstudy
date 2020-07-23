var v_container = document.getElementById("container");
        // window.onresize=function(){
        //     console.log("넓이",window.innerWidth);
        //     console.log("높이",window.innerHeight);
        // } 
        function filter(){

        var value, name, item, i;

        value = document.getElementById("value").value.toUpperCase();
        item = document.getElementsByClassName("item");

        for(i=0;i<item.length;i++){
          name = item[i].getElementsByClassName("name");
          if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
            item[i].style.display = "flex";
          }else{
            item[i].style.display = "none";
          }
        }
      }
      
      var v_imgs = document.getElementById("imgsContainer");
      var v_img = document.getElementById("id_img");
      var op = 0.1;
      var tempOp = 10;
      var i = 1;
      function moveImgs() {
          if (tempOp >= 10) {
              op = -op;
            }
          if (tempOp <= 0) {
              op = -op;
              i++;
              v_img.src = "tennisimgs/racket"+i+".jpg";
              if(i==3){
                  i=0;
              }
            }
            tempOp += op;
          v_imgs.style.opacity = tempOp*0.1;
          setTimeout(moveImgs,20);
        //   console.log(tempOp*0.1);
      }
      moveImgs();
      
      var v_itemList = [
        ["T","테니스 포핸드","#"],["T","테니스 백핸드","#"],["T","테니스 서비스","#"],["T","테니스 발리","#"],["T","테니스 슬라이스","#"],["T","테니스 리턴","#"]
        ,["T","테니스 스탭","#"]
      ];
      var v_container2 = document.getElementById("container2");
      for (var i = 0; i < v_itemList.length; i++) {
        var v_tempA = document.createElement("a");
        v_tempA.setAttribute("href",v_itemList[i][2]);
        v_tempA.setAttribute("style","text-decoration:none");
        var v_tempDisp = document.createElement("div");
        v_tempDisp.setAttribute("class","item");
        var v_tempSpan1 = document.createElement("span");
        v_tempSpan1.setAttribute("class","icon");
        v_tempSpan1.innerHTML = v_itemList[i][0];
        var v_tempSpan2 = document.createElement("span");
        v_tempSpan2.setAttribute("class","name");
        v_tempSpan2.innerHTML = v_itemList[i][1];
        v_tempDisp.appendChild(v_tempSpan1);
        v_tempDisp.appendChild(v_tempSpan2);
        v_tempA.appendChild(v_tempDisp);
        v_container2.appendChild(v_tempA);
      }







      
      