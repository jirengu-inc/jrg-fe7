<?php
    $start = $_GET['start'];
    $len = $_GET['len'];
    $cb = $_GET['callback'];
    $items = array();
    

    for($i = 0; $i < $len; $i++){
        array_push($items, '内容' . ($start+$i));
    }
    $ret = array('status'=>'success', 'items'=>$items);
    echo $cb . '&&' . $cb . '(' . json_encode($ret) . ')';
    