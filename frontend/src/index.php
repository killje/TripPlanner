<?php

if (is_file(substr($_SERVER['REQUEST_URI'], 1)) && $_SERVER['REQUEST_URI'] != "/index.php") {
    echo file_get_contents (substr($_SERVER['REQUEST_URI'], 1));
} else {
    echo file_get_contents('index.html');
}
