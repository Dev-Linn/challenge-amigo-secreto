let amigos = [];

function adicionarAmigo() {
    const nomeDoAmigo = document.getElementById("amigo");
    const nome = nomeDoAmigo.value.trim();

    if (nome === "") {
        alert("Amigão, coloca um nome aí");
        return;
    }

    amigos.push(nome);
    console.log(amigos);

    nomeDoAmigo.value = "";
    exibirAmigos();
}

function exibirAmigos() {
    const lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    console.log("Lista limpa");

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) { 
        alert("Não há amigos suficientes para sortear. Adicione mais nomes.");
        return;
    } 
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.querySelector("#resultado");

    amigos = []

    document.getElementById('listaAmigos').innerHTML = '';
    
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;

  
    
    dispararConfete();
}

function dispararConfete() {
    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}
