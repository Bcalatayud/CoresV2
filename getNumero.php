<?php
$texto = "";
$enlace = mysqli_connect("localhost", "root", "root", "mydb");
//Se conecta a la BD, con Host:localhost, usuario: root, pass: root, a la BD "mybd"

if (!$enlace) {
	echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
    echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
    echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
    exit;
} //Se comprueba que la conexión sea exitosa
/*if ($enlace)
{
	echo "conexión exitosa";
}
*/

$resultado = mysqli_query($enlace,"SELECT COUNT(id) FROM LLAVES");
//Se realiza la busqueda en la BD, regresa un valor TRUE cuando el query fue exitoso. 
if ($resultado) {
    while($row = mysqli_fetch_row($resultado)){
        $texto = "" . $row[0] + 1;
    } //Obtiene una fila de resultados como un array enumerado
} else {
    $texto = "00001";
}
if (strlen($texto) < 5)
    for ($i = strlen($texto); $i < 5; $i++)
        $texto = "0" . $texto;
$query = "INSERT INTO LLAVES VALUES('" . $texto . "');"; //Se escribe el valor calculado a la BD
$retval = mysqli_query($enlace,$query);
echo "$texto";
?>
