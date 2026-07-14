const fs = require('fs');

const path = 'index.html';
let content = fs.readFileSync(path, 'utf8');

// Replacements
content = content.replace(/50 lugares/gi, '30 puestos');
content = content.replace(/150 lugares/gi, '150 puestos');
content = content.replace(/Lugares ilimitados/gi, 'Puestos ilimitados');
content = content.replace(/lugares libres/gi, 'puestos libres');
content = content.replace(/10 lugares/gi, '10 puestos');
content = content.replace(/lugares configurado/gi, 'puestos configurados');

/* CSS fixes for simulator arrows and floating badge */
content = content.replace('.simulator{', `
  .simulator-wrapper{ position:relative; max-width:860px; margin: 0 auto 50px; }
  .try-me-badge{
    position: absolute; top: -14px; left: 50%; transform: translateX(-50%) rotate(-2deg);
    background: var(--green); color: #000; font-family: var(--head); font-weight: 700;
    font-size: .85rem; padding: 6px 14px; border-radius: 99px;
    box-shadow: 0 4px 12px rgba(62,207,142,.4); animation: pulseDot 2s infinite;
    z-index: 10;
  }
  .simulator{`);

content = content.replace('<div class="simulator">', `
    <div class="simulator-wrapper">
      <div class="try-me-badge">¡Pruébame! Experimenta el flujo de trabajo 👇</div>
      <div class="simulator">`);

content = content.replace('      <div class="sim-signal">', `      </div><!-- wrapper -->\n      <div class="sim-signal">`);
content = content.replace('    <div class="simulator">', `    <div class="simulator">`); // will fix wrapper closing dynamically

fs.writeFileSync(path, content, 'utf8');
console.log("Done");
