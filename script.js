const brain = [
    { keys: ["hola", "buen", "marmolito"], ans: "¡Hola! Soy Marmolito. Mi sistema detecta que buscás calidad. ¿Hablamos de paneles EPS o de obra vial?" },
    { keys: ["eps", "concrehaus", "panel", "termi"], ans: "El sistema EPS de HJM es el más racional: ahorrás 50% de tiempo. ¿Querés presupuesto para una vivienda?" },
    { keys: ["precio", "costo", "cuanto", "presupuesto"], ans: "Para darte un presupuesto exacto de HJM, lo mejor es que lo hables con <strong>Javier</strong> por WhatsApp." },
    { keys: ["vial", "calle", "pavimento", "suelo"], ans: "En HJM dominamos la obra vial. Tenemos equipo propio para pavimentación y movimiento de suelos." }
];

function toggleMarmolito() {
    const win = document.getElementById('marmolito-ventana');
    const isVisible = win.style.display === 'flex';
    win.style.display = isVisible ? 'none' : 'flex';
    if(!isVisible) document.getElementById('marmolito-input').focus();
}

function enviarMarmolito() {
    const input = document.getElementById('marmolito-input');
    const text = input.value.trim();

    if(!text) return;

    // 1. Mostrar mensaje del usuario inmediatamente
    appendMsg(text, 'm-user');
    input.value = "";

    // 2. Mostrar "Escribiendo..."
    const dots = document.getElementById('marmolito-typing');
    dots.style.display = 'flex';
    
    const chat = document.getElementById('marmolito-chat');
    chat.scrollTop = chat.scrollHeight;

    // 3. Respuesta de Marmolito con retraso 
    setTimeout(() => {
        dots.style.display = 'none';
        let response = "Es una consulta técnica específica. Te sugiero hablar con <strong>Javier</strong> para asesorarte personalmente.";
        const lowText = text.toLowerCase();

        brain.forEach(item => {
            if(item.keys.some(k => lowText.includes(k))) { response = item.ans; }
        });

        appendMsg(response, 'm-bot');

        if(response.includes("Javier") || response.includes("presupuesto")) {
            setTimeout(showJavierButton, 500);
        }
    }, 1500);
}

function appendMsg(t, c) {
    const chat = document.getElementById('marmolito-chat');
    const d = document.createElement('div');
    d.className = 'msj ' + c;
    d.innerHTML = t;
    chat.appendChild(d);
    chat.scrollTop = chat.scrollHeight;
}

function showJavierButton() {
    const chat = document.getElementById('marmolito-chat');
    const a = document.createElement('a');
    a.className = 'wa-btn';
    a.href = "https://wa.me/543513449890?text=Hola%20Javier,%20vengo%20de%20la%20web%20y%20quiero%20consultarles%20por%20un%20proyecto.";
    a.target = "_blank";
    a.innerHTML = "💬 Hablar con Javier";
    chat.appendChild(a);
    chat.scrollTop = chat.scrollHeight;
}