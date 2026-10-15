/* Lógica de la plataforma: datos (S, CAT, LOC, DIS, NAV, CAP, SA), rutas y accesibilidad */
var CAT=["Salud", "Educación", "Empleo", "Apoyo social", "Transporte", "Vivienda", "Recreación y deporte", "Cultura", "Justicia y derechos"],LOC=["Usaquén", "Chapinero", "Santa Fe", "San Cristóbal", "Usme", "Tunjuelito", "Bosa", "Kennedy", "Fontibón", "Engativá", "Suba", "Barrios Unidos", "Teusaquillo", "Los Mártires", "Antonio Nariño", "Puente Aranda", "La Candelaria", "Rafael Uribe Uribe", "Ciudad Bolívar", "Sumapaz"],DIS=["Visual","Auditiva","Física","Intelectual","Psicosocial","Múltiple"];
var S=[
{id:1,n:"Terapia física y rehabilitación",e:"Centro de Rehabilitación Demo",c:"Salud",l:"Kennedy",d:["Física", "Múltiple"],t:"Sesiones de fisioterapia con valoración inicial y plan personalizado.",r:"Orden médica y documento de identidad."},
{id:2,n:"Apoyo con intérprete de lengua de señas",e:"Fundación Voces Demo",c:"Educación",l:"Suba",d:["Auditiva"],t:"Intérpretes para trámites, clases y citas médicas.",r:"Solicitud con tres días de anticipación."},
{id:3,n:"Orientación para el empleo inclusivo",e:"Agencia de Empleo Demo",c:"Empleo",l:"Bosa",d:["Visual", "Auditiva", "Física", "Intelectual"],t:"Asesoría para hoja de vida, entrevistas y vacantes con empresas aliadas.",r:"Documento de identidad."},
{id:4,n:"Lectores de pantalla y capacitación digital",e:"Centro de Tecnología Demo",c:"Educación",l:"Usaquén",d:["Visual"],t:"Cursos de uso de computador y celular con lector de pantalla.",r:"Certificado de discapacidad."},
{id:5,n:"Grupo de apoyo para cuidadores",e:"Red de Apoyo Demo",c:"Apoyo social",l:"Engativá",d:["Múltiple", "Intelectual", "Psicosocial"],t:"Encuentros quincenales de acompañamiento para cuidadores y familias.",r:"Inscripción previa."},
{id:6,n:"Atención psicológica",e:"Centro de Salud Demo",c:"Salud",l:"Suba",d:["Psicosocial"],t:"Consulta psicológica individual y orientación a la familia.",r:"Afiliación al sistema de salud."},
{id:7,n:"Formación laboral en oficios",e:"Escuela de Oficios Demo",c:"Empleo",l:"Kennedy",d:["Física", "Intelectual"],t:"Talleres de formación con certificación y práctica empresarial.",r:"Mayor de 16 años."},
{id:8,n:"Transporte accesible a citas",e:"Movilidad Social Demo",c:"Transporte",l:"Bosa",d:["Física", "Múltiple"],t:"Traslados en vehículo adaptado a citas médicas programadas.",r:"Cita confirmada y solicitud previa."},
{id:9,n:"Ruta escolar adaptada",e:"Movilidad Escolar Demo",c:"Transporte",l:"Usme",d:["Física", "Múltiple"],t:"Transporte diario en vehículo con rampa para estudiantes con discapacidad.",r:"Matrícula vigente y solicitud del acudiente."},
{id:10,n:"Acompañamiento en el transporte público",e:"Red de Movilidad Demo",c:"Transporte",l:"Chapinero",d:["Visual", "Intelectual"],t:"Guías que enseñan y acompañan los recorridos en bus y sistema masivo.",r:"Inscripción y cita de valoración."},
{id:11,n:"Orientación para subsidio de vivienda",e:"Casa Digna Demo",c:"Vivienda",l:"Ciudad Bolívar",d:["Física", "Múltiple"],t:"Asesoría para postular a subsidios y adaptar la vivienda con rampas y baños accesibles.",r:"Documentos de identidad y del hogar."},
{id:12,n:"Adecuaciones para el hogar",e:"Taller Hogar Demo",c:"Vivienda",l:"San Cristóbal",d:["Física", "Visual"],t:"Visitas técnicas para adaptar espacios del hogar y prevenir caídas.",r:"Visita previa programada."},
{id:13,n:"Deporte adaptado",e:"Club Deporte para Todos Demo",c:"Recreación y deporte",l:"Teusaquillo",d:["Física", "Visual", "Auditiva"],t:"Entrenamientos de natación, baloncesto en silla de ruedas y atletismo.",r:"Certificado médico de aptitud física."},
{id:14,n:"Recreación para familias",e:"Parque Incluyente Demo",c:"Recreación y deporte",l:"Fontibón",d:["Intelectual", "Múltiple", "Psicosocial"],t:"Jornadas recreativas con apoyos para personas con discapacidad y sus familias.",r:"Inscripción gratuita."},
{id:15,n:"Talleres de arte y música",e:"Casa de la Cultura Demo",c:"Cultura",l:"La Candelaria",d:["Intelectual", "Psicosocial", "Auditiva"],t:"Talleres artísticos con materiales adaptados y apoyo de intérprete.",r:"Inscripción previa, cupos limitados."},
{id:16,n:"Visitas guiadas accesibles a museos",e:"Red de Museos Demo",c:"Cultura",l:"Santa Fe",d:["Visual", "Auditiva"],t:"Recorridos táctiles, con audiodescripción y con interpretación en lengua de señas.",r:"Reserva con ocho días de anticipación."},
{id:17,n:"Asesoría jurídica sobre derechos",e:"Consultorio Jurídico Demo",c:"Justicia y derechos",l:"Los Mártires",d:["Visual", "Auditiva", "Física", "Intelectual", "Psicosocial", "Múltiple"],t:"Orientación gratuita para reclamar derechos, presentar tutelas y pedir apoyos.",r:"Documento de identidad."},
{id:18,n:"Apoyo para la toma de decisiones",e:"Defensoría Demo",c:"Justicia y derechos",l:"Barrios Unidos",d:["Intelectual", "Psicosocial"],t:"Acompañamiento legal para decidir con apoyos sobre salud, dinero y vida diaria.",r:"Cita previa."},
{id:19,n:"Valoración de la discapacidad",e:"Centro de Valoración Demo",c:"Salud",l:"Puente Aranda",d:["Visual", "Auditiva", "Física", "Intelectual", "Psicosocial", "Múltiple"],t:"Evaluación para obtener el certificado de discapacidad.",r:"Documento de identidad e historia clínica."},
{id:20,n:"Audiometría y ayudas auditivas",e:"Clínica Auditiva Demo",c:"Salud",l:"Antonio Nariño",d:["Auditiva"],t:"Pruebas auditivas y entrega de audífonos con seguimiento.",r:"Orden médica."},
{id:21,n:"Educación inclusiva en el aula",e:"Colegio Incluyente Demo",c:"Educación",l:"Tunjuelito",d:["Intelectual", "Visual", "Auditiva", "Física"],t:"Ajustes razonables en clase y apoyo pedagógico individual.",r:"Cupo escolar asignado."},
{id:22,n:"Emprendimiento y capital semilla",e:"Fondo Emprendedor Demo",c:"Empleo",l:"Rafael Uribe Uribe",d:["Física", "Visual", "Auditiva", "Intelectual"],t:"Capacitación y capital semilla para negocios propios.",r:"Idea de negocio presentada."},
{id:23,n:"Brigadas de atención en zona rural",e:"Unidad Móvil Demo",c:"Apoyo social",l:"Sumapaz",d:["Visual", "Auditiva", "Física", "Intelectual", "Psicosocial", "Múltiple"],t:"Brigadas móviles con valoración, orientación y entrega de ayudas técnicas.",r:"Registro previo en la vereda."},
{id:24,n:"Préstamo de ayudas técnicas",e:"Banco Solidario Demo",c:"Apoyo social",l:"Usaquén",d:["Física", "Visual", "Auditiva"],t:"Préstamo de sillas de ruedas, bastones y audífonos.",r:"Formulario y orden de un profesional."}];
var sol=[{s:S[1],est:"En revisión"}],rol="usuario",cur="inicio",sel=null,pct=100,first=true;
var NAV={usuario:[["inicio","Inicio"],["servicios","Servicios"],["perfil","Mi perfil"],["solicitudes","Mis solicitudes"],["derechos","Derechos y rutas"],["saac","Tablero SAAC"],["accesibilidad","Accesibilidad"]],entidad:[["inicio","Inicio"],["entidad","Panel de entidad"]],admin:[["inicio","Inicio"],["admin","Administración"]]};
var BD={"Enviada":"✉ Enviada","En revisión":"⏳ En revisión","Aprobada":"✔ Aprobada","Rechazada":"✖ Rechazada"};
function $(s){return document.querySelector(s)}
function opts(a,t){return '<option value="">'+t+'</option>'+a.map(function(x){return '<option>'+x+'</option>'}).join('')}
function say(m){var t=$("#toast");t.textContent="";setTimeout(function(){t.textContent=m},60);clearTimeout(say.k);say.k=setTimeout(function(){t.textContent=""},5000)}
function nav(){$("#nav").innerHTML=NAV[rol].map(function(x){var on=cur===x[0]||(cur==="detalle"&&x[0]==="servicios");return '<a href="#'+x[0]+'"'+(on?' aria-current="page"':'')+'>'+x[1]+'</a>'}).join("")}
function route(){
 var id=location.hash.slice(1)||"inicio",el=document.getElementById(id);
 if(!el||el.tagName!=="SECTION"||(id==="detalle"&&!sel))id="inicio";
 cur=id;
 document.querySelectorAll("main section").forEach(function(s){s.hidden=s.id!==id});
 if(id==="servicios")lista();if(id==="solicitudes")tsol();if(id==="detalle")detalle();
 nav();document.title=document.getElementById(id).querySelector("h1").textContent+" – Servicios de inclusión Bogotá";
 if(first){first=false}else{var h=document.getElementById(id).querySelector("h1");window.scrollTo(0,0);h.focus()}
}
function lista(){
 var q=$("#q").value.toLowerCase(),c=$("#fc").value,l=$("#fl").value,d=$("#fd").value;
 var r=S.filter(function(s){return(!c||s.c===c)&&(!l||s.l===l)&&(!d||s.d.indexOf(d)>-1)&&(!q||(s.n+s.t+s.e).toLowerCase().indexOf(q)>-1)});
 $("#cnt").textContent=r.length+(r.length===1?" servicio encontrado":" servicios encontrados");
 $("#lista").innerHTML=r.map(function(s){return '<li class="card"><h2>'+s.n+'</h2><p class="meta">'+s.e+' – '+s.c+' – '+s.l+'</p><p>'+s.t+'</p><button class="btn" data-id="'+s.id+'">Ver detalle<span class="sr"> de '+s.n+'</span></button></li>'}).join("")||'<li class="card">No hay servicios con esos filtros. Quita alguno para ver más resultados.</li>';
}
function detalle(){
 $("#dt").textContent=sel.n;
 $("#dbody").innerHTML='<p class="meta">'+sel.e+'</p><p>'+sel.t+'</p><dl><dt><strong>Categoría</strong></dt><dd>'+sel.c+'</dd><dt><strong>Localidad</strong></dt><dd>'+sel.l+'</dd><dt><strong>Dirigido a personas con discapacidad</strong></dt><dd>'+sel.d.join(", ")+'</dd><dt><strong>Requisitos</strong></dt><dd>'+sel.r+'</dd></dl><button class="btn" id="solic">Solicitar acceso</button>';
}
function tsol(){
 $("#tsol").innerHTML=sol.map(function(x){return '<tr><th scope="row">'+x.s.n+'</th><td>'+x.s.e+'</td><td><span class="badge">'+BD[x.est]+'</span></td></tr>'}).join("");
 $("#notif").innerHTML=sol.map(function(x){return '<li class="card" style="margin-bottom:.6rem">Tu solicitud para «'+x.s.n+'» está en estado: <strong>'+x.est+'</strong>. Te avisamos también por correo.</li>'}).join("");
}
function init(){
 $("#cats").innerHTML=CAT.map(function(c){return '<button class="btn sec" data-cat="'+c+'">'+c+'</button>'}).join("");
 $("#fc").innerHTML=opts(CAT,"Todas");$("#fl").innerHTML=opts(LOC,"Todas");$("#fd").innerHTML=opts(DIS,"Todos");
 $("#e-c").innerHTML=opts(CAT,"Elige una").replace('<option value="">','<option value="" disabled selected>');$("#e-l").innerHTML=opts(LOC,"Elige una").replace('<option value="">','<option value="" disabled selected>');
 $("#p-l").innerHTML=LOC.map(function(x){return "<option>"+x+"</option>"}).join("");
 $("#p-d").innerHTML=DIS.map(function(x,i){return '<label class="chk"><input type="checkbox"'+(i===2?' checked':'')+'> '+x+'</label>'}).join("");
 $("#trec").innerHTML=[["Persona A","Terapia física y rehabilitación"],["Persona B","Terapia física y rehabilitación"]].map(function(x,i){return '<tr><td>'+x[0]+'</td><td>'+x[1]+'</td><td><button class="btn sec" data-ac="Aprobada">Aprobar</button> <button class="btn sec" data-ac="Rechazada">Rechazar</button></td></tr>'}).join("");
 $("#stats").innerHTML=[["128","usuarios registrados"],[String(S.length),"servicios publicados"],["46","solicitudes este mes"],["3","registros por validar"]].map(function(x){return '<div class="card"><div class="stat">'+x[0]+'</div><div>'+x[1]+'</div></div>'}).join("");
 $("#tpend").innerHTML=[["Entidad Demo Norte","Entidad"],["Persona C","Usuario"],["Fundación Demo Sur","Entidad"]].map(function(x){return '<tr><th scope="row">'+x[0]+'</th><td>'+x[1]+'</td><td><button class="btn" data-val="'+x[0]+'">Validar<span class="sr"> '+x[0]+'</span></button></td></tr>'}).join("");
 $("#cfgc").textContent=CAT.join(", ");$("#cfgl").textContent=LOC.join(", ");
}
document.addEventListener("click",function(e){
 var b=e.target.closest("button");if(!b)return;
 if(b.dataset.cat){$("#fc").value=b.dataset.cat;location.hash="servicios";lista()}
 else if(b.dataset.id){sel=S.filter(function(s){return s.id==b.dataset.id})[0];location.hash="detalle";route()}
 else if(b.id==="solic"){sol.unshift({s:sel,est:"Enviada"});say("Solicitud enviada. Verás su estado en Mis solicitudes.");location.hash="solicitudes"}
 else if(b.dataset.ac){b.closest("td").innerHTML='<span class="badge">'+BD[b.dataset.ac]+'</span>';say("Solicitud "+b.dataset.ac.toLowerCase()+". Se notificó al solicitante.")}
 else if(b.dataset.val){var tr=b.closest("tr");tr.parentNode.removeChild(tr);say("Registro validado: "+b.dataset.val+".")}
 else if(b.id==="limpiar"){$("#ffil").reset();lista()}
 else if(b.id==="mas"||b.id==="menos"){pct=Math.max(90,Math.min(160,pct+(b.id==="mas"?10:-10)));document.documentElement.style.fontSize=pct+"%";say("Tamaño del texto: "+pct+"%")}
});
["q","fc","fl","fd"].forEach(function(i){$("#"+i).addEventListener("input",lista)});
$("#fhero").addEventListener("submit",function(e){e.preventDefault();$("#q").value=$("#qhero").value;location.hash="servicios";lista()});
$("#ffil").addEventListener("submit",function(e){e.preventDefault()});
$("#flogin").addEventListener("submit",function(e){e.preventDefault();say("Prototipo: ingreso simulado. Ya puedes explorar los servicios.");location.hash="servicios"});
$("#freg").addEventListener("submit",function(e){e.preventDefault();say("Cuenta creada (simulado). Completa ahora tu perfil.");location.hash="perfil"});
$("#fperfil").addEventListener("submit",function(e){e.preventDefault();say("Perfil guardado (simulado).")});
$("#fent").addEventListener("submit",function(e){e.preventDefault();this.reset();say("Servicio enviado a revisión del administrador (simulado).")});
$("#rol").addEventListener("change",function(){rol=this.value;location.hash="inicio";route()});
window.addEventListener("hashchange",route);
var P={};try{P=JSON.parse(localStorage.getItem("acc")||"{}")}catch(e){}
function savep(){P.size=pct;try{localStorage.setItem("acc",JSON.stringify(P))}catch(e){}}
function applyp(){var r=document.documentElement;
 if(P.size){pct=P.size;r.style.fontSize=pct+"%"}
 P.contrast?r.setAttribute("data-contrast","alto"):r.removeAttribute("data-contrast");
 P.theme?r.setAttribute("data-theme",P.theme):r.removeAttribute("data-theme");
 P.space?r.setAttribute("data-space","1"):r.removeAttribute("data-space");
 P.links?r.setAttribute("data-links","1"):r.removeAttribute("data-links");
 P.lector?r.setAttribute("data-lector","1"):r.removeAttribute("data-lector");$("#regla").hidden=!P.regla;$("#lsc").hidden=!P.lsc;cap();
 [["a-con","contrast"],["a-esp","space"],["a-lin","links"],["a-reg","regla"],["a-lsc","lsc"],["a-lec","lector"]].forEach(function(x){$("#"+x[0]).setAttribute("aria-pressed",String(!!P[x[1]]))});
 document.querySelectorAll("[data-th]").forEach(function(b){b.setAttribute("aria-pressed",String((P.theme||"auto")===b.dataset.th))});
}
function voz(){var s=window.speechSynthesis;if(!s){say("Tu navegador no admite lectura en voz alta.");return}
 if(s.speaking){s.cancel();say("Lectura detenida.");return}
 var t=new SpeechSynthesisUtterance(document.getElementById(cur).innerText);t.lang="es-CO";s.speak(t);say("Leyendo la pantalla. Pulsa de nuevo para detener.")}
