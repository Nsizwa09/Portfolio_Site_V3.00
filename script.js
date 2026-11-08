const EMAIL="zondolulama09@gmail.com";
const SKILLS=[
{t:"Development",r:[["Full-stack web development",3],["Programming & logic",3],["Systems analysis & design",3]],g:["HTML/CSS/JS","Responsive design"]},
{t:"Systems & Infrastructure",r:[["Windows 10/11",5],["LAN/WLAN setup",4],["Static IP / DHCP / DNS",4],["Subnetting",3],["Router & switch config",3],["Linux",2]],g:["BIOS","Diskpart","SFC","BSOD fixes"]},
{t:"Tools & Automation",r:[["AnyDesk / TeamViewer",5],["Offline install pipelines",4],["Ticketing & asset inventory",4],["Printer & PC drivers",5]],g:["Ventoy","Rufus","Hiren's Boot CD","Azure fundamentals"]},
{t:"Hardware & Support",r:[["PC assembly & repair",4],["Hardware diagnostics",4],["Boot loop & registry fixes",4],["User & access management",4]],g:["Desktop support","Olivetti","Pantum","Canon"]}];
const JOBS=[
{r:"IT Support Technician (Level 1 & 2)",o:"KwaZulu-Natal Department of Education – Bergville, KZN",d:"Feb 2026 – Present",
b:["Give remote (AnyDesk) and on-site help for OS faults and application errors.","Configure LAN/WLAN, static IP/DHCP, subnetting and DNS to keep systems connected.","Built offline automated software installation pipelines; fixed Windows boot loops, registry failures and hardware faults; set up Olivetti, Pantum and Canon drivers.","Administer user accounts, permissions and network access compliance.","Log issues and keep IT asset inventories current."],g:["AnyDesk","Networking","Automation","Drivers"]},
{r:"ICT Support & Administrative Assistant",o:"Intaba Primary School – Bergville, KZN",d:"Jun 2025 – Nov 2025",
b:["Delivered Level 1 support for staff and learners: workstations, smart devices and printers.","Handled daily administrative tasks and record-keeping for the school.","Installed and configured Windows 10/11, office apps and security software.","Kept accurate hardware inventory logs."],g:["Windows 10/11","Admin support","Inventory"]},
{r:"Volunteer IT Support Technician",o:"Bergville Digital Skills Resource Centre – Bergville, KZN",d:"Feb 2025 – May 2025",
b:["Taught basic digital literacy and device setup to community members and students.","Ran hardware diagnostics, virus clean-ups and OS optimisation.","Configured Wi-Fi access points and local printers for reliable centre-wide internet."],g:["Digital literacy","Wi-Fi","Diagnostics"]}];
const PROJ=[
{n:"This Portfolio",p:"A single-file, responsive résumé site with animated counters, validated contact form and print-ready CV.",f:["Glassmorphism nav & mobile drawer","Interactive timeline","Validated contact form"],s:["HTML","CSS","JavaScript"],gh:"",demo:""},
{n:"Sithomo Family Heritage Site",p:"An isiZulu family history site that preserves the Sithomo clan’s origin story, praise names and traditions, and runs the Qhulaza burial scheme sign-ups.",f:["Clan history, izithakazelo and birth customs","Qhulaza Club rules, fees and trustee details","Photo gallery with full-size viewer","Registration form that prepares an email"],s:["HTML","CSS","JavaScript","isiZulu"],gh:"https://github.com/Nsizwa09/sithomo-family-archive",demo:"https://sithomo.co.za/"}];
const EDU=[
{i:"\u{1F393}",t:"Bachelor of Information Technology in Business Systems",o:"IIE Rosebank College · NQF Level 7",d:"Completed 2024",x:"Programming, Systems Analysis & Design, Programming Logic & Design",s:"Completed"},
{i:"\u2601\uFE0F",t:"Microsoft Certified: Azure Fundamentals (AZ-900)",o:"Microsoft",d:"Passed · Score 790",x:"Cloud concepts, Azure services, security and pricing.",s:"Certified"},
{i:"\u{1F6E0}\uFE0F",t:"Google Technical Support Fundamentals",o:"Google · Coursera",d:"Certificate earned",x:"Troubleshooting, networking, operating systems and support practice.",s:"Certified"},
{i:"\u{1F4BB}",t:"CompTIA A+",o:"CompTIA",d:"Currently preparing",x:"Hardware, software, networking and operational procedures.",s:"In progress"},
{i:"\u{1F4D8}",t:"National Senior Certificate (NQF 4)",o:"Estcourt High School",d:"Completed 2020",x:"Computer Applications Technology, Mathematics, Business Studies",s:"Completed"}];
const $=s=>document.querySelector(s),h=(s)=>s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const tags=a=>'<div class="tags">'+a.map(x=>`<span class="tag mono">${h(x)}</span>`).join('')+'</div>';
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('show'),2600)}
$('#yr').textContent=new Date().getFullYear();
/* render */
$('#sk').innerHTML=SKILLS.map(c=>`<div class="card"><h3>${c.t}</h3>${c.r.map(([n,l])=>`<div class="row"><span>${n}</span><span class="dots" aria-label="${l} of 5">${[1,2,3,4,5].map(i=>`<i class="${i<=l?'f':''}"></i>`).join('')}</span></div>`).join('')}${tags(c.g)}</div>`).join('');
$('#tl').innerHTML=JOBS.map((j,i)=>`<div class="it card ${i==0?'on':''}"><button aria-expanded="${i==0}"><div class="hd"><div><h3>${j.r}</h3><div class="org">${j.o}</div></div><div class="dt mono">${j.d} <span class="chev">\u203A</span></div></div></button><ul>${j.b.map(b=>`<li>${b}</li>`).join('')}</ul>${tags(j.g)}</div>`).join('');
document.querySelectorAll('.it button').forEach(b=>b.onclick=()=>{const it=b.closest('.it');b.setAttribute('aria-expanded',it.classList.toggle('on'))});
$('#pj').innerHTML=PROJ.map((p,i)=>`<div class="card"><h3>${p.n}</h3><p>${p.p}</p><ul>${p.f.map(f=>`<li>${f}</li>`).join('')}</ul>${tags(p.s)}<div class="acts"><a class="btn sm" data-l="${p.gh}" href="${p.gh||'#projects'}" ${p.gh?'target="_blank" rel="noopener"':'aria-disabled="true"'}>GitHub</a><a class="btn sm p" data-l="${p.demo}" href="${p.demo||'#projects'}" ${p.demo?'target="_blank" rel="noopener"':'aria-disabled="true"'}>Live demo</a></div></div>`).join('');
document.querySelectorAll('.acts a[aria-disabled]').forEach(a=>a.onclick=e=>{e.preventDefault();toast('Link coming soon – add it to the PROJ list in the page code.')});
$('#ed').innerHTML=EDU.map(e=>`<div class="card"><div class="ic">${e.i}</div><h3>${e.t}</h3><div class="meta">${e.o}</div><div class="meta mono">${e.d}</div><p style="margin-top:10px;font-size:.88rem;color:var(--mute)">${e.x}</p><span class="pill">${e.s}</span></div>`).join('');
/* CV (print) */
$('#cv').innerHTML=`<h1>Lulama Nsizwa Zondo</h1><p>${EMAIL} | linkedin.com/in/lulama-zondo</p><h2>Profile</h2><p>Detail-oriented IT graduate with hands-on Level 1 and 2 IT support, remote administration, network infrastructure, hardware maintenance and software deployment experience. Full-stack web development, troubleshooting and cloud fundamentals.</p><h2>Experience</h2>${JOBS.map(j=>`<h3>${j.r} – ${j.o} (${j.d})</h3><ul>${j.b.map(b=>`<li>${b}</li>`).join('')}</ul>`).join('')}<h2>Skills</h2>${SKILLS.map(c=>`<p><b>${c.t}:</b> ${c.r.map(r=>r[0]).join(', ')}</p>`).join('')}<h2>Education &amp; certifications</h2><ul>${EDU.map(e=>`<li>${e.t} – ${e.o} (${e.d})</li>`).join('')}</ul>`;

