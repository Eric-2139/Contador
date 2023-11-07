function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
        //window.alert('Ta faltando dados animal ')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo invalido! Considerar como passo 1')
            p = 1
        }

        if (i < f) {
            //Contagem progressiva
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} 👉 `
            }
            res.innerHTML += '🏁'
        }else{
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 👉 `
            }
        }
    }
}