//js/Klassen/level.js
/**
 * @file Die Klasse speichert die Daten für verschiedene Level
 */
class level {

    /**
     * 
     * @param {number[][]} grid Die tilemap
     * @param {number} pX Die x-Startposition von Pacman
     * @param {number} pY Die y-Startposition von Pacman
     * @param {number} bX Die x-Startposition von Blinky
     * @param {number} bY Die y-Startposition von Blinky
     * @param {number} cX Die x-Startposition von Clyde
     * @param {number} cY Die y-Startposition von Clyde
     * @param {number} sX Die x-Startposition von Pinky
     * @param {number} sY Die y-Startposition von Pinky
     * @param {number} iX Die x-Startposition von Inky
     * @param {number} iY Die y-Startposition von Inky
     * @param {string} [color="blue"] Die Farbe des Levels
     * @param {number} [id=null] Die Id
     */
    constructor(grid, pX, pY, bX, bY, cX, cY, sX, sY, iX, iY, color = "blue", id = null) {
        /**
         * @member {number[][]} level~grid Die Tilemap ist eine vereinfachte Darstellung des Levels, in der Wände mit einer 1 dargestellt werden
         */
        this.grid = grid;

        /**
         * @member {vector2D} level~pacmanStart Die Startposition von pacman
         */
        this.pacmanStart = new vector2D(pX, pY);

        /**
         * @member {vector2D} level~blinkyStart Die Startposition von pacman
         */
        this.blinkyStart = new vector2D(bX, bY);

        /**
         * @member {vector2D} level~clydeStart Die Startposition von pacman
         */
        this.clydeStart = new vector2D(cX, cY);

        /**
         * @member {vector2D} level~speedyStart Die Startposition von pacman
         */
        this.speedyStart = new vector2D(sX, sY);

        /**
         * @member {vector2D} level~inkyStart Die Startposition von pacman
         */
        this.inkyStart = new vector2D(iX, iY);

        /**
         * @member {number} level~identification Die Identification Nummer ist die Nummer, die Angibt an welcher Stelle das Level ist.
         */
        this.identification = id;

        /**
         * @member {string} level~color Die Farbe die das Level haben soll
         */
        this.color = color;

        /**
         * @member {number[]} level~coins Ein Array in dem für jede Position gespeichert wird ob sich dort eine Münze befindet
         */
        this.coins = new Array(zeilen * spalten);
        this.coins.fill(false);

        /**
         * @member {number} level~coinAnzahl Die Anzahl an Münzen im Level
         */
        this.coinAnzahl = 0;

        /**
         * @member {string} [level~name = "Level"] Der Name dieser Klasse
         * @private
         */
        this.name = "Level"

        /**
         * @member {number} level~mode Die Art der Zielbestimmung der Geister
         */
        this.mode = null;
    }

    /**
     * Erstellt aus einem JavaScript eine Instanz der Klasse
     * @param {object} json Das Objekt aus dem die Klasse erstellt werden soll
     * @example
     * var level = level.from(JSON.parse(Jsonfile));
     */
    static from(json) {
        return Object.assign(new level(), json);
    }

    /**
     * Der getter id gibt die Levelnummer zurück
     * @return {number}
     */
    get id() {
        return this.identification;
    }

    /**
     * Der getter gibt das Level als JSON-Objekt zurück.
     * @return {string} Das Level
     */
    get JSON() {
        return JSON.stringify(this);
    }

