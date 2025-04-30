
let cto = document.createElement('div');

let abt  = document.createElement('div');
abt.classList.add('about');

let tt = document.createElement('h1');
tt.textContent = 'About Us';
let txt = document.createElement('p');
txt.textContent = 'Welcome to Our Restaurant, where every meal is a celebration of flavor, freshness, and community. Born from a passion for great food and genuine hospitality, we bring together traditional recipes and modern flair to create dishes that feel both familiar and exciting. ';

let ct = document.createElement('div');
ct.classList.add('ctt');

let ct_tt = document.createElement('h1');
ct_tt.textContent = "Contact Us";
let inf1 = document.createElement('p');
inf1.textContent = "Location:St'Delvan Boulevard,12 Street";
let inf2 = document.createElement('p');
inf2.textContent = "Woking Hours:8AM-5PM,Everyday except Friday"
let inf3 = document.createElement('p');
inf3.textContent = 'Inquiries:blablabla@bli.com';
let inf4 = document.createElement('p');
inf4.textContent = 'Call at:999-111-710';

abt.appendChild(tt);
abt.appendChild(txt);

ct.appendChild(ct_tt);
ct.appendChild(inf1);
ct.appendChild(inf2);
ct.appendChild(inf3);
ct.appendChild(inf4);

cto.appendChild(abt);
cto.appendChild(ct);

export {cto};

