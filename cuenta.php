<?php require_once('conn.php'); ?>
<?php
mysqli_select_db($enlace,"cores");
$resultado = mysqli_query($enlace,"SELECT * FROM contador;");
if ($resultado) {
            while( $row = mysqli_fetch_row($resultado)){
                echo "ID: " . $row[0] . " Número de conversaciones: " . $row[1] . "<br>";
            }
        }
?>
