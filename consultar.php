<?php require_once('conn.php'); ?>
<html lang="en-ES">
 <head>
        <meta charset="UTF-8">        <title>CORES</title>
        <script type="text/javascript" src="jquery.js"></script>
        <script type="text/javascript" src="funciones.js"></script>
        <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/foundation.css" />
    <script src="js/vendor/modernizr.js"></script>
    </head>
<body>
<nav class="top-bar" data-topbar>
          <ul class="title-area">
             
            <li class="name">
              <h1>
                <a href="http://www.corpus.unam.mx/cores/index.html">
                  CORES
                </a>
              </h1>
            </li>
            <li class="toggle-topbar menu-icon"><a href="#"><span>menu</span></a></li>
          </ul>
       
          <section class="top-bar-section">
             
            
          </section>
        </nav>
        
        <div class="row">

<?php
$numero = intval($_POST["num"]);
$tipo = intval($_POST["tip"]);
$lista = $_POST["cadena"];
$texto = "";
$final = "";
mysqli_select_db($enlace , "cores");
$prueba_tabla = "<table>";
switch ($tipo) {
    case 1:
        $query = getQuery(0, false, $lista);
        $resultado = mysqli_query($query);
        $clave = "";
        $conversaciones = array();
        if ($resultado) {
            while( $row = mysqli_fetch_row($resultado)){
                $texto = "<div class=\"large-6 columns\"><ol>";
                if(strcmp($clave, $row[11]) != 0 or strcmp("nulo", $row[11]) == 0){
                    $texto = $texto . "<li>" . "Sexo: " . $row[1] . "<br>Edad: " . $row[2] . "<br>Profesión: " . $row[3] . "<br>Orientación sexual: " . $row[4] . "<br>Residencia: " . $row[5] . "<br>Lengua Materna: " . $row[6] . "<br>Grado de Instrucción: " . $row[7] . "<br>Relación: " . $row[8] . "<br></li>";
                    array_push($conversaciones, generarPila($row[9] . "@+;;", true));
                }
                $clave = $row[11];
                $consulta = mysqli_query("SELECT Conversacion from conversacion WHERE idCONVERSACION = " . $row[10] . ";");
                $row2 = mysqli_fetch_row($consulta);
                $texto = $texto . "Conversacion completa: " . $row2[0] . "<br></div>";
                array_push($conversaciones, generarPila($row2[0], false));
                $consulta = mysqli_query("SELECT texto from persona WHERE CONVERSACION_idCONVERSACION = " . $row[10] . " AND idPERSONA != " . $row[0] . ";");
                $row2 = mysqli_fetch_row($consulta);
                array_push($conversaciones, generarPila($row2[0], true));
                $final = $final . $texto;
                $texto = "";
            $todos = count($conversaciones[1]) - 1;
            try{
            for($i = $todos; $i > 0; $i--){
                
                $prueba_tabla .= "<tr>";
                if ($conversaciones[0][count($conversaciones[0]-1)] == $conversaciones[1][$i]){
                    $prueba_tabla .= "<td>" . $conversaciones[1][$i] . "</td><td>*</td>";
                    array_pop($conversaciones[0][count($conversaciones[0]-1)]);
                } else {

                    if ($conversaciones[2][count($conversaciones[2]-1)] == $conversaciones[1][$i]){
                        $prueba_tabla .= "<td>*</td><td>" . $conversaciones[1][$i] . "</td>";
                        array_pop($conversaciones[2][count($conversaciones[2]-1)]);
                    }

                }
                $prueba_tabla .= "</tr>";
                
            }} catch (Exception $e) {
    echo 'Excepción capturada: ',  $e->getMessage(), "\n";
}
            $prueba_tabla .= "</table>";
            }
        }
        break;
    case 2:
        $query = getQuery(0, false, $lista);
        $resultado = mysqli_query($query);
        $clave = "";
        if ($resultado) {
            while( $row = mysqli_fetch_row($resultado)){
                echo "<!--**************************************************************-->";
                if(strcmp($clave, $row[11]) != 0 or strcmp("nulo", $row[11]) == 0){
                    $texto = "<div class=\"large-6 columns\">" . $texto . "Sexo: " . $row[1] . "<br>Edad: " . $row[2] . "<br>Profesión: " . $row[3] . "<br>Orientación sexual: " . $row[4] . "<br>Residencia: " . $row[5] . "<br>Lengua Materna: " . $row[6] . "<br>Grado de Instrucción: " . $row[7] . "<br>Relación: " . $row[8] . "<br>";
                }
                $clave = $row[11];
                $texto = $texto . "Lo que dijo: " . str_replace("@+;;", "RESPUESTA", $row[9]) . "<br></div>";
                                $final = $final . $texto;
                $texto = "";

            }
        }
        break;
    case 3:
        $query = getQuery(0, true, $lista) . ";";
        $resultado = mysqli_query($query);
        $aux = "";
        $validar = true;
        if ($resultado) {
            while( $row = mysqli_fetch_row($resultado)){
                $texto = "<div class=\"large-6 columns\">" . $texto . "<br>Sexo: " . $row[1] . "<br>Edad: " . $row[2] . "<br>Profesión: " . $row[3] . "<br>Orientación sexual: " . $row[4] . "<br>Residencia: " . $row[5] . "<br>Lengua Materna: " . $row[6] . "<br>Grado de Instrucción: " . $row[7] . "<br>Relación: " . $row[8] . "<br>";
                $aux = "@" . $row[0] . "@";
                //$texto = $texto . "Lo que dijo: " . str_replace("@+;;", "RESPUESTA", $row[9]) . "<br>";
                $i = 1;
                while ($i < $numero and $validar) {
                    $query = getQuery($i, true, $lista) . " AND CONVERSACION_idCONVERSACION = " . $row[10];
                    $resultado2 = mysqli_query($query);
                    if ($resultado2) {
                        while ($row2 = mysqli_fetch_row($resultado2)) {
                            if (strpos($aux, "@" . $row2[0]. "@") !== false)
                                $validar = false;
                            else {
                                $texto = $texto . "<br>Sexo: " . $row2[1] . "<br>Edad: " . $row2[2] . "<br>Profesión: " . $row2[3] . "<br>Orientación sexual: " . $row2[4] . "<br>Residencia: " . $row2[5] . "<br>Lengua Materna: " . $row2[6] . "<br>Grado de Instrucción: " . $row2[7] . "<br>Relación: " . $row2[8] . "<br>";
                                $aux = $aux . "@" . $row2[0] . "@";
                                $validar = true;
                            }
                        }
                    } else {
                        $validar = false;
                    }
                    $i++;
                }
                if ($validar){
                    $consulta = mysqli_query("SELECT Conversacion from conversacion WHERE idCONVERSACION = " . $row[10] . ";");
                    $row2 = mysqli_fetch_row($consulta);
                    $texto = $texto . "<br>Conversación: " . $row2[0] . "</div>";
                                    

                } else
                    $texto = "";
                
                $final = $final . $texto;
                $texto = "";
            }
        }
}

