<?php
    //php는 변수 선언때 $ 사용, 문자열 더하기는 '.' 점을 사용
    $aidi = $_GET["nm_aidi"];     //GET방식으로 넘어오는 값을 받음
    $aidi2 = $_GET["nm_secaidi"];
    // $aidi = $_POST["nm_aidi"];     //POST방식으로 넘어오는 값을 받음
    echo "<h1>".$aidi.$aidi2."님 안녕하세용?</h1>";
?>