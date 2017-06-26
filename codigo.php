<?php require_once('conn.php'); ?>
<?php
$codigo = $_GET["codigo"];
$texto = "";

mysqli_select_db($enlace,"cores");
$resultado = mysqli_query($enlace,"SELECT codigo, asenta, municipio, estado, ciudad from codigos where codigo='". $codigo . "'");
if ($resultado) {
    while( $row = mysqli_fetch_row($resultado)){
        $texto = $texto . "<br>Código postal: " . $row[0] . "<br>" . "Asentamiento: " . $row[1] . "<br>" . "Municipio o delegación: " . $row[2] . "<br>" . "Estado: " . $row[3] . "<br>" . "Ciudad: " . $row[4] . "<br>";
    }
}
if (strlen($texto) == 0)
    echo "<input id=\"cod" . $_GET["user"] . "\" type=\"hidden\" value=\"N\" />";
else
    echo "<input id=\"cod" . $_GET["user"] . "\" type=\"hidden\" value=\"S\" />";
?>
