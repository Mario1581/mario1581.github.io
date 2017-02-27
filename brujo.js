var puntos = [];

puntos.push( new THREE.Vector2(0, 0));
puntos.push( new THREE.Vector2(1, 0));
puntos.push( new THREE.Vector2(1, .1));
puntos.push( new THREE.Vector2(.5, .1));
puntos.push( new THREE.Vector2(.1, .5));
puntos.push( new THREE.Vector2(0, .5));


var sombrero = new THREE.LatheGeometry(puntos);


var cabeza = new THREE.SphereGeometry(.5);
var panza = new THREE.SphereGeometry(1);

cabeza.translate(0,1,0);
sombrero.translate(0,1.5,0);

var cabezaMalla = new THREE.Mesh(troncoForma);
var panzaMalla = new THREE.Mesh(esferaForma);
var sombreroMalla = new THREE.Mesh(sombrero);

var brujo = new THREE.Geometry();

brujo.merge(cabezaMalla.geometry, cabezaMalla.matrix);
brujo.merge(panzaMalla.geometry, panzaMalla.matrix);
brujo.merge(sombreroMalla.geometry, sombreroMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var brujoMalla = new THREE.Mesh(brujo, material);

var escena = new THREE.Scene();
escena.add(brujoMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );

