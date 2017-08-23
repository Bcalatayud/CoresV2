<?php
//Primero leer numero de registros, dos variables con los id de los usuarios (manejados en memoria) y de la conversacion
$enlace = mysqli_connect("localhost", "root", "root", "cores");
//$texto = "Hola Berenice<br>";
//echo "$texto";
$numero = intval($_POST["num"]);
$lista = $_POST["caracteristicas"];
$persona = intval($_POST["personalUser"]);

$u1 = $_POST["u1"];
$u2 = $_POST["u2"];
$s1 = $_POST["s1"];
$s2 = $_POST["s2"];
$e1 = $_POST["e1"];
$e2 = $_POST["e2"];
$p1 = $_POST["p1"];
$p2 = $_POST["p2"];
$o1 = $_POST["o1"];
$o2 = $_POST["o2"];
$c1 = $_POST["c1"];
$c2 = $_POST["c2"];
$l1 = $_POST["l1"];
$l2 = $_POST["l2"];
$sh1 = $_POST["sh1"];
$sh2 = $_POST["sh2"];
$pa1 = $_POST["pa1"];
$pa2 = $_POST["pa2"];
$aux = $_POST["aux"];

$u = array($u1,$u2);
$s = array($s1,$s2);
$e = array($e1,$e2);
$p = array($p1,$p2);
$o = array($o1,$o2);
$c = array($c1,$c2);
$l = array($l1,$l2);
$sh = array($sh1,$sh2);
$pa = array($pa1,$pa2);

echo "el id de conversación es: $aux<br>";

for($i=0;$i<2;$i++){
	echo "el usuario  $i  es:  $u[$i]<br>"; 
	echo "su sexo es: $s[$i]<br>";
	echo "su edad es: $e[$i]<br>";
	echo "su profesion es: $p[$i]<br>";
	echo "su orientación es: $o[$i]<br>";
	echo "su CP es: $c[$i]<br>";
	echo "su lengua es: $l[$i]<br>";
	echo "su escolaridad es: $sh[$i]<br>";
	echo "su parientesco es: $pa[$i]<br>";
	echo "<br><br>";
}

if (!$enlace) {
	echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
    echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
    echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

//echo "el número es: $numero <br>";
//echo "La lista es:  $lista <br>";
//echo "La persona es: $persona <br>";
//echo "El usuario uno es: $u1 <br>";
//echo "El usuario dos es: $u[1]<br>";

$resultado = mysqli_query($enlace,"SELECT * FROM persona");
echo "El resultado1 es: $resultado <br>";
$id_usuario = mysqli_num_rows($resultado) + 1;
$resultado = mysqli_query($enlace,"SELECT * FROM conversacion");
echo "El resultado2 es: $resultado <br>";
$id_conversacion = mysqli_num_rows($resultado) + 1;

//$texto = str_replace("'", "\'", $_POST["conversacion3"]);
//$texto = str_replace("\"", "\\\"", $texto);
$texto = "Hola Berenice";
mysqli_query("SET NAMES utf8");

echo "Texto es: $texto <br>";
//debbug

$query = "INSERT INTO conversacion (idCONVERSACION, Conversacion) VALUES(" . $id_conversacion . ", '" . $texto . "')";
$retval = mysqli_query($enlace,$query);
   
   if(!$retval )
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
