export function semaforo(cor) {
    let msg = " ";
    if (cor == "verde") {
        msg = "pode passar meu chapa";
    }
    else if (cor == "vermelho") {
        msg = "Aguarde";
    }
    else {
        msg = "inválido";
    }
    return msg;
}

export function diaSemana(dia) {
    let msg = "";

    if (dia > 6 || dia < 0) {
        msg = "dia invalido";
    }

    if (dia == 0) {
        msg = "domingo";
    }

    else if (dia == 1) {
        msg = "segunda";
    }
    else if (dia == 2) {
        msg = "terça";
    }
    else if (dia == 3) {
        msg = "quarta";
    }
    else if (dia == 4) {
        msg = "quinta";
    }
    else if (dia == 5) {
        msg = "sextou";
    }
    else if (dia == 6) {
        msg = "sabadou";
    }
    return msg;
}

export function sequencia(limite) {
    let n = []
    let num = 0
    for (let i = 0; i <= limite; i++) {
        n[i] = num * 2
        num++
    }
    return n
}

export function fatorial(limite) {
        let num = limite
        for(let i = limite; i > 0; i--){
            if((i -1) != 0){
            num = num * (i-1) 
            
                
            }
        }
        return num;
    }


