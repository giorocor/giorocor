const btnIniciar= document.getElementById('boton')
const amarillo = document.getElementById('amarillo')
const azul = document.getElementById('azul')
const rojo = document.getElementById('rojo')
const verde = document.getElementById('verde')
const mensaje= document.getElementById('mensaje')
const btcolor = document.querySelectorAll('.colors')
const start= document.getElementById('inicio')
const score= document.getElementById('result')

class inicio{
    
    constructor(){ 
        start.style.zIndex='-1'
        btnIniciar.classList.toggle('hide')
        this.secuencia=[]
        this.colores={
          amarillo, 
          azul,
          rojo,
          verde }
        
          score.innerHTML='Level:1'
        
        for(var i=0;i<btcolor.length;i++){
        btcolor[i].onclick=()=>this.elegirColor();}
        //this.registrarEvento()
        this.iniciar()     
        
      }

  

    iniciar(level=1){ 
        this.nivel= level

     

        setTimeout(()=>this.crearSecuencia(),1000)  
    }


    crearSecuencia(){    
        this.secuencia = new Array(this.nivel).fill(0).map(x=>Math.floor(Math.random()*4))
        this.siguienteNivel()
    }
    
    siguienteNivel(){
        this.subnivel=0
        this.iluminar()
    }

    iluminar(){
         for(var i=0; i<this.nivel;i++){
             let color =this.numeroAcolor(this.secuencia[i])
             setTimeout(()=>this.encenderLuz(color),800*i)
         } 
    }

    encenderLuz( color, seg=600){
        this.colores[color].classList.add('light')
        setTimeout(()=>this.apagarLuz(color),seg)
    }

    apagarLuz(color){
        this.colores[color].classList.remove('light')
    }
    

    //  registrarEvento(){
    //     document.querySelectorAll(".colors").forEach(cubo => {
    //         cubo.addEventListener('click', this.elegirColor.bind(this))
    //         })

    // //    // debugger
    // //     this.colores.amarillo.addEventListener('click', this.elegirColor.bind(this))
    // //     this.colores.rojo.addEventListener('click', this.elegirColor.bind(this))
    // //     this.colores.azul.addEventListener('click',  this.elegirColor.bind(this))
    // //     this.colores.verde.addEventListener('click', this.elegirColor.bind(this))
    //  }

    //  removerEvento(){
    // //     this.colores.amarillo.removeEventListener('click', this.elegirColor.bind(this))
    // //     this.colores.rojo.removeEventListener('click', this.elegirColor.bind(this))
    // //     this.colores.azul.removeEventListener('click', this.elegirColor.bind(this))
    // //     this.colores.verde.removeEventListener('click', this.elegirColor.bind(this))
    // document.querySelectorAll(".colors").forEach(cubo => {
    //     cubo.removeEventListener('click', this.elegirColor.bind(this))
    //     })
    // }

   
    elegirColor(event){
         //var tipo = ev.type 
    if( btnIniciar.classList.contains('hide')){
         var even=window.event||event;
         const numColor = even.target.dataset.color
         const nColor = this.colorAnumero(numColor)
         this.encenderLuz(numColor,200)

       
        if(this.secuencia[this.subnivel]==nColor){
 
             this.subnivel++
             
             if(this.nivel===this.subnivel){
                    this.nivel++
                    var level= this.nivel
                    score.innerHTML='Level:'+ this.nivel
                    //this.removerEvento()
                    setTimeout(()=>this.iniciar(level),500)
                 }
        } else {
            //this.removerEvento()
            setTimeout(()=>this.lose(),100)
        }
    }}

    lose(){
        start.style.zIndex='10'
        btnIniciar.classList.toggle('hide')
        btnIniciar.innerHTML='GAME OVER'
        score.innerHTML='Level:'
        const alertLose= setTimeout(()=>btnIniciar.innerHTML='START',500)
        
        
      
        //const alertLose= setTimeout(()=>btnIniciar.innerHTML='GAME OVER')
    }

