// ---------- Mobile sidebar toggle ----------
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
  document.querySelectorAll('[data-nav]').forEach(link=>{
    link.addEventListener('click', ()=> sidebar.classList.remove('open'));
  });

  // ---------- Typed role effect ----------
  const roles = ["UI/UX Designer", "Frontend Developer", "Problem Solver", "Pembelajar Seumur Hidup"];
  const typedEl = document.getElementById('typedRole');
  let roleIdx = 0, charIdx = 0, deleting = false;

  function typeLoop(){
    const current = roles[roleIdx];
    if(!deleting){
      charIdx++;
      typedEl.textContent = current.slice(0, charIdx);
      if(charIdx === current.length){
        deleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }
    } else {
      charIdx--;
      typedEl.textContent = current.slice(0, charIdx);
      if(charIdx === 0){
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(typeLoop, deleting ? 35 : 65);
  }
  typeLoop();

  // ---------- Active nav on scroll ----------
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('[data-nav]');

  const navObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        navLinks.forEach(l=>l.classList.remove('active'));
        const active = document.querySelector(`[data-nav][href="#${entry.target.id}"]`);
        if(active) active.classList.add('active');
      }
    });
  }, {threshold:0.4});

  sections.forEach(sec => navObserver.observe(sec));

  // ---------- Reveal on scroll ----------
  const revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ---------- Skill bar fill on view ----------
  const skillObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.style.width = entry.target.dataset.w + '%';
        skillObserver.unobserve(entry.target);
      }
    });
  }, {threshold:0.4});
  document.querySelectorAll('.fill').forEach(el => skillObserver.observe(el));

  // ---------- Contact form (front-end only) ----------
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    formMsg.textContent = "Terima kasih! Pesan Anda telah 'terkirim' (demo front-end).";
    form.reset();
    setTimeout(()=> formMsg.textContent = "", 4000);
  });
