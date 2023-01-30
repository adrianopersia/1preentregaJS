let nombre = prompt("Bienvenido al simulador interactivo tipo carrito!, porfavor ingrese su nombre.");
alert("Bienvenido "+nombre+"!");
let salir;
let prenda;
let suma = 0;

do{
    prenda = prompt("Que desea comprar? // [r: Remeras // p: Pantalones]");
    switch(prenda){
        case 'r':
            r = prompt("Remera vans $5000 / Desea comprarla? s(si)/n(no)");
            if(r==='s'){
                alert("Compra agregada al carrito con exito!");
                suma = suma + 5000;
            }else{
                alert("Prosiga con su compra.");
            }
        break;
        case 'p':
            r = prompt("Pantalon lacoste $20000 / Desea comprarlo? s(si)/n(no)");
            if(r==='s'){
                alert("Compra agregada al carrito con exito!");
                suma = suma + 20000;
            }else{
                alert("Prosiga con su compra.");
            }
        break;
    }

    salir = prompt("Si desea seguir comprando presione s(si)/n(no)");

}while(salir!='n');

alert("Su compra total es de "+suma+" pesos.");


