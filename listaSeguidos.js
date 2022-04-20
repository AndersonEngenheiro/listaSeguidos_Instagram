let listaSeguidos = []

let seguindo = parseInt(document.getElementsByClassName('g47SY')[2].innerHTML)  


function ultimoDaLista(){
    
    document.querySelectorAll('._0imsa').forEach((item,index) => {item.scrollIntoView()})

    if ( (document.getElementsByClassName('wo9IH').length >= seguindo-1)) {
        for(i=0; i<=seguindo; i++){
            listaSeguidos.push(document.getElementsByClassName('_7UhW9   xLCgt        qyrsm KV-D4            se6yk       T0kll')[i].innerHTML)
        }
    }

}

const parar = setInterval(ultimoDaLista,3000)