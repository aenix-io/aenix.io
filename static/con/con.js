/* AenixCon microsite: mobile menu + program day tabs. */
(function(){
  var btn=document.querySelector('.hdr__menu'),menu=document.getElementById('mnav');
  if(btn&&menu){
    var setMenu=function(open){
      btn.setAttribute('aria-expanded',open);
      btn.textContent=open?'Close':'Menu';
      menu.hidden=!open;
    };
    btn.addEventListener('click',function(){setMenu(menu.hidden)});
    menu.addEventListener('click',function(e){if(e.target.closest('a'))setMenu(false)});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!menu.hidden){setMenu(false);btn.focus()}});
  }

  var tabs=[].slice.call(document.querySelectorAll('.days [role="tab"]'));
  var select=function(tab){
    tabs.forEach(function(t){
      var on=t===tab;
      t.setAttribute('aria-selected',on);
      t.tabIndex=on?0:-1;
      document.getElementById(t.getAttribute('aria-controls')).hidden=!on;
    });
  };
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){select(t)});
    t.addEventListener('keydown',function(e){
      var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;
      if(!d)return;
      var n=tabs[(i+d+tabs.length)%tabs.length];
      select(n);n.focus();e.preventDefault();
    });
  });
})();