    /**
     * Diese Methode downloaded das Level als Json-Datei
     */
    downloadLevel() {
        let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(this.JSON);
        let a = document.createElement('a');
        a.setAttribute("href", dataStr);
        a.setAttribute("download", "level.json");
        document.body.appendChild(a);
        a.click();
        a.remove();
    }
}
//Release/script.js
'use strict';function d(a){let b=a.b.get();b.x=20*b.x+10;b.y=20*b.y+10;if(a.location.cmp(b))return!0}class g{constructor(a,b,c,e,f){this.image=new Image;this.location=new vector2D(b,c);this.i=new vector2D(e,f);null===a?this.image=null:this.image.src=a;this.b=l(this.location)}u(){p.drawImage(this.image,this.location.x-10+r,this.location.y-10+80,20,20)}get v(){return this.location.get()}get C(){return this.i.get()}};class aa extends g{constructor(a,b){super(null,a,b,0,1);this.o=-10;this.h=100;this.j=!0;this.l;this.name="Pacman"}move(){var a=Math.ceil(5*t);this.j=!0;this.b=l(this.location);d(this)&&"up"===u&&1!=x.grid[this.b.y-a][this.b.x]?(this.i.x=0,this.i.y=-a):d(this)&&"down"===u&&1!=x.grid[this.b.y+a][this.b.x]?(this.i.x=0,this.i.y=a):d(this)&&"left"===u&&1!=x.grid[this.b.y][this.b.x-a]?(this.i.x=-a,this.i.y=0):d(this)&&"right"===u&&1!=x.grid[this.b.y][this.b.x+a]&&(this.i.x=a,this.i.y=0);this.l=this.b.get();
this.l.add(this.i);a=this.l;1==x.grid[a.y][a.x]&&d(this)?(this.location.x=20*this.b.x+10,this.location.y=20*this.b.y+10,this.j=!1):this.location.add(this.i)}u(){p.g.save();var a=this.j?this.h+=this.o:this.h,b=Math.ceil(10*t);p.g.translate(this.location.x+r,this.location.y+80);0==this.i.x?p.g.rotate((this.i.y==b?90:270)*Math.PI/180):p.g.rotate((this.i.x==b?0:180)*Math.PI/180);b=a/100;p.g.beginPath();p.g.arc(0,0,10,.2*b*Math.PI,(2-.2*b)*Math.PI);p.g.lineTo(0,0);p.g.closePath();p.g.fillStyle="#FFFF00";
p.g.fill();this.h=Math.max(0,Math.min(100,a));0==a%100&&(this.o*=-1);p.g.restore()}};class y extends g{constructor(a,b,c,e,f,q,h){super(a,b,c,e,f);this.h=[0,0];this.l=new EasyStar.js;this.l.setGrid(x.grid);this.l.setAcceptableTiles([0]);this.l.enableSync();this.j=q;this.B=null;this.color=h;this.start=this.location.get()}u(){super.u();this.A()}A(){}move(){this.b=l(this.location);if(this.b.x>spalten-1||0>this.b.x||this.b.y>zeilen-1||0>this.b.y)this.location=this.start.get(),this.i=new vector2D(0,0);let a=this.b.x-2*this.i.x,b=this.b.y-2*this.i.y,c=!0;try{1==x.grid[b][a]||a==this.b.x&&
b==this.b.y?c=!1:x.grid[b][a]=2}catch{c=!1}d(this)&&(this.o(),this.h[0]==this.b.x&&this.h[1]==this.b.y&&(this.h[0]+=2*this.i.x,this.h[1]+=2*this.i.y),1==x.grid[this.h[1]][this.h[0]]&&(this.h[0]+=1),this.B=this.l.findPath(this.b.x,this.b.y,this.h[0],this.h[1],this.G,this),this.l.calculate());this.location.add(this.i);c&&(x.grid[b][a]=0)}G(a,b){if(null!==a&&a[0]){let c=[a[1].x-a[0].x,a[1].y-a[0].y];c=new vector2D(c[0],c[1]);z(c,.5);b.i=c.get();b.B=a}}};class ba extends y{constructor(a,b,c,e,f){super("./img/blinky2.png",a,b,c,e,f,"red");this.name="Blinky"}o(){if(1==x.mode){let a=l(this.j.v);this.h=[a.x,a.y]}else 0==x.mode&&(this.h=[x.blinkyStart.x,x.blinkyStart.y])}};class ca extends y{constructor(a,b,c,e,f){super("./img/clyde.png",a,b,c,e,f,"orange");this.name="Clyde"}o(){if(1==x.mode){var a=l(this.j.v);let b=a.x;a=a.y;this.h=8<=Math.abs(b-this.b.x)+Math.abs(a-this.b.y)?[b,a]:[x.clydeStart.x,x.clydeStart.y]}else 0==x.mode&&(this.h=[x.clydeStart.x,x.clydeStart.y])}};class da extends y{constructor(a,b,c,e,f){super("./img/inky.png",a,b,c,e,f,"blue");this.name="inky"}o(){if(1==x.mode){let c=l(this.j.v),e=this.j.C.get(),f=-3;z(e,f);for(c.add(e);null===x.grid[c.y][c.x]||void 0===x.grid[c.y][c.x]||1==x.grid[c.y][c.x];){c.sub(e);var a=e,b=f;a.x/=b;a.y/=b;f++;z(e,f);c.add(e)}this.h=[c.x,c.y]}else 0==x.mode&&(this.h=[x.inkyStart.x,x.inkyStart.y])}};class ea extends y{constructor(a,b,c,e,f){super("./img/pinky.png",a,b,c,e,f,"pink");this.name="Pinky"}o(){if(1==x.mode){let c=l(this.j.v),e=this.j.C.get(),f=3;z(e,f);for(c.add(e);null===x.grid[c.y][c.x]||void 0===x.grid[c.y][c.x]||1==x.grid[c.y][c.x];){c.sub(e);var a=e,b=f;a.x/=b;a.y/=b;f--;z(e,f);c.add(e)}this.h=[c.x,c.y]}else 0==x.mode&&(this.h=[x.speedyStart.x,x.speedyStart.y])}};function fa(a,b,c,e=Math.floor(a.canvas.width/b[0].length),f=Math.floor(a.canvas.height/b.length),q=0,h=0){for(let m=0;m<b.length;m++)for(let w=0;w<b[0].length;w++){a.fillRect(w*e+q,m*f+h,e,f,c[b[m][w]],!1);if(x.coins[m*spalten+w]){var n=a,v=Math.round(w*e+q+e/2),E=Math.round(m*f+h+f/2),k=Math.round(f/5);n.g.strokeStyle="black";n.g.fillStyle="yellow";n.g.beginPath();n.g.arc(v,E,k,0,2*Math.PI);n.g.fill();n.g.closePath()}x.coins[m*spalten+w]&&1==x.grid[m][w]&&(--x.coinAnzahl,x.coins[m*spalten+w]=!1)}}
function ha(){var a=p;a.g.clearRect(0,0,a.canvas.clientWidth,a.canvas.height)}
class ia{constructor(a,b,c,e=""){let f=document.createElement("canvas");f.setAttribute("id",a);document.getElementById("left").appendChild(f);this.canvas=document.getElementById(a);this.canvas.setAttribute("width",b);this.canvas.setAttribute("height",c);this.g=this.canvas.getContext("2d");this.canvas.style.backgroundColor=e}get background(){return this.canvas.style.backgroundColor}set background(a){this.canvas.style.backgroundColor=a}get width(){return this.canvas.width}set width(a){this.canvas.width=
a}get height(){return this.canvas.height}set height(a){this.canvas.height=a}drawImage(a,b,c,e,f){this.g.drawImage(a,b,c,e,f)}fillText(a,b,c,e="30px Arial",f="black"){this.g.font=e;this.g.fillStyle=f;this.g.fillText(c,a,b)}fillRect(a,b,c,e,f,q=!1,h="black"){this.g.fillStyle=f;this.g.fillRect(a,b,c,e);this.g.strokeStyle=h;q&&this.g.strokeRect(a,b,c,e)}A(){if(1>=(void 0).length)throw"InvalidPathLength";(void 0).push([0,0]);var a=(void 0).pop();this.g.beginPath(a[0],a[1]);for(a=1;a<(void 0).length;a++)this.g.lineTo((void 0)[a][0],
(void 0)[a][1]);this.g.strokeStyle="black";this.g.stroke()}};var u,A=[];const ja=[38,38,40,40,37,39,37,39,66,65,"\x00"];var B=0;const ka=[78,88,84,"\x00"];var C=0;const la=[66,85,71,"\x00"];var D=0;document.onkeydown=function(a){A[a.key]=!0;ja[B]===a.keyCode?(B++,"\x00"==ja[B]&&(B=0,F+=100)):B=0;ka[C]===a.keyCode?(C++,"\x00"==ka[C]&&(C=0,ma())):C=0;la[D]===a.keyCode?(D++,"\x00"==la[D]&&(D=0,G=!G)):D=0;return!1};document.onkeyup=function(a){return A[a.key]=!1};document.body.onmousedown=function(){};document.body.onmouseup=function(){};function l(a){return new vector2D(Math.floor(a.x/20),Math.floor(a.y/20))};function H(a,b){return Math.floor(Math.random()*(b-a+1))+a};function z(a,b){a.x*=b;a.y*=b}class vector2D{constructor(a,b){this.x=a;this.y=b}get(){return new vector2D(this.x,this.y)}round(){this.x=Math.round(this.x);this.y=Math.round(this.y)}add(a){this.x+=a.x;this.y+=a.y}sub(a){this.x-=a.x;this.y-=a.y}cmp(a){return this.x==a.x&&this.y==a.y?!0:!1}toString(){return"{ x: "+this.x+", y: "+this.y+", mag: "+this.h+" }"}get h(){return Math.sqrt(this.x*this.x+this.y*this.y)}};var G=!1;const zeilen=31,spalten=28,r=(window.innerWidth-20*spalten)/2,I=20*spalten+2*r,J=20*zeilen+160;document.getElementById("left").style.width="100%";const p=new ia("canvas",I,J,"black");var x,K,L,M,F=0,N,O=0,P=["./level/lvl1.json","./level/lvl2.json","./level/lvl3.json","./level/lvl4.json"];const Q=[];var R,S=Infinity,T=0,t=0,U,V=!1;
function na(){ha();A[" "]?(cancelAnimationFrame(N),setTimeout(oa,500)):(p.fillText(I/3,J/2,"Press space to start","50px Times New Roman","white"),N=requestAnimationFrame(na))}function oa(){O=0;U=performance.now();pa(P[O],function(a){qa(a)})}
function W(){t=(performance.now()-U)/1E3;U=performance.now();if(A.w||A.ArrowUp)u="up";else if(A.s||A.ArrowDown)u="down";else if(A.a||A.ArrowLeft)u="left";else if(A.d||A.ArrowRight)u="right";A.r&&(A.r=!1,ra(),oa());A.f&&(A.f=!1,V=!V);ha();fa(p,x.grid,["black",x.color,"red"],20,20,r,80);p.fillText(r,80,"Score: "+F,"20px Arial","white");p.fillText(r+(I-1.15*r)/2,80,"Lives: 3","20px Arial","white");sa();x.coins[L.b.y*spalten+L.b.x]&&(x.coins[L.b.y*spalten+L.b.x]=!1,x.coinAnzahl--,F++);K.forEach(a=>{try{a.move()}catch(b){}a.u()});
for(let a=1;a<K.length;a++)K[a].b.cmp(L.b)&&(ra(),alert("Du hast verloren."));0==x.coinAnzahl&&ma();V&&(p.fillText(I-80,25,"FPS: "+R,"13px Times New Roman","white"),p.fillText(I-80,45,"Max. FPS: "+T,"13px Times New Roman","white"),p.fillText(I-80,65,"Min. FPS: "+S,"13px Times New Roman","white"),p.fillText(I-80,85,"TPF: "+t,"13px Times New Roman","white"));ta();N=requestAnimationFrame(W)}function ma(){ra();G=256==O?!0:!1;pa(P[O%P.length],qa)}
function pa(a,b){var c=new XMLHttpRequest;c.overrideMimeType("application/json");c.open("GET",a,!1);c.onreadystatechange=function(){4==c.readyState&&"200"==c.status&&b(c.responseText)};c.send(null)}var X;
function qa(a){"string"===typeof a?g=JSON.parse(a):g=a;setTimeout(function(b){x=level.from(b);K=[];L=new aa(20*x.pacmanStart.x+10,20*x.pacmanStart.y+10);M=new ba(20*x.blinkyStart.x+10,20*x.blinkyStart.y+10,0,1,L);K.push(L);K.push(M);K.push(new ca(20*x.clydeStart.x+10,20*x.clydeStart.y+10,0,1,L));K.push(new ea(20*x.speedyStart.x+10,20*x.speedyStart.y+10,0,1,L));K.push(new da(20*x.inkyStart.x+10,20*x.inkyStart.y+10,1,1,L,M));O=x.identification;x.mode=1;W();x.mode=0;W();X=setTimeout(c=>{console.log("CHASE");
x.mode=1;X=setTimeout(e=>{e==O&&(console.log("SCATTER"),K.forEach(f=>{"Pacman"!=f.name&&z(f.i,-1)}),x.mode=0,X=setTimeout(f=>{f==O&&(console.log("CHASE"),x.mode=1,X=setTimeout(q=>{q==O&&(console.log("SCATTER"),K.forEach(h=>{"Pacman"!=h.name&&z(h.i,-1)}),x.mode=0,X=setTimeout(h=>{h==O&&(console.log("CHASE"),x.mode=1,X=setTimeout(n=>{n==O&&(console.log("SCATTER"),K.forEach(v=>{"Pacman"!=v.name&&z(v.i,-1)}),x.mode=0,X=setTimeout(v=>{v==O&&(console.log("CHASE"),x.mode=1)},5E3,n))},2E4,h))},5E3,q))},2E4,
f))},7E3,e))},2E4,c)},7E3,O);N=requestAnimationFrame(W)},50,g)}function ra(){clearTimeout(X);cancelAnimationFrame(N);K=null}var Y=null,Z=document.createElement("canvas");Z.setAttribute("width",I);Z.setAttribute("height",J);var ua=Z.getContext("2d");
function sa(){null===Y&&(Y=new Image,Y.src=".\\img\\BugSprites.jpg",Y.onload=function(){ua.fillRect(p.width/2,0,p.width,p.height);for(let a=0;256>a;a++)ua.drawImage(Y,H(0,Y.width),H(0,Y.height),20,20,H(p.width/2,p.width-r),H(80,p.height-80),20,20)});G&&p.g.drawImage(Z,0,0)}function ta(){const a=performance.now();for(;0<Q.length&&Q[0]<=a-1E3;)Q.shift();Q.push(a);R=Q.length;R<S&&2E3<=a&&(S=R);R>T&&(T=R)}
(function(a,b,c=90){var e=0,f=0,q=0,h=0;const n=Object.freeze({F:"up",D:"down",RIGHT:"right",LEFT:"left"});let v=null;const E=document.getElementById(a);E.addEventListener("touchstart",function(k){k=k.touches[0];e=k.screenX;f=k.screenY},!1);E.addEventListener("touchmove",function(k){k=k.touches[0];q=k.screenX;h=k.screenY},!1);E.addEventListener("touchend",function(){const k=q-e,m=h-f;k**2+m**2<c**2||((v=0===m||1<Math.abs(k/m)?0<k?n.RIGHT:n.LEFT:0<m?n.F:n.D)&&"function"===typeof b&&b(E,v),v=null)},
!1)})("left",function(a,b){"down"==b||"up"==b?u="down"==b?"up":"down":u=b});na();

