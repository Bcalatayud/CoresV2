var edades = ["Seleccionar", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"];
var idiomas = ["Seleccionar", "Akan", "Amharic", "Arabic", "Assamese", "Awadhi", "Azerbaijani", "Balochi", "Belarusian", "Bengali", "Bhojpuri", "Burmese", "CebuanoVisayan", "Chewa", "Chhattisgarhi", "Chittagonian", "Czech", "Deccan", "Dhundhari", "Dutch", "EasternMin", "English", "French", "Fula", "GanChinese", "German", "Greek", "Gujarati", "HaitianCreole", "Hakka", "Haryanvi", "Hausa", "Hiligaynon", "Hindi", "Hmong", "Hungarian", "Igbo", "Ilocano", "Italian", "Japanese", "Javanese", "Jin", "Kannada", "Kazakh", "Khmer", "Kinyarwanda", "Kirundi", "Konkani", "Korean", "Kurdish", "Madurese", "Magahi", "Maithili", "Malagasy", "MalayIndonesian", "Malayalam", "Mandarin", "Marathi", "Marwari", "Mossi", "Nepali", "NorthernMin", "OdiaOriya", "Oromo", "Pashto", "Persian", "Polish", "Portuguese", "Punjabi", "Quechua", "Romanian", "Russian", "Saraiki", "SerboCroatian", "Shona", "Sindhi", "Sinhalese", "Somali", "SouthernMin", "Spanish", "Sundanese", "Swedish", "Sylheti", "Tagalog", "Tamil", "Telugu", "Thai", "Total", "Turkish", "Turkmen", "Ukrainian", "Urdu", "Uyghur", "Uzbek", "Vietnamese", "WuShanghainese", "Xhosa", "XiangHunnanese", "Yoruba", "YueCantonese", "Zhuang", "Zulu", "Aguacateco(Awakateko)", "Amuzgo", "Amuzgo de Guerrero", "Amuzgo de Oaxaca ", "Ayapaneco", "Cakchiquel(Kaqchikel)", "Chatino", "Chichimeca jonaz", "Chinanteco", "Chinanteco de Lalana", "Chinanteco de Ojitlán", "Chinanteco de Petlapa", "Chinanteco de Sochiapan", "Chinanteco de Usila", "Chinanteco de Valle Nacional", "Chocho (Chocholteco)", "Chol (Chol)", "Chontal", "Chontal de Oaxaca", "Chontal deTabasco", "Chuj", "Cochimí", "Cora", "Cucapá", "Cuicateco", "Guarijío", "Huasteco", "Huave", "Huichol", "Ixcateco", "Ixil", "Jacalteco (Jakalteko)", "Kanjobal (Qanjobal)", "Kekchi (Qeqchi)", "Kikapú (Kickapoo)", "Kiliwa", "Kumiai", "Lacandón", "Mame (Mam)", "Matlatzinca", "Maya", "Mayo", "Mazahua", "Mazateco", "Mixe", "Mixteco", "Mixteco de la costa", "Mixteco de la mixteca alta", "Mixteco de la mixteca baja", "Mixteco de la zona mazateca", "Mixteco de Puebla", "Motocintleco(Qatok)", "Náhuatl", "Ocuilteco (Tlahuica)", "Otomí", "Paipai", "Pame", "Papabuco", "Pápago", "Pima", "Popoloca", "Popoluca", "Popoluca de la sierra", "Popoluca de Oluta", "Popoluca de Texistepec", "Purépecha (Tarasco)", "Quiché (Kiche)", "Seri", "Solteco", "Tacuate", "Tarahumara", "Tepehua", "Tepehuano", "Tepehuano de Chihuahua (Tepehuano del norte)", "Tepehuano de Durango (Tepehuano del sur)", "Tlapaneco", "Tojolabal", "Totonaca (Totonaco)", "Triqui", "Tzeltal (Tseltal)", "Tzotzil (Tsotsil)", "Yaqui", "Zapoteco", "Zapoteco de Ixtlán", "Zapoteco del Istmo", "Zapoteco del rincón", "Zapoteco sureño", "Zapoteco vallista", "Zoque "];
var parientes = ["Seleccionar", "Madre / Padre", "Hermano(a)", "Hijo(a)", "Abuelo(a)", "Nieto(a)", "Tío(a)", "Novio(a)", "Amigo(a)", "Primo(a)", "Esposo(a)", "Otro"];
var educacion = ["Seleccionar", "Primaria", "Secundaria", "Preparatoria", "Universidad", "Maestría", "Doctorado"];
var profesiones = ["Seleccionar", "Abogado", "Académico", "Actor", "Adjunto", "Administrador", "Administrativo", "Agente de viaje", "Agrónomo", "Alergólogo", "Alergista", "Almacenista", "Anatomista", "Anestesiólogo", "Anestesista", "Antologista", "Antropólogo", "Archivero", "Arqueólogo", "Arquitecto", "Asesor", "Asistente", "Astrofísico", "Astrólogo", "Astrónomo", "Atleta", "Autor", "Auxiliar", "Avicultor", "Bacteriólogo", "Barrendero", "Bibliógrafo", "Bibliotecario", "Biofísico", "Biógrafo", "Biólogo", "Bioquímico", "Bombero", "Botánico", "Cancerólogo", "Cardiólogo", "Cartero", "Cartógrafo", "Castrador", "Catedrático", "Científico", "Cirujano", "Citólogo", "Climatólogo", "Consejero", "Conserje", "Contador", "Coordinador", "Cosmógrafo", "Cosmólogo", "Criminalista", "Cronólogo", "Decano", "Decorador", "Defensor", "Delegado", "Demógrafo", "Dentista", "Dermatólogo", "Dibujante", "Diseñador", "Directivo", "Director", "Dirigente", "Doctor", "Documentalista", "Ecólogo", "Economista", "Educador", "Enfermero", "Entomólogo", "Epidemiólogo", "Estadista", "Estudiante", "Etimólogo", "Etnógrafo", "Etnólogo", "Examinador", "Farmacéutico", "Farmacólogo", "Filólogo", "Filósofo", "Fiscal", "Físico", "Fisiólogo", "Fisioterapeuta", "Fonetista", "Foníatra", "Fonólogo", "Forense", "Fotógrafo", "Funcionario", "Gemólogo", "Genetista", "Geobotánica", "Geofísico", "Geógrafo", "Geólogo", "Geoquímica", "Gerente", "Gestor", "Grabador", "Grafólogo", "Gramático", "Hematólogo", "Hepatólogo", "Hidrogeólogo", "Hidrógrafo", "Hidrólogo", "Higienista", "Hispanista", "Historiador", "Informático", "Ingeniero", "Inmunólogo", "Inspector", "Interino", "Interventor", "Investigador", "Jardinero", "Juez", "Latinista", "Lexicógrafo", "Lexicólogo", "Lingüista", "Maestro", "Matemático", "Medico", "Meteorólogo", "Micólogo", "Microbiológico", "Microcirujano", "Mineralogista", "Monitor", "Musicólogo", "Naturópata", "Nefrólogo", "Neumólogo", "Neuroanatomista", "Neurobiólogo", "Neurocirujano", "Neuroembriólogo", "Neurofisiólogo", "Neurólogo", "Nutrólogo", "Oceanógrafo", "Odontólogo", "Oficinista", "Oftalmólogo", "Oncólogo", "Óptico", "Optometrista", "Orientador", "Ornitólogo", "Ortopédico", "Ortopedista", "Osteólogo", "Otorrinolaringólogo", "Paleobiólogo", "Paleobotánico", "Paleógrafo", "Paleólogo", "Paleontólogo", "Patólogo", "Pedagogo", "Pediatra", "Periodista", "Perito", "Piloto", "Piscicultor", "Podólogo", "Policía", "Político", "Portero", "Prehistoriador", "Proctólogo", "Profesor", "Programador", "Protésico", "Proveedor", "Psicoanalista", "Psicólogo", "Psicofísico", "Psicopedagogo", "Psicoterapeuta", "Psiquiatra", "Publicista", "Publicitario", "Puericultor", "Químico", "Quiropráctico", "Radioastrónomo", "Radiofonista", "Radiólogo", "Radiotécnico", "Radiotelefonista", "Radiotelegrafista", "Radioterapeuta", "Rector", "Sanitario", "Secretario", "Sexólogo", "Sismólogo", "Sociólogo", "Telefonista", "Teólogo", "Terapeuta", "Tocoginecólogo", "Tocólogo", "Toxicólogo", "Traductor", "Transcriptor", "Traumatólogo", "Tutor", "Urólogo", "Veterinario", "Virólogo", "Viticultor", "Vulcanólogo", "Xilógrafo", "Zoólogo", "Zootécnico"];
var orientacion = ["Seleccionar", "Heterosexual", "Homosexual", "Bisexual"];
var usuarios = [];
var conversacionCompleta = [];
var conversacion = Object();
var magic = 0;
function getComboEdades(j) {
    cadena = "<select id=\"usered" + j + "\">";
    for (cont = 0; cont < edades.length; cont++) {
        cadena += "<option value=\"" + edades[cont] + "\">" + edades[cont] + "</option>";
    }
    cadena += "</select>";
    return cadena;
}
function getComboIdiomas(j) {
    cadena = "<select id=\"userlen" + j + "\">";
    for (cont = 0; cont < idiomas.length; cont++) {
        cadena += "<option value=\"" + idiomas[cont] + "\">" + idiomas[cont] + "</option>";
    }
    cadena += "</select>";
    return cadena;
}
function getComboParientes(j) {
    cadena = "<select id=\"userpar" + j + "\" onchange=\"getOtro(" + j + ");grupoRelacion(" + j + ")\">";
    for (cont = 0; cont < parientes.length; cont++) {
        cadena += "<option value=\"" + parientes[cont] + "\">" + parientes[cont] + "</option>";
    }
    cadena += "</select>";
    return cadena;
}
function getOtro(j) {
    previo = document.getElementById("userpar" + j).value;
    if (document.getElementById("userpar" + j).value == "Otro") {
        document.getElementById("parientes" + j).innerHTML += "<br>¿Cuál? <input type=\"text\" id = \"userres2" + j + "\" />";
        document.getElementById("userpar" + j).value = previo;
    } else {
        var aux = -1;
        if(j == 0)
            aux = 1;
        if(j == 1)
            aux = 0;
        if (aux != -1){
            if ($('input[name="userrd' + aux + '"]:checked').val() == 'H')
                parientes = ["Seleccionar", "Padre", "Hermano", "Hijo", "Abuelo", "Nieto", "Tío", "Novio", "Amigo", "Primo", "Esposo", "Otro"];
            else
                if ($('input[name="userrd' + aux + '"]:checked').val() == 'M')
                    parientes = ["Seleccionar", "Madre", "Hermana", "Hija", "Abuela", "Nieta", "Tía", "Novia", "Amiga", "Prima", "Esposa", "Otro"];
        }
        if(usuarios.length>2)
            changeRelacion();
        document.getElementById("parientes" + j).innerHTML = "Relación: " + getComboParientes(j);
        document.getElementById("userpar" + j).value = previo;
        parientes = ["Seleccionar", "Madre / Padre", "Hermano(a)", "Hijo(a)", "Abuelo(a)", "Nieto(a)", "Tío(a)", "Novio(a)", "Amigo(a)", "Primo(a)", "Esposo(a)", "Otro"];
    }
}
function getComboEdicacion(j) {
    cadena = "<select id=\"usersch" + j + "\">";
    for (cont = 0; cont < educacion.length; cont++) {
        cadena += "<option value=\"" + educacion[cont] + "\">" + educacion[cont] + "</option>";
    }
    cadena += "</select>";
    return cadena;
}
function getComboProfesiones(j) {
    cadena = "<select id=\"userpro" + j + "\">";
    for (cont = 0; cont < profesiones.length; cont++) {
        cadena += "<option value=\"" + profesiones[cont] + "\">" + profesiones[cont] + "</option>";
    }
    cadena += "</select>";
    return cadena;
}
function getComboOrientacion(j) {
    cadena = "<select id=\"userori" + j + "\">";
    for (cont = 0; cont < orientacion.length; cont++) {
        cadena += "<option value=\"" + orientacion[cont] + "\">" + orientacion[cont] + "</option>";
    }
    cadena += "</select>";
    return cadena;
}
function changeRelacion(){
    parientes = ["Seleccionar", "Amigos", "Familiar", "Compañeros de trabajo", "Compañeros de escuela", "Vecinos"];
}

var usuarioPersonal = "";
function accion(){
    var lineas = separarLineas(document.getElementById("conversacion").value + "\n");
    usuarios = identificarUsuarios(lineas);
    correcto = false;
    avanza = 0;
    while (!correcto) {
        correcto = confirm("¿Eres " + usuarios[avanza] + "?"); //Muestra una ventana emergente para seleccionar al usuario que hablar/registra la conversación. 
        usuarioPersonal = avanza;
        avanza++;
        if(avanza > usuarios.length-1)
            avanza = 0; //Para mantener el valor dentro de el ciclo, hasta que seleccione uno de los usuarios.
    } //El valor de correcto, para terminar el ciclo se actualiza con el "confirm" de la primera linea 
	
	
    //var conversacion = Object();
    if (usuarios.length > 2)
        changeRelacion();
    for (i = 0; i < usuarios.length; i++)
        conversacion[i] = "";
    var userID = -1;
    var flag = false;
    for (i = 0; i < lineas.length; i++) {
        flag = bandera(lineas, i, usuarios);
        if (flag) {
            conversacion[userID] = conversacion[userID] + lineas[i] + " ";
            if(userID != -1)
                conversacionCompleta.push(lineas[i]);
        } else {
            if(usuarios.indexOf(lineas[i]) != -1 && usuarios.indexOf(lineas[i]) != userID)
                conversacion[userID] = conversacion[userID] + " @+;; "
            userID = usuarios.indexOf(lineas[i])
            
            if (userID != -1) {
                i = i + 3;
                //if (usuarios.indexOf(lineas[i]) != -1)
                    i = i - 1;
            }
        }
    }
    
    document.getElementById("contenido").innerHTML += "<p>ID: <input type=\"text\" name=\"iduser\" id=\"iduserk\" /></p>";
    for (i = 0; i < usuarios.length; i++) {
        document.getElementById("contenido").innerHTML += "<p>" + usuarios[i] + "</p>" + 
        "<p>Sexo: H<input type=\"radio\" name=\"userrd" + i + "\" value=\"H\" onclick=\"especificaRelacion(" + i + ", 'H');\" /> M<input type=\"radio\" name=\"userrd" + i + "\" value=\"M\" onclick=\"especificaRelacion(" + i + ",'F');\"/></p>" +
        "<p>Edad: " + getComboEdades(i) + "</p>" + 
        "<p>Profesión u Oficio: " + getComboProfesiones(i) + "</p>" + 
        "<p>Orientación sexual: " + getComboOrientacion(i) + "</p>" + 
        "<p id=\"validar" + i + "\">Lugar de residencia (CP): <input type=\"text\" id=\"userres" + i + "\" /></p>" +
        "<p>Lengua materna: " + getComboIdiomas(i) + "</p>" +
        "<p>Grado de instrucción: " + getComboEdicacion(i) + "</p>" +
        "<p id=\"parientes" + i + "\">Relación: " + getComboParientes(i) + "</p>" +
        "<input type=\"hidden\" id=\"valores" + i + "\" value=\"" + conversacion[i] + "\" />";
    }
    document.getElementById("contenido").innerHTML += "<a href=\"#\" class=\"button\" onclick=\"subir();\" > Enviar</a>";
}
function grupoRelacion(valor) {
    tamano = usuarios.length;
    if(tamano > 2) {
        for(n = 0; n < tamano; n++) {
            document.getElementById("userpar" + n).selectedIndex = document.getElementById("userpar" + valor).selectedIndex;
        }
    }
}
function especificaRelacion(num, valor) {
    var parientesF = ["Seleccionar", "Madre", "Hermana", "Hija", "Abuela", "Nieta", "Tía", "Novia", "Amiga", "Prima", "Esposa", "Otro"];
    var parientesH = ["Seleccionar", "Padre", "Hermano", "Hijo", "Abuelo", "Nieto", "Tío", "Novio", "Amigo", "Primo", "Esposo", "Otro"];
    flag = 0;
    if (num == 0)
        flag = 1;
    aux = document.getElementById("userpar" + flag).selectedIndex;
    if(valor == 'H') {
        document.getElementById("userpar" + flag).options.length = 0;
        for (j = 0; j < parientesH.length; j++) {
            document.getElementById("userpar" + flag).options[j] = new Option(parientesH[j], parientesH[j]);
        }
    } else {
        document.getElementById("userpar" + flag).options.length = 0;
        for (j = 0; j < parientesF.length; j++) {
            document.getElementById("userpar" + flag).options[j] = new Option(parientesF[j], parientesF[j]);
        }
    }
    document.getElementById("userpar" + flag).selectedIndex = aux;
}
function validaCP(num, flag) {
    var xhttp;    
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("validar" + num).innerHTML = "Lugar de residencia (CP): <input type=\"text\" id=\"userres" + num + "\" />" + xhttp.responseText;
            if(document.getElementById("cod" + num).value == "S")
                document.getElementById("userres" + num).style = "outline: none !important; border:1px solid green !important;";
            else
                document.getElementById("userres" + num).style = "outline: none !important; border:1px solid red !important;";
            if (flag)
                document.getElementById("userres" + num).focus();  
            magic = magic + 1;
              
        }
    }
    xhttp.open("GET", "codigo.php?codigo="+document.getElementById("userres" + num).value + "&user=" + num, true);
    xhttp.send();
}
function revisa (lineas, pos) {
    if (/..\d.\d{2}.(AM|PM)..\d.\d{2}.\d{4}..(.*):.*/.test(lineas[pos]))
         return false;
    else
        return true;
}
function subir() {
    cadena = "";
    texto = "";
    //vb = true;
    var aux = [];
    var Sexo = [];
	var Edad= [];
	var Profesion = [];
	var Orientacion= [];
	var Cp = [];
	var Lengua= [];
	var Escolaridad = [];
	var Parientes= [];
	aux.push(document.getElementById("iduserk").value);
    for (i = 0; i < usuarios.length; i++) {
		Sexo.push($('input[name="userrd' + i + '"]:checked').val());
		Edad.push(document.getElementById("usered" + i).value);
		Profesion.push(document.getElementById("userpro" + i).value);
		Orientacion.push(document.getElementById("userori" + i).value);
		Cp.push(document.getElementById("userres" + i).value);
		Lengua.push(document.getElementById("userlen" + i).value);
		Escolaridad.push(document.getElementById("usersch" + i).value);
		Parientes.push(document.getElementById("userpar" + i).value);
    } 
    for(h = 0; h < usuarios.length; h++) {
            validaCP(h, false);
    }
    //while (vb) {
	alert("Sexo de los usuarios: "+ Sexo + "\nEdad de los usuarios: " + Edad + "\nProfesión de los usuarios: " + Profesion + "\nOrientación sexual de los usuarios: " + Orientacion + "\nCódigo porstal de los usuarios: " + Cp + "\nLengua materna de los usuarios: " + Lengua + "\n" + "Escolaridad de los usuarios: " + Escolaridad + "\nRelación de parentesco: " + Parientes + "El id de la conversación es: " + aux);
	
	alert("Se validarán sus datos");
	
        //if(magic === usuarios.length){ 
		//vb = false;
		//}
		//vb =false;
    //}
	/*
    for (i = 0; i < usuarios.length; i++) {
        document.getElementById("userres" + i).value = aux[i];
    } */  //No sé que hace esa linea
    magic = 0;
	//para validar vacío, no avanza de esta función 
	/*
    for (i = 0; i < usuarios.length; i++) {
        cadena += $('input[name="userrd' + i + '"]:checked').val() + ";" 
        + document.getElementById("usered" + i).value + ";" 
        + document.getElementById("userpro" + i).value + ";" 
        + document.getElementById("userori" + i).value + ";"
        + document.getElementById("userres" + i).value + ";" 
        + document.getElementById("userlen" + i).value + ";" 
        + document.getElementById("usersch" + i).value + ";";
        if (document.getElementById("userpar" + i).value !== "Otro")
            cadena += document.getElementById("userpar" + i).value + ";";
        else
            cadena += document.getElementById("userres2" + i).value + ";";
        texto += validaVacio(i);
    }
	*/
	//alert("Vacío validado");
	
    if (texto.length == 0) {
        alert ("Gracias, se enviarán los datos");
        document.getElementById("cara").value = cadena;
		document.getElementById("cara").value = cadena;
        cadena = "";
        for (i = 0; i < usuarios.length; i++) {
            cadena += conversacion[i] + " @+=; ";
		}
        cadena = "";
        for (i = 0; i < conversacionCompleta.length; i++) {
        if (conversacionCompleta[i].length != 0)
            cadena += conversacionCompleta[i] + " @+=;";
        }
        document.getElementById("conv2").value = cadena;
        document.getElementById("numero").value = usuarios.length + "";
        document.getElementById("usuarioPersonal").value = usuarioPersonal;
		
		//Debug
		document.getElementById("usuario1").value = usuarios[0];
		document.getElementById("usuario2").value = usuarios[1];
		document.getElementById("Sexo1").value = Sexo[0];
		document.getElementById("Sexo2").value = Sexo[1];
		document.getElementById("Edad1").value = Edad[0];
		document.getElementById("Edad2").value = Edad[1];
		document.getElementById("Profesion1").value = Profesion[0];
		document.getElementById("Profesion2").value = Profesion[1];
		document.getElementById("Orientacion1").value = Orientacion[0];
		document.getElementById("Orientacion2").value = Orientacion[1];
		document.getElementById("Cp1").value = Cp[0];
		document.getElementById("Cp2").value = Cp[1];
		document.getElementById("Lengua1").value = Lengua[0];
		document.getElementById("Lengua2").value = Lengua[1];
		document.getElementById("Escolaridad1").value = Escolaridad[0];
		document.getElementById("Escolaridad2").value = Escolaridad[1];
		document.getElementById("Parientes1").value = Parientes[0];
		document.getElementById("Parientes2").value = Parientes[1];
		document.getElementById("aux").value = aux[0];
		
		//Fin Debug
		
        document.getElementById("todo").submit();
    } else {
        alert(texto);
    }
	vb = false;
}
function validaVacio(num) {
    texto = "";
    aux = document.getElementById("iduserk").value + "";
    if(aux == "") {
        texto += "No has puesto tu ID \n";
        document.getElementById("iduserk").style = "outline: none !important; border:1px solid red !important;";
    }
    aux = $('input[name="userrd' + num + '"]:checked').val() + "";
    if(aux == "undefined"){
        texto += "No seleccionaste el sexo de " + usuarios[num] + "\n";
        //document.getElementsByNameById("userrd" + num).style = "outline: none !important; border:1px solid red !important;";
    }
    aux = document.getElementById("usered" + num).value + "";
    if(aux == "Seleccionar"){
        texto += "No seleccionaste la edad de " + usuarios[num] + "\n";
        document.getElementById("usered" + num).style = "outline: none !important; border:1px solid red !important;";
    }
    aux = document.getElementById("userpro" + num).value + "";
    if(aux == "Seleccionar"){
        texto += "No seleccionaste la profesión de " + usuarios[num] + "\n";
       document.getElementById("userpro" + num).style = "outline: none !important; border:1px solid red !important;";
    }
    aux = document.getElementById("userori" + num).value + "";
    if(aux == "Seleccionar"){
        texto += "No seleccionaste la orientación sexual de " + usuarios[num] + "\n";
        document.getElementById("userori" + num).style = "outline: none !important; border:1px solid red !important;";
    }
    aux = document.getElementById("userlen" + num).value + "";
    if(aux == "Seleccionar"){
        texto += "No seleccionaste la lengua materna de " + usuarios[num] + "\n";
        document.getElementById("userlen" + num).style = "outline: none !important; border:1px solid red !important;";
    }
    aux = document.getElementById("usersch" + num).value + "";
    if(aux == "Seleccionar"){
        texto += "No seleccionaste el grado de instrucción de " + usuarios[num] + "\n";
        document.getElementById("usersch" + num).style = "outline: none !important; border:1px solid red !important;";
    }
    aux = document.getElementById("userpar" + num).value + "";
    if(aux == "Seleccionar"){
        texto += "No seleccionaste el tipo de relación de " + usuarios[num] + "\n";
        document.getElementById("userpar" + num).style = "outline: none !important; border:1px solid red !important;";
    }
    aux = document.getElementById("userres" + num).value + "";
    if(aux == "")
        texto += "Ingresa un valor en el código postal de " + usuarios[num] + "\n";
    else{
        aux = document.getElementById("cod" + num).value + "";
        if(aux == "N")
            texto += "Ingresa un valor valido en el código postal de " + usuarios[num] + "\n";
    }
    return texto;
}
function bandera (lineas, pos, usuarios) {
    var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Hoy", "Ayer", "lunes", "martes", "miercoles", "jueves", "viernes", "sábado", "domingo", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "hoy", "ayer"];
    var flag = true;
    if(dias.indexOf(lineas[pos]) != -1)
        flag = revisa(lineas, pos + 2);
    else
        if (usuarios.indexOf(lineas[pos]) != -1)
            flag = revisa(lineas, pos + 1);
    return flag;
}
function separarLineas(texto){
    var lineas = [];
    var flag = 0;
    for (i = 0; i < texto.length; i++) {
        if (texto.charAt(i) == "\n") {
            lineas.push(texto.substring(flag, i));
            flag = i + 1;
        }
    }
    return lineas;
}
function identificarUsuarios(lineas) {
    usuarios = [];
	var cjto = new Set();
    for (i = 0; i < lineas.length; i++){
		//re = /..\d.\d{2}.(AM|PM)..\d.\d{2}.\d{4}..(.*):.*/; //Expresión regular anterior
		//[11:11 am, 11/11/1111] : NOMBRE A RESCATAR
		
		//Nueva expresión regular
		re = /.\d{2}.\d{2}..\d+.\d+.\d{4}..(.*?):.*/;
		//v.g. [11:20, 7/6/2017] NOMBRE: MENSAJE
		//v.g. [09:11, 15/6/2017] Lore: y ya pedimos pizza
		var prueba = lineas[i].replace(re,"$1");
		
		//alert("Iteración "+i + "\nLinea completa: "+lineas[i]+ "\nUsuario: "+prueba);
		
		cjto.add(prueba);
    }
	cjto.forEach (function(item){
		usuarios.push(item);
	});
	alert("Tamaño del conjunto: "+cjto.size);
	//console.log(cjto);
	alert("Usuarios en el conjunto: "+usuarios)
    return usuarios;
}
function generarLlave(){
    
	var xhttp;    
    xhttp = new XMLHttpRequest();  //Request de XML http para obtener datos sin recargar la página
    xhttp.onreadystatechange = function() {  //Acción a realizar cuando el documento esté listo 
        if (xhttp.readyState == 4 && xhttp.status == 200) { //La respuesta está lista
            document.getElementById("unico").value = xhttp.responseText; //Regresa el valor 
        }
		//Si xhttp == 0 no se ha inicializado el proceso;
		//Si xhttp == 1 se estableció conexión con el servidor;
		//Si xhttp == 2 la petición fue recibida
		//Si xhttp == 3 la petición se está procesando;
		//Si xhttp == 4 la petición fue completada, y la respuesta está lista
		//Si .status == 200 OK
		//Si. status == 404 página no encontrada
    }
    xhttp.open("GET", "getNumero.php", true);
	// .open(Método, url del archivo, Sincronía)
	//True = asíncrono ; False es Síncrono
    xhttp.send();
	//.send(envía la petición al servidor)
}
function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

