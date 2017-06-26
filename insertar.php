<?php require_once('conn.php'); ?>
<?php
//Primero leer numero de registros, dos variables con los id de los usuarios (manejados en memoria) y de la conversacion
$numero = intval($_POST["num"]);
$lista = $_POST["caracteristicas"];
$persona = intval($_POST["personalUser"]);

mysqli_select_db($enlace,"cores");
$resultado = mysqli_query($enlace,"SELECT * FROM persona");
$id_usuario = mysqli_num_rows($resultado) + 1;
$resultado = mysqli_query($enlace,"SELECT * FROM conversacion");
$id_conversacion = mysqli_num_rows($resultado) + 1;

$texto = str_replace("'", "\'", $_POST["conversacion3"]);
$texto = str_replace("\"", "\\\"", $texto);

mysqli_query("SET NAMES utf8");

$query = "INSERT INTO conversacion (idCONVERSACION, Conversacion) VALUES(" . $id_conversacion . ", '" . $texto . "');";
$retval = mysqli_query($enlace,$query);
   
   if(! $retval )
   {
      die('Could not enter data: ' . mysqli_error());
   }

for ($i = 0; $i < $numero; $i++) {
    $sexo = getCaracteristica(1, $lista, $i);
    $edad = getCaracteristica(2, $lista, $i);
    $prof = getCaracteristica(3, $lista, $i);
    $orien = getCaracteristica(4, $lista, $i);
    $lugar = getCaracteristica(5, $lista, $i);
    $materna = getCaracteristica(6, $lista, $i);
    $grado  = getCaracteristica(7, $lista, $i);
    $relacion = getCaracteristica(8, $lista, $i);
    $texto = str_replace("'", "\'", getConversacion($_POST["conversacion2"], $i+1));
    $texto = str_replace("\"", "\\\"", $texto);
    if($i == $persona)
        $query = "INSERT INTO persona VALUES (" . ($id_usuario + $i) . ", '" . $sexo . "', " . $edad . ", '" . $prof . "', '" . $orien . "', '" . $lugar . "', '" . $materna . "', '" . $grado . "', '" . $relacion . "', '" . $texto . "', " . $id_conversacion . ", '" . $_POST["unic"] . "');";
    else
        $query = "INSERT INTO persona VALUES (" . ($id_usuario + $i) . ", '" . $sexo . "', " . $edad . ", '" . $prof . "', '" . $orien . "', '" . $lugar . "', '" . $materna . "', '" . $grado . "', '" . $relacion . "', '" . $texto . "', " . $id_conversacion . ", 'nulo');";
    $retval = mysqli_query($enlace,$query);
   if(! $retval )
   {
      die('Could not enter data: ' . mysqli_error());
   }
}
$resultado = mysqli_query($enlace,"SELECT numero FROM CONTADOR WHERE id=" . $_POST["iduser"]);
if($resultado) {
    if (mysqli_num_rows($resultado) != 0){
        $row = mysqli_fetch_row($resultado);
        $actual = $row[0] + 1;
        $query = "UPDATE CONTADOR SET Numero=" . $actual . " WHERE id=" . $_POST["iduser"] . ";";
        $retval = mysqli_query($enlace,$query);
       
       if(! $retval )
       {
          die('Could not enter data: ' . mysqli_error());
       }
   } else {
        $query = "INSERT INTO CONTADOR VALUES(" . $_POST["iduser"] . ", 1);";
        $retval = mysqli_query($enlace,$query);
       
       if(! $retval )
       {
          die('Could not enter data: ' . mysqli_error());
       }
   }
}
echo $persona . "<br>";
echo "Se ha insertado correctamente los datos a la base de datos<br> Espere mientras se redirecciona";
header('Location: http://www.corpus.unam.mx/cores/index.html');

function getConversacion ($lista, $usuario) {
    $contador = 0;
    $flag = 0;
    $regresa = "";
    $valida = true;
    $i = 0;
    while ($i < strlen($lista) and $valida) {
        if ($lista[$i] == "@" and $lista[$i + 1] == "+" and $lista[$i + 2] == "=" and $lista[$i + 3] == ";") {
            $contador += 1;
            if ($contador == $usuario) {
                $regresa = substr($lista, $flag, $i-$flag);
                $valida = false;
            } else {
                $flag = $i + 5;
            }
        }
        $i = $i + 1;
    }
    return $regresa;
}

function getCaracteristica($num, $lista, $avance) {
    $contador = 0;
    $flag = 0;
    $regresa = "";
    $valida = true;
    $i = 0;
    while ($i < strlen($lista) and $valida) {
        if ($lista[$i] == ";") {
            $contador += 1;
            if ($contador == ($num + ($avance*8))) {
                $regresa = substr($lista, $flag, $i-$flag);
                $valida = false;
            } else {
                $flag = $i + 1;
            }
        }
        $i +=1;
    }
    return $regresa;
}
?>
