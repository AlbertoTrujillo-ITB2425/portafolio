<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $mensaje = $_POST['mensaje'];

    $destinatario = "atrumin16@gmail.com";
    $asunto = "Nuevo mensaje de contacto";
    $cuerpo = "Nombre: " . $nombre . "\n";
    $cuerpo .= "Email: " . $email . "\n";
    $cuerpo .= "Teléfono: " . $telefono . "\n";
    $cuerpo .= "Mensaje: " . $mensaje;

    mail($destinatario, $asunto, $cuerpo);
    echo "Mensaje enviado correctamente.";
}
?>