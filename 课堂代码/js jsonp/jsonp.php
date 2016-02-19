<?php
    $name = $_GET['name'];
    $cb = $_GET['callback'];
    
    echo $cb . '("' . $name . '")';