var ab=$("#abtn"),ap=$("#apanel");
function tgl(o){ap.hidden=!o;ab.setAttribute("aria-expanded",String(o));if(o)$("#a-h").focus()}
ab.addEventListener("click",function(){tgl(ap.hidden)});
ap.addEventListener("keydown",function(e){if(e.key==="Escape"){tgl(false);ab.focus()}});
ap.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;
 if(b.id==="mas"||b.id==="menos"){setTimeout(savep,0);return}
 if(b.id==="a-voz"){voz();return}
 if(b.dataset.tog){P[b.dataset.tog]=!P[b.dataset.tog]}
 else if(b.dataset.th){if(b.dataset.th==="auto")delete P.theme;else P.theme=b.dataset.th}
 else if(b.id==="a-res"){P={};pct=100;document.documentElement.style.fontSize="";say("Opciones de accesibilidad restablecidas.")}
 applyp();savep()});
window.addEventListener("hashchange",function(){if(window.speechSynthesis)speechSynthesis.cancel()});
var CAP={inicio:"Bienvenida. Busca servicios por categoría o escribe lo que necesitas.",acceso:"Ingresa con tu cuenta o crea una nueva.",perfil:"Cuéntanos tu localidad y tus necesidades para recomendarte servicios.",servicios:"Usa los filtros para encontrar servicios. Elige uno para ver el detalle.",detalle:"Lee los requisitos y pulsa Solicitar acceso.",solicitudes:"Aquí ves el estado de tus solicitudes.",derechos:"Conoce tus derechos y cómo pedir atención.",saac:"Toca las imágenes para armar un mensaje y pulsa Hablar.",accesibilidad:"Puedes reportar barreras o descargar herramientas gratis.",entidad:"Registra tus servicios y responde las solicitudes.",admin:"Valida registros y revisa los reportes.",privacidad:"Así protegemos tus datos."};
function cap(){$("#lsct").textContent=CAP[cur]||""}
var SA={"Necesito":[["💧","Agua"],["🍽️","Comer"],["🚻","Baño"],["💊","Medicina"],["🆘","Ayuda"],["🛏️","Descansar"]],"Siento":[["😊","Estoy bien"],["😣","Estoy mal"],["🤕","Me duele"],["😨","Tengo miedo"],["😴","Tengo sueño"]],"Hablar con otros":[["👋","Hola"],["🙏","Gracias"],["✅","Sí"],["❌","No"],["🔁","Repite, por favor"],["🐢","Más despacio"]]},mj=[];
function saac(){$("#saacg").innerHTML=Object.keys(SA).map(function(k){return '<h2>'+k+'</h2><div class="saacb">'+SA[k].map(function(p){return '<button class="btn sec pic" data-w="'+p[1]+'"><span aria-hidden="true">'+p[0]+'</span>'+p[1]+'</button>'}).join("")+'</div>'}).join("")}
function msg(){$("#msg").innerHTML=mj.length?mj.map(function(w){return '<span class="tok">'+w+'</span>'}).join(""):'<span class="hint">El mensaje aparecerá aquí.</span>'}
function hablar(t){var s=window.speechSynthesis;if(!s){say("Tu navegador no admite voz. Muestra el mensaje en pantalla.");return}s.cancel();var u=new SpeechSynthesisUtterance(t);u.lang="es-CO";s.speak(u)}
document.addEventListener("click",function(e){var b=e.target.closest("button,a");if(!b)return;
 if(b.dataset.w){mj.push(b.dataset.w);msg()}
 else if(b.id==="sbor1"){mj.pop();msg()}
 else if(b.id==="sbor"){mj=[];msg()}
 else if(b.id==="shablar"){if(!mj.length){say("Primero elige imágenes para armar un mensaje.");return}hablar(mj.join(", "))}
 else if(b.id==="fab"){tgl(true)}
 else if(b.id==="acerrar"){tgl(false);ab.focus()}
 else if(b.id==="lscx"){P.lsc=false;applyp();savep()}
 else if(b.tagName==="A"&&ap.contains(b)&&b.getAttribute("href").charAt(0)==="#"){tgl(false)}});
document.addEventListener("mousemove",function(e){if(P.regla)$("#regla").style.top=(e.clientY-20)+"px"});
document.addEventListener("touchmove",function(e){if(P.regla)$("#regla").style.top=(e.touches[0].clientY-20)+"px"},{passive:true});
document.addEventListener("focusin",function(e){if(P.regla&&e.target.getBoundingClientRect){var r=e.target.getBoundingClientRect();$("#regla").style.top=(r.top+r.height/2-20)+"px"}});
window.addEventListener("hashchange",cap);
$("#fcon").addEventListener("submit",function(e){e.preventDefault();this.reset();say("Reporte enviado (simulado). Gracias por avisarnos.")});
applyp();saac();msg();init();route();