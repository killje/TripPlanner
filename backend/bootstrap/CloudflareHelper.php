<?php
/**
 * Created by PhpStorm.
 * User: soelm
 * Date: 24-9-2018
 * Time: 14:01
 */

if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
    $_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
}
