// ==UserScript==
// @name         Detectar mudança de stock de madeira com som rápido
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Toca som quando o valor de madeira mudar (verificação a cada 100ms)
// @author       Paulo
// @match        https://pt107.tribalwars.com.pt/game.php?village=3459&screen=market&mode=exchange
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    const scriptContent =
    
    const elementId = 'premium_exchange_stock_wood';
    let previousValue = null;

    // Som de alerta
    const audio = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");

    function checkValueChange() {
        const tdElement = document.getElementById(elementId);
        if (tdElement) {
            const currentValue = tdElement.textContent.trim();
            if (previousValue !== null && currentValue !== previousValue) {
                audio.play(); // Toca o som quando o valor mudar
            }
            previousValue = currentValue;
        }
    }

    setInterval(checkValueChange, 100); // verifica a cada 100ms
    ;

    eval(scriptContent);


})();