/* drawer */
const root=document.body,bg=$('#burger');
function dr(o){root.classList.toggle('open',o);bg.setAttribute('aria-expanded',o)}
bg.onclick=()=>dr(!root.classList.contains('open'));$('#scrim').onclick=()=>dr(false);
document.querySelectorAll('.drawer a').forEach(a=>a.onclick=()=>dr(false));
addEventListener('keydown',e=>{if(e.key==='Escape')dr(false)});
/* scroll spy */
const secs=[...document.querySelectorAll('section[id]')],ls=[...document.querySelectorAll('#links a')];
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)ls.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'}).observe&&secs.forEach(s=>new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)ls.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+s.id))}),{rootMargin:'-45% 0px -50% 0px'}).observe(s));
/* counters */
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);const t=+e.target.dataset.n,s=performance.now();(function f(n){const p=Math.min((n-s)/1400,1);e.target.textContent=Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(s)}),{threshold:.6});
document.querySelectorAll('[data-n]').forEach(e=>co.observe(e));
/* typing hero */
const roles=["IT Support Technician","Network & Systems Troubleshooter","Azure-certified Graduate"];let ri=0,ci=0,del=false;const ty=$('#typed');
if(matchMedia('(prefers-reduced-motion:reduce)').matches){ty.textContent=roles[0]}else(function tick(){const w=roles[ri];ty.textContent=w.slice(0,ci);if(!del&&ci===w.length){del=true;return setTimeout(tick,1500)}if(del&&ci===0){del=false;ri=(ri+1)%roles.length}ci+=del?-1:1;setTimeout(tick,del?28:55)})();
/* terminal */
const lines=['<span class="d">$</span> whoami','lulama_zondo','<span class="d">$</span> cat stack.txt','<span class="k">windows</span> · <span class="k">networking</span> · <span class="k">dns</span>','<span class="k">anydesk</span> · <span class="k">linux</span> · <span class="k">azure</span>','<span class="d">$</span> ping -c1 opportunity','<span class="k">64 bytes: reply received</span> \u2713'];
let li=0;const tm=$('#term');const tt=()=>{if(li<lines.length){tm.innerHTML+=(li?'\n':'')+lines[li++];setTimeout(tt,matchMedia('(prefers-reduced-motion:reduce)').matches?0:520)}};tt();
/* contact */
$('#copy').onclick=async()=>{try{await navigator.clipboard.writeText(EMAIL);toast('Email copied')}catch(e){const t=document.createElement('textarea');t.value=EMAIL;document.body.appendChild(t);t.select();let ok=false;try{ok=document.execCommand('copy')}catch(_){}t.remove();toast(ok?'Email copied':'Copy failed – '+EMAIL)}};
const rules={n:v=>v.trim().length<2?'Please enter your name.':'',e:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())?'':'Enter a valid email like name@example.com.',m:v=>v.trim().length<10?'Message needs at least 10 characters.':''};
function chk(id){const el=$('#'+id),er=rules[id](el.value);el.parentElement.classList.toggle('bad',!!er);el.parentElement.querySelector('.err').textContent=er;return!er}
Object.keys(rules).forEach(id=>{$('#'+id).addEventListener('input',()=>{if($('#'+id).parentElement.classList.contains('bad'))chk(id)});$('#'+id).addEventListener('blur',()=>chk(id))});
const FORM_ENDPOINT=""; /* optional: paste a Formspree / Web3Forms URL to send messages straight to your inbox */
$('#f').onsubmit=async e=>{e.preventDefault();if(!Object.keys(rules).map(chk).every(Boolean)){toast('Please fix the highlighted fields.');return}
const n=$('#n').value.trim(),em=$('#e').value.trim(),m=$('#m').value.trim(),sub='Portfolio enquiry from '+n,body=m+'\n\n– '+n+' ('+em+')',btn=e.target.querySelector('button[type=submit]');
if(FORM_ENDPOINT){btn.disabled=true;btn.textContent='Sending…';try{const r=await fetch(FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({name:n,email:em,message:m})});if(!r.ok)throw 0;e.target.reset();toast('Message sent – thank you!');btn.disabled=false;btn.textContent='Send message';return}catch(_){toast('Sending failed – use the options below.')}btn.disabled=false;btn.textContent='Send message'}
const d=$('#done'),q=encodeURIComponent;d.hidden=false;
d.innerHTML=`<b>Message ready – choose how to send it</b><p class="d" style="margin:0;font-size:.88rem">Pick one option and press send in your email. Nothing is sent until you do.</p><div class="cta"><a class="btn p sm" target="_blank" rel="noopener" href="https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${q(sub)}&body=${q(body)}">Open in Gmail</a><a class="btn sm" target="_blank" rel="noopener" href="mailto:${EMAIL}?subject=${q(sub)}&body=${q(body)}">Open email app</a><button type="button" class="btn sm" id="cm">Copy message</button></div>`;
$('#cm').onclick=async()=>{const t='To: '+EMAIL+'\nSubject: '+sub+'\n\n'+body;try{await navigator.clipboard.writeText(t);toast('Message copied – paste it into an email')}catch(_){toast('Copy failed – send to '+EMAIL)}};
toast('Your message is ready – pick a send option');d.scrollIntoView({behavior:'smooth',block:'nearest'})};
