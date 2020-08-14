<?php
    // file_get_contents 함수는 url내용을 읽는 함수, 자바로 만들면 조금 길어짐
    // 보통 자바의 URL 클래스를 이용해서 만듬
//     $content = file_get_contents("https://naver.com");
//     echo $content;
    $fileContents= file_get_contents("https://www.youtube.com/results?search_query=%EC%8A%A4%EB%AF%B8%EC%8A%A4");
    // $fileContents= file_get_contents("https://news.google.com/rss/search?q=".$_GET["search"]."&hl=ko&gl=KR&ceid=KR:ko");
    // xml문자열 -> xml문서 -> JSON
    // $simpleXml = simplexml_load_string($fileContents);
    // $json = json_encode($simpleXml);

    echo $fileContents;
// ?>