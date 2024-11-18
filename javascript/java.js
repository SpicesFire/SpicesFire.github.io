const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_password'
    }
});

const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'recipient_email@example.com',
    subject: 'Yeni Sipariş',
    text: 'Sipariş detayları...'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('E-posta gönderildi: ' + info.response);
    }
});
document.getElementById('orderForm').addEventListener('submit', function(event) {
    // Formu gönderme işlemi başlatıldı
    let ad = document.getElementById('ad').value;
    let eposta = document.getElementById('eposta').value;
    let telefon = document.getElementById('telefon').value;
    let adres = document.getElementById('adres').value;

    // Her alanı kontrol et
    if (!ad || !eposta || !telefon || !adres) {
        event.preventDefault();  // Formun gönderilmesini engelle
        alert('Lütfen tüm alanları doldurun.');  // Uyarı mesajı göster
    }
});