    numeroAcolor(color){
        switch (color){
            case 0:
                return 'amarillo'
                break
            case 1:
                return 'azul'
                break
            case 2:
                return 'rojo'
                break
            case 3:
                return 'verde'
                break
        }
    }

    colorAnumero(numColor){
        switch (numColor){
            case 'amarillo':
                return 0
                break
            case 'azul':
                return 1
                break
            case 'rojo':
                return 2
                break
            case 'verde':
                return 3
                break
        }
    }
}

function empezarJuego(){
    const game = new inicio()
}

//------------------------------------
// var colores= {
//   amarillo, 
//   azul,
//   rojo,
//   verde
// }
// var nivel, subnivel, level
// var secuencia=[]
// secuencia = new Array(10).fill(0).map(x=>Math.floor(Math.random()*4))
// registrarEvento()
// function empezarJuego(level=1){
  
//   btnIniciar.classList.toggle('hide')
//   nivel= level
//   setTimeout(()=>crearSecuencia(),1000)  

// }

// function crearSecuencia(){    
  
//   siguienteNivel(nivel)
// }

// function siguienteNivel(){
//   subnivel=0
  
//   iluminar()
// }


// function iluminar(){
//   for(let i=0; i<nivel;i++){
//       var color =numeroAcolor(secuencia[i])
//       setTimeout(()=>encenderLuz(color),500*i)
//   } 
// }

// function encenderLuz(color){
//  colores[color].classList.add('light')
//  setTimeout(()=>apagarLuz(color),200)
// }

// function apagarLuz(color){
//  colores[color].classList.remove('light')
// }




// function numeroAcolor(color){
//   switch (color){
//       case 0:
//           return 'amarillo'
//           break
//       case 1:
//           return 'azul'
//           break
//       case 2:
//           return 'rojo'
//           break
//       case 3:
//           return 'verde'
//           break
//   }
// }

// function colorAnumero(numColor){
//   switch (numColor){
//       case 'amarillo':
//           return 0
//           break
//       case 'azul':
//           return 1
//           break
//       case 'rojo':
//           return 2
//           break
//       case 'verde':
//           return 3
//           break
//   }
// }


// function registrarEvento(){
//   document.querySelectorAll(".colors").forEach(cubo => {
//       cubo.addEventListener('click', elegirColor)
//       })
// }

// function removerEvento(){
// document.querySelectorAll(".colors").forEach(cubo => {
//   cubo.removeEventListener('click', elegirColor)
//   })
// }


// function elegirColor(ev){
//    var tipo = ev.type 
//    const numColor = ev.target.dataset.color
//    const nColor = colorAnumero(numColor)
//    encenderLuz(numColor)

 
//   if(secuencia[subnivel]==nColor){

//        subnivel++
       
//        if(nivel===subnivel){
//               nivel++
//               level=nivel
//               //removerEvento()
//               setTimeout(()=> crearSecuencia(),500)
//            }
//   } else {
//      // removerEvento()
//      level=1
//       setTimeout(()=> crearSecuencia(),500)
//   }
// }

//--------------------------------




// //https://alanzzant.github.io/SimonColors/

// const mensaje = document.getElementById('mensaje')
// const boton= document.getElementById('boton')


//     boton.addEventListener('click', addP )


// function addP(){
//     debugger
//     const elementoSpan = document.createElement('span')
//     elementoSpan.innerHTML="gio <br>"
//     document.body.appendChild(elementoSpan)
// }  

// const boton = document.getElementById('boton')
// const mensaje = document.getElementById('mensaje')
// const colores= document.querySelectorAll('.colors')



// function habilitar(){
//     boton.classList.toggle('hide')
//     colores.forEach(color=>{color.addEventListener('click',agregar)})
// }

// const agregar = ()=>{
//     const nuevo = document.createElement('p')
//     mensaje.appendChild(nuevo).innerHTML='hola'
//     boton.classList.toggle('hide')
//   colores.forEach(color=>{color.removeEventListener('click',agregar)})
// }

//-----------------------------------


// var ini=document.getElementsByTagName("input")[0];
// ini.onclick=inicio;

// function inicio()
// {var a=document.getElementsByTagName("article");
// var bot=[];
// var sec=[];
// var sec2=[];
// var puntos=0;
// var temp=0;
// var tiempo;
// ban=0;
// for(i=0;i<a.length;i++)
// {bot.push(a[i]);a[i].onclick=marcar;}

// menu();
// setTimeout(cargar,1000);

// function cargar()
// {var item=bot[Math.floor(Math.random()*bot.length)];
// sec.push(item);
// copia();}

// function copia()
// {for(i=temp;i<sec.length;i++)
// {if(sec[i]!=sec2[i])
// {sec2.push(sec[i]);
// colorSec(i);
// temp=i;
// break;}}

// if(i>=sec.length)
// {tiempo=setTimeout(perder,3000);}}

// function colorSec(pos)
// {i=pos;
//     if(sec[i].id=="bot1")
// {sec[i].style.backgroundColor="rgba(255, 0, 0, 1)";sonido("audio/Bot1.mp3");}

// if(sec[i].id=="bot2")
// {sec[i].style.backgroundColor="rgba(0, 0, 255, 1)";sonido("audio/Bot2.mp3");}

// if(sec[i].id=="bot3")
// {sec[i].style.backgroundColor="rgba(255, 255, 0, 1)";sonido("audio/Bot3.mp3");}

// if(sec[i].id=="bot4")
// {sec[i].style.backgroundColor="rgba(0, 255, 0, 1)";sonido("audio/Bot4.mp3");}

// tiempoColor=setTimeout(apagarSec,500,i);}

// function apagarSec(i)
// {sec[i].style.backgroundColor="";clearTimeout(tiempoColor);tiempoSec=setTimeout(copia,200);}

// function marcar(event)
// {var acc=window.event||event;
//     var pos=acc.target||acc.srcElement;
//     if(pos.id=="bot1")
// {sonido("audio/Bot1.mp3");pos.style.backgroundColor="rgba(255, 0, 0, 1)";}
// if(pos.id=="bot2")
// {sonido("audio/Bot2.mp3");pos.style.backgroundColor="rgba(0, 0, 255, 1)";}
// if(pos.id=="bot3")
// {sonido("audio/Bot3.mp3");pos.style.backgroundColor="rgba(255, 255, 0, 1)";}
// if(pos.id=="bot4")
// {sonido("audio/Bot4.mp3");pos.style.backgroundColor="rgba(0, 255, 0, 1)";}

// apagarColor=setTimeout(apagarMarc,500,pos);ganar(pos);}

// function apagarMarc(pos)
// {botPos=pos
// botPos.style.backgroundColor="";clearTimeout(apagarColor);}

// function ganar(p)
// {if(sec2[0]==p)
// {sec2.shift();clearTimeout(tiempo);controlGanar();}
// else
// {clearTimeout(tiempo);perder();}}

// function controlGanar()
// {if(sec2.length==0)
// {puntos=puntos+1;temp=0;tiempoCargar=setTimeout(cargar,1000);}
// else
// {tiempo=setTimeout(perder,3000);}}

// function perder()
// {sonido("audio/Perder.mp3")
// ban=1;
// menu();
// for(i=0;i<4;i++)
// {if(bot[i].style.backgroundColor!="")
// {apagarMarc(bot[i]);}}
// if(tiempo){clearTimeout(tiempo);};if(sec.length>1){clearTimeout(tiempoColor);};if(sec.length>1){clearTimeout(tiempoSec);};if(sec.length>1){clearTimeout(tiempoCargar);};}

// function menu()
// {var cont=document.getElementsByClassName("contenedor")[0];var h2=document.getElementsByTagName("h2")[0];if(ban==0)
// {cont.style.display="none";}
//  if(ban==1)
// {cont.style.display="grid";h2.innerHTML="Tu puntaje: "+puntos;ini.value="Reiniciar";}}
// function sonido(url)
// {var sonido=new Audio();sonido.src=url;sonido.play();}}