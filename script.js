// Lógica da Jornada do Alimento — navegação e curiosidades

(function(){
  const stages = Array.from(document.querySelectorAll('.stage'));
  const nextBtn = document.getElementById('nextBtn');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const shareBtn = document.getElementById('shareBtn');
  const foodSelect = document.getElementById('foodSelect');
  const popup = document.getElementById('popup');
  const popupTitle = document.getElementById('popup-title');
  const popupText = document.getElementById('popup-text');
  const closePopup = document.getElementById('closePopup');

  let index = 0; // 0=intro,1=stage1,2=stage2,3=stage3,4=conclusion

  const curiosities = {
    campo: (food)=>`${food}: práticas como rotação de culturas aumentam a saúde do solo e reduzem necessidade de insumos.` ,
    transporte: (food)=>`Sabia que reduzir etapas logísticas e optar por rotas curtas diminui perdas do ${food} em até 30% em alguns casos?`,
    consumo: (food)=>`Aproveitar cascas e sobras do ${food} pode criar novas receitas e reduzir desperdício doméstico.`
  };

  function showStage(i, opts={}){
    if(i < 0 || i >= stages.length) return;
    // hide all
    stages.forEach((s,idx)=>{
      s.classList.remove('active','enter-left','enter-right');
      s.setAttribute('aria-hidden','true');
    });
    const direction = opts.direction || (i>index ? 'right' : 'left');
    const elem = stages[i];
    elem.classList.add('active');
    elem.classList.add(direction === 'right' ? 'enter-right' : 'enter-left');
    elem.setAttribute('aria-hidden','false');
    // small timeout to remove enter classes for smooth animation
    window.requestAnimationFrame(()=>{
      setTimeout(()=>{
        elem.classList.remove('enter-left','enter-right');
      }, 20);
    });
    index = i;
  }

  function next(){
    if(index >= stages.length-1) return;
    showStage(index+1,{direction:'right'});
  }
  function back(){
    if(index <= 0) return;
    showStage(index-1,{direction:'left'});
  }

  // Delegation for controls (data-action)
  document.addEventListener('click',(e)=>{
    const action = e.target.getAttribute && e.target.getAttribute('data-action');
    if(!action) return;
    if(action === 'next') next();
    if(action === 'back') back();
    if(action === 'finish') showStage(stages.length-1,{direction:'right'});
  });

  // Curiosidade buttons
  document.querySelectorAll('.curiosity').forEach(btn=>{
    btn.addEventListener('click', (ev)=>{
      const key = btn.getAttribute('data-curiosity');
      const food = (foodSelect && foodSelect.value) || 'Alimento';
      const text = curiosities[key] ? curiosities[key](food) : 'Fato interessante.';
      openPopup(key.charAt(0).toUpperCase()+key.slice(1), text);
    });
  });

  function openPopup(title, text){
    popupTitle.textContent = title;
    popupText.textContent = text;
    popup.setAttribute('aria-hidden','false');
  }
  function closePopupFn(){
    popup.setAttribute('aria-hidden','true');
  }

  // Start/Next/Restart handlers
  if(nextBtn) nextBtn.addEventListener('click', ()=> next());
  if(startBtn) startBtn.addEventListener('click', ()=> showStage(1,{direction:'right'}));
  if(restartBtn) restartBtn.addEventListener('click', ()=> showStage(0,{direction:'left'}));

  // Share button: tenta usar Web Share, fallback para copiar clipeboard
  if(shareBtn){
    shareBtn.addEventListener('click', async ()=>{
      const food = (foodSelect && foodSelect.value) || 'alimento';
      const text = `Dica: apoie práticas sustentáveis e consuma ${food} de forma consciente! #AgroForte`;
      if(navigator.share){
        try{ await navigator.share({title:'Jornada do Alimento', text}); }
        catch(e){ alert('Compartilhamento cancelado'); }
      } else if(navigator.clipboard){
        try{ await navigator.clipboard.writeText(text); alert('Dica copiada para área de transferência!'); }
        catch(e){ alert(text); }
      } else {
        alert(text);
      }
    });
  }

  // Popup close
  if(closePopup) closePopup.addEventListener('click', closePopupFn);
  document.addEventListener('keydown',(e)=>{ if(e.key === 'Escape') closePopupFn(); });

  // Initialize: show intro (index 0)
  showStage(0);

  // Accessibility: focus management when stage changes
  const observer = new MutationObserver(()=>{
    const active = stages[index];
    if(active){
      const focusable = active.querySelector('button, a, select, input');
      if(focusable) focusable.focus();
    }
  });
  observer.observe(document.body,{attributes:true,childList:true,subtree:true});

})();
