let mes = 6;
let resp;
if (mes <= 0 || mes >=13){
    resp= "Digite um mes do ano válido"
} else {
    switch (mes){
        case 1:
            resp = "Janeiro";
            break;
        case 2:
            resp = "Fevereiro";
            break;
        case 3:
            resp = "Março";
            break;
        case 4:
            resp = "Abril";
            break;
        case 5:
            resp = "Maio";
            break;
        case 6:
            resp = "Junho";
            break;
        case 7:
            resp = "Julio";
            break;
        case 8:
            resp = "Agosto";
            break;
        case 9:
            resp = "Setembro";
            break;
        case 10:
            resp = "Outubro";
            break;
        case 11:
            resp = "Novembro";
            break;
        case 12:
            resp = "Dezembro";
            break;
           
        }
    }
    console.log(resp);


