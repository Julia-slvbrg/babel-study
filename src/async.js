const funcaoPesada = new Promise((resolve, reject) => {
    try{
        let execucoes = 0;
        for(let i = 0; i < 1000000000; i++){
            execucoes++
        };
        resolve(execucoes);
    } catch(e){
        reject('Deu erro na iteração');
    };
});

/* console.log('início');
funcaoPesada.then(result => console.log(result))
    .catch(error => console.log(error));
console.log('fim'); */

const promiseParameters = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado: ${login}`)
        }, 3000)
    })
}


async function execucaoPrincipal(){
    console.log('início');


    /* await funcaoPesada.then(result => console.log(result))
        .catch(error => console.log(error));
    */

        promiseParameters('julia', 12346).then(result => console.log(result))

    try{
        const result = await funcaoPesada;
        console.log(result);
    }catch(e){
        console.log(e);
    }
    console.log('fim');
}

execucaoPrincipal()



