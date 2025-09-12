let cor = "azul";


if (cor != "azul" && cor != "vermelho" && cor != "marrom") {
    console.log("Cor Inválida");
} else {
    switch (cor) {
        case "vermelho":
            console.log("Cor Quente");
            break;
        case "azul":
            console.log("Cor Fria");
            break;
        case "marrom":
            console.log("Cor Neutra")
            break;
    }
}