//-------------------------------------------------------------------------------------------------------------------
var numeroIteracion = 0;
function setIteracion() {
    if (numeroIteracion == 0)
        numeroIteracion = prompt("¿Cuántos?", "");
    if (numeroIteracion == 1) {
        document.getElementById('extra').innerHTML = "<input type = \"checkbox\" value = \"Completa\" name = \"comp\">Desea la conversación completa?";
    }
    setInterfaz();
}

function setInterfaz() {
    document.getElementById("contenido").innerHTML += "<div class=\"row\">";
    for (i = 0; i < numeroIteracion; i++) {
        document.getElementById("contenido").innerHTML += " <div class=\"large-6 columns\"><p>Sexo: H<input type=\"radio\" name=\"userrd" + i + "\" value=\"H\" onclick=\"especificaRelacion(" + i + ", 'H');\" /> M<input type=\"radio\" name=\"userrd" + i + "\" value=\"M\" onclick=\"especificaRelacion(" + i + ",'F');\"/></p>" +
        "<p>Edad: " + getComboEdades(i) + getComboEdades(i + "@") + "</p>" + 
        "<p>Profesión u Oficio: " + getComboProfesiones(i) + "</p>" + 
        "<p>Orientación sexual: " + getComboOrientacion(i) + "</p>" + 
        "<p id=\"validar" + i + "\">Lugar de residencia (CP): <input type=\"text\" id=\"userres" + i + "\" /></p>" +
        "<p>Lengua materna: " + getComboIdiomas(i) + "</p>" +
        "<p>Grado de instrucción: " + getComboEdicacion(i) + "</p>" +
        "<p id=\"parientes" + i + "\">Relación: " + getComboParientes(i) + "</p></div>";
    }
    document.getElementById("contenido").innerHTML += "</div><input value=\"Consultar\" type=\"button\" onclick=\"consultar();\" />";
}

function consultar() {
    if (numeroIteracion == 1) {
        if ($('input[name="comp"]:checked').val() == "Completa") {
            document.getElementById("tipo").value = "1";
        } else {
            document.getElementById("tipo").value = "2";
        }
        document.getElementById("query").value = getCaract(numeroIteracion - 1);
    } else {
        document.getElementById("tipo").value = "3";
        cadena = "";
        for (i = 0; i < numeroIteracion; i++) {
            cadena += getCaract(i);
        }
        document.getElementById("query").value = cadena;
    }
    document.getElementById("numero").value = numeroIteracion + "";
    document.getElementById("todo").submit();
}
function getCaract(num) {
    cadena = $('input[name="userrd' + num + '"]:checked').val() + ";" 
            + document.getElementById("usered" + num).value + ";"
            + document.getElementById("usered" + (num + "@")).value + ";"
            + document.getElementById("userpro" + num).value + ";" 
            + document.getElementById("userori" + num).value + ";" 
            + document.getElementById("userres" + num).value + ";" 
            + document.getElementById("userlen" + num).value + ";" 
            + document.getElementById("usersch" + num).value + ";" 
            + document.getElementById("userpar" + num).value + ";" 
    return cadena;
}