echo $prueba_tabla;

function generarPila($elementos, $individual){
    $pila = array();
    $contador = 0;
    $flag = 0;
    $i = 0;
    if ($individual) $extra = ";"; else $extra = "=";
    while ($i < strlen($elementos)) {
        
    if ($elementos[$i] == "@" and $elementos[$i + 1] == "+" and $elementos[$i + 2] == $extra and $elementos[$i + 3] == ";") {
                
                array_push($pila, substr($elementos, $flag, $i-$flag));
                $flag = $i + 4;
            
        }
        $i = $i + 1;
    }
    
    return $pila;
    
}

function getQuery($multiplicador, $modo, $lista) {
    $query = "SELECT * from persona WHERE";
        $sexo = getCaracteristica(1 + (9*$multiplicador), $lista, 0);
        $flag = false;
        if(strcmp($sexo, "undefined") != 0) {
            if($flag)
                $query = $query . " AND";
            $query = $query . " Sexo='" . $sexo . " '";
            $flag = true;
        }
        $edad = getCaracteristica(2 + (9*$multiplicador), $lista, 0);
        $edad2 = getCaracteristica(3 + (9*$multiplicador), $lista, 0);
        if(strcmp($edad, "Seleccionar") != 0 and strcmp($edad2, "Seleccionar") != 0) {
            if($flag)
                $query = $query . " AND";
            $query = $query . " (Edad BETWEEN ". $edad . " AND " . $edad2 . ")";
            $flag = true;
        }
        $prof = getCaracteristica(4 + (9*$multiplicador), $lista, 0);
        if(strcmp($prof, "Seleccionar") != 0) {
            if($flag)
                $query = $query . " AND";
            $query = $query . " Prof='" . $prof . " '";
            $flag = true;
        }
        $orien = getCaracteristica(5 + (9*$multiplicador), $lista, 0);
        if(strcmp($orien, "Seleccionar") != 0) {
            if($flag)
                $query = $query . " AND";
            $query = $query . " Orien='" . $orien . " '";
            $flag = true;
        }
        $lugar = getCaracteristica(6 + (9*$multiplicador), $lista, 0);
        if(strcmp($lugar, "") != 0) {
            if($flag)
                $query = $query . " AND";
            $query = $query . " Residencia='" . $lugar . " '";
            $flag = true;
        }
        $materna = getCaracteristica(7 + (9*$multiplicador), $lista, 0);
        if(strcmp($materna, "Seleccionar") != 0) {
            if($flag)
                $query = $query . " AND";
            $query = $query . " Materna='" . $materna . " '";
            $flag = true;
        }
        $grado  = getCaracteristica(8 + (9*$multiplicador), $lista, 0);
        if(strcmp($grado, "Seleccionar") != 0) {
            if($flag)
                $query = $query . " AND";
            $query = $query . " Grado='" . $grado . " '";
            $flag = true;
        }
        if ($modo) {
            $relacion = getCaracteristica(9 + (9*$multiplicador), $lista, 0);
            if(strcmp($relacion, "Seleccionar") != 0) {
                if($flag)
                    $query = $query . " AND";
                $query = $query . " Relacion='" . $relacion . " '";
                $flag = true;
            }
        } else {
            $query = $query . " ORDER BY clave;";
        }
        return $query;
}

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
?></div><script>
        document.write('<script src=js/vendor/' +
        ('__proto__' in {} ? 'zepto' : 'jquery') +
        '.js><\/script>')
        </script>
        <script src="js/foundation.min.js"></script>
        <script>
          $(document).foundation();
        </script></body></html>
