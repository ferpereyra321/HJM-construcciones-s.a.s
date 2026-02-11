const epsioBrain = [
    { 
        keys: ["hola", "buen", "dia", "tarde", "asistente", "epsio"], 
        ans: "¡Hola! Soy <strong>EPSio</strong>. ¿Hablamos de paneles EPS o de obra vial?" 
    },
    { 
        keys: ["eps", "concrehaus", "panel", "aisla", "termi", "calor", "frio"], 
        ans: "El sistema EPS de HJM aisla 3 veces más que el ladrillo. Es la opción más racional: ahorrás 50% de energía y tiempo." 
    },
    { 
        keys: ["humedad", "hongo", "filtracion", "pared"], 
        ans: "Los paneles EPS son impermeables. Con HJM te olvidás de la humedad de cimientos para siempre. ¿Querés cotizar?" 
    },
    { 
        keys: ["precio", "costo", "cuanto", "presupuesto", "valor"], 
        ans: "Para darte un presupuesto exacto de HJM, lo más racional es que hables con <strong>Javier</strong> por WhatsApp." 
    },
    { 
        keys: ["vial", "calle", "pavimento", "suelo", "maquina"], 
        ans: "En HJM lideramos en obra vial y movimiento de suelos. Tenemos flota propia para pavimentación profesional." 
    }
];

function toggleEpsio() {
    const win = document.getElementById('epsio-ventana');
    const isVisible = win.style.display === 'flex';
    win.style.display = isVisible ? 'none' : 'flex';
    if (!isVisible) document.getElementById('epsio-input').focus();
}

function enviarEpsio() {
    const input = document.getElementById('epsio-input');
    const text = input.value.trim();
    if (!text) return;

    appendEpsioMsg(text, 'm-user');
    input.value = "";

    const dots = document.getElementById('epsio-typing');
    dots.style.display = 'block';
    
    const chat = document.getElementById('epsio-chat');
    chat.scrollTop = chat.scrollHeight;

    setTimeout(() => {
        dots.style.display = 'none';
        let response = "Es una consulta técnica muy buena. Te sugiero hablar con <strong>Javier</strong> para asesorarte profesionalmente.";
        const lowText = text.toLowerCase();

        for (const item of epsioBrain) {
            if (item.keys.some(k => lowText.includes(k))) {
                response = item.ans;
                break;
            }
        }

        appendEpsioMsg(response, 'm-bot');
        if (response.includes("Javier")) showJavierButton();
    }, 1100);
}

function appendEpsioMsg(t, c) {
    const chat = document.getElementById('epsio-chat');
    const d = document.createElement('div');
    d.className = 'msj ' + c;
    d.innerHTML = t;
    chat.appendChild(d);
    chat.scrollTop = chat.scrollHeight;
}

function showJavierButton() {
    const chat = document.getElementById('epsio-chat');
    if (chat.querySelector('.wa-btn')) return;

    const a = document.createElement('a');
    a.className = 'wa-btn';
    a.href = "https://wa.me/5493513449890?text=Hola%20Javier,%20vengo%20de%20la%20web%20y%20quiero%20consultarles%20por%20un%20proyecto.";
    a.target = "_blank";
    a.innerHTML = "💬 Hablar con Javier";
    chat.appendChild(a);
    chat.scrollTop = chat.scrollHeight;
}