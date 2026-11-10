document.addEventListener('DOMContentLoaded', () => {
  const parseFecha = s => { const [d,m,a]=s.split('/').map(Number); return new Date(a,m-1,d); };


  const numeros = document.querySelectorAll('.arete.numero');
  if(numeros.length===4){
    const total=parseInt(numeros[0].textContent);
    const suma=parseInt(numeros[1].textContent)+parseInt(numeros[2].textContent)+parseInt(numeros[3].textContent);
    if(total!==suma) numeros[0].textContent=suma;
  }

  const tPot = document.getElementById('tablaPotreros');
  if(tPot){
    tPot.querySelectorAll('tr').forEach(tr=>{
      const td=tr.querySelectorAll('td');
      if(td.length===4){
        const ocup=parseInt(td[2].textContent), desc=parseInt(td[3].textContent);
        if(desc < ocup*5){
          tr.style.background='#f8d7da';
          tr.title='Error humano: potrero necesita mínimo 5 veces más descanso que ocupación para no pelar el pasto';
        }
        td.forEach(c=>c.textContent=c.textContent);
      }
    });
  }

  
  const tAli = document.getElementById('tablaAlimento');
  if(tAli){
    tAli.querySelectorAll('tr').forEach(tr=>{
      const td=tr.querySelectorAll('td');
      if(td.length===3){
        const kg=parseInt(td[1].textContent);
        if(td[0].textContent.includes('Ternero') && kg>10){
          tr.style.background='#ffdddd';
        }
        td.forEach(c=>c.textContent=c.textContent);
      }
    });
  }

  // REPORTES 
  const btn = document.getElementById('btnReporte');
  if(btn){
    const rol = 'DUENO';
    btn.addEventListener('click', ()=>{
      const reporte = { fecha: new Date().toLocaleString('es-CO'), total: document.querySelectorAll('tr').length, rol, acceso: rol==='DUENO'? 'Completo' : 'Limitado - sin costos' };
      document.getElementById('salidaReporte').textContent = JSON.stringify(reporte, null, 2);
    });
  }
});