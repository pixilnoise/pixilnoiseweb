(function(){
  const root = document.documentElement;
  const STORAGE_KEY = 'pixilnoise-theme-v2';
  let switching = false;
  let switchTimer = 0;

  function readTheme(){
    try{
      return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark';
    }catch(_){
      return root.dataset.theme === 'light' ? 'light' : 'dark';
    }
  }

  function writeTheme(theme){
    try{ localStorage.setItem(STORAGE_KEY, theme); }catch(_){}
  }

  function updateButtons(theme){
    document.querySelectorAll('[data-theme-toggle]').forEach(btn=>{
      const label = btn.querySelector('[data-theme-label]');
      const isLight = theme === 'light';
      if(label) label.textContent = isLight ? 'LIGHT' : 'DARK';
      btn.setAttribute('aria-pressed', String(isLight));
      btn.setAttribute(
        'aria-label',
        isLight
          ? 'ダークモードに切り替える / Switch to dark mode'
          : 'ライトモードに切り替える / Switch to light mode'
      );
    });
  }

  function applyTheme(theme, animate){
    const next = theme === 'light' ? 'light' : 'dark';

    if(!animate){
      root.dataset.theme = next;
      updateButtons(next);
      return;
    }

    if(switching) return;
    switching = true;
    root.classList.add('theme-switching');

    // Swap colors near the peak of the glitch overlay.
    window.setTimeout(()=>{
      root.dataset.theme = next;
      writeTheme(next);
      updateButtons(next);
    }, 175);

    window.clearTimeout(switchTimer);
    switchTimer = window.setTimeout(()=>{
      root.classList.remove('theme-switching');
      switching = false;
    }, 640);
  }

  function toggleTheme(){
    const current = root.dataset.theme === 'light' ? 'light' : 'dark';
    applyTheme(current === 'light' ? 'dark' : 'light', true);
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    applyTheme(readTheme(), false);

    document.querySelectorAll('[data-theme-toggle]').forEach(btn=>{
      btn.addEventListener('click', toggleTheme);
    });
  });
})();
