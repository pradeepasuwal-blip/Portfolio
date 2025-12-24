document.addEventListener('DOMContentLoaded',()=>{
  // Project search
  const search = document.getElementById('project-search');
  const projects = Array.from(document.querySelectorAll('.project'));
  if(search){
    search.addEventListener('input',e=>{
      const q = e.target.value.trim().toLowerCase();
      projects.forEach(p=>{
        const text = (p.textContent||'').toLowerCase();
        p.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }

  // Contact form: open mail client as fallback
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const fd = new FormData(form);
      const name = fd.get('name');
      const email = fd.get('email');
      const msg = fd.get('message');
      const subject = encodeURIComponent('Portfolio message from '+name);
      const body = encodeURIComponent('From: '+name+' ('+email+')\n\n'+msg);
      window.location.href = `mailto:pradeepa@example.com?subject=${subject}&body=${body}`;
    });
  }

  // Copy email
  const copyBtn = document.getElementById('copy-email');
  if(copyBtn){
    copyBtn.addEventListener('click',()=>{
      navigator.clipboard.writeText('pradeepa@example.com').then(()=>{
        copyBtn.textContent='Copied!';
        setTimeout(()=>copyBtn.textContent='Copy Email',1500);
      });
    });
  }
});
