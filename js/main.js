
let opcion = prompt ("Seleccione una opcion \n 1- Netflix \n 2- Prime Video \n 3- HBO Go");
    switch (opcion){
        case "1":
            alert ("Selecionaste Netflix")
             menuPago();
             break;
        case "2":
            alert ("seleccionas te prime video")
            menuPago();
            break;
        case "3":
            alert ("seleccionaste hbo go");
            menuP1
            ago();
            break;        
    }


    function menuPago(){
        let pago = prompt ("ingrese opcion de pago: \n 1-Transf \n 2- Tarjeta de Credito");
            switch(pago){
                case "1":
                    alert ("seleccionaste Transferencia");
                    break;
                case "2":
                    alert ("Seleccionaste Tarjeta de credito");
                    break;        
            }
    }