<?php
    $username = $_GET['username']; 
    if($username === 'hunger'){
       $ret = array('status'=>1, 'msg_type'=>'USERNAME_EXIST'); 
   }else{
    $ret = array('status'=>0); 
   }

    

    sleep(1); //模拟网络延迟
    echo json_encode($ret);