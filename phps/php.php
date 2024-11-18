<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ad = $_POST['ad'];
    $eposta = $_POST['eposta'];
    $telefon = $_POST['telefon'];
    $adres = $_POST['adres'];

    $to = "keremaydinguven@gmail.com"; // Siparişlerin gönderileceği e-posta
    $subject = "Yeni Sipariş: $ad";
    $message = "Ad Soyad: $ad\nE-posta: $eposta\nTelefon: $telefon\nAdres: $adres";
    $headers = "From: $eposta";

    if (mail($to, $subject, $message, $headers)) {
        echo "Siparişiniz başarıyla gönderildi.";
    } else {
        echo "Sipariş gönderilirken bir hata oluştu.";
    }
}
?>
