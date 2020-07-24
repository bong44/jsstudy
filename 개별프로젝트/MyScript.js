      var v_container = document.getElementById("container");
      var v_container2 = document.getElementById("container2");
      var v_itemList = [
        ["#","-------------------- 검색해주세요 ---------------------","#"]
        ,["W","웨이트 트레이닝1","./VideoChart.html?search=머리"]
        ,["W","웨이트 트레이닝2","./VideoChart.html?search=머"]
        ,["W","웨이트 트레이닝3","./VideoChart.html?search=쿠"]
      ];
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
        item[0].style.display = "flex";
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
      
      function f_itemFactory() {
        for (var i = 0; i < v_itemList.length; i++) {
          var v_tempA = document.createElement("a");
          v_tempA.setAttribute("href",v_itemList[i][2]);
          v_tempA.setAttribute("id","id_a");
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
      }


      f_itemFactory();

      var v_a = document.getElementById("id_a");
      v_a.addEventListener("click",function () {
        event.preventDefault();
        event.stopPropagation();
      });
      




      
      