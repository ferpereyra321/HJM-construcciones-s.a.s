const hjmKnowledge = [
    { keys: ["hola", "buen", "quien"], res: "¡Hola! Soy Max, tu asistente animado. ¿Querés que hablemos sobre el sistema EPS o necesitas un presupuesto?" },
    { keys: ["eps", "concrehaus", "panel"], res: "El sistema EPS ahorra 50% de tiempo en obra y es térmico. ¡Es el futuro! ¿Para qué zona buscás construir?" },
    { keys: ["precio", "presupuesto", "cuanto"], res: "Los costos varían por m2. Dejanos tu WhatsApp y Fernando te contacta con la cotización exacta." },
    { keys: ["vial", "asfalto", "suelo"], res: "Realizamos obras viales completas con maquinaria propia. ¿Es para un barrio o empresa?" }
];

function toggleHjmChat() {
    document.getElementById('chat-window').classList.toggle('hidden');
}

function handleEnter(e) { if(e.key === 'Enter') sendHjmMsg(); }

function sendHjmMsg() {
    const input = document.getElementById('chat-input');
    const txt = input.value.trim();
    if(!txt) return;

    addBubble(txt, 'user');
    input.value = "";

    // Simular pensamiento
    setTimeout(() => {
        let response = "No entiendo esa parte técnica, pero si hacés clic en el botón de WhatsApp, un ingeniero te asesora ahora.";
        const msg = txt.toLowerCase();
        
        for(let item of hjmKnowledge) {
            if(item.keys.some(k => msg.includes(k))) {
                response = item.res;
                break;
            }
        }
        addBubble(response, 'bot');
    }, 1200);
}

function addBubble(txt, type) {
    const box = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.className = (type === 'user') ? 'msg-user' : 'msg-bot';
    div.innerHTML = txt;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
}