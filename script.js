AOS.init();

document.getElementById("year").innerText=new Date().getFullYear();

const dict={
it:{
home:"Home",
services:"Servizi",
products:"Prodotti",
suppliers:"Fornitori",
about:"About",
contacts:"Contatti",

hero_text:"Design, consulenza e produzione calzature",

services_text:"Sviluppo design, prototipazione, engineering di prodotto e coordinamento produttivo.",

products_text:"Produzione di calzature complete e semilavorati con standard qualitativi industriali.",

suppliers_text:"Collaboriamo esclusivamente con fabbriche professionali selezionate per capacità produttiva, continuità operativa e standard qualitativi.",

suppliers_text2:"Network produttivo specializzato per garantire flessibilità e scalabilità.",

about1:"Competenza tecnica nel settore footwear",
about2:"Rete industriale internazionale",
about3:"Controllo qualità strutturato",
about4:"Supporto dallo sviluppo al bulk",

address:"Indirizzo: INSERIRE INDIRIZZO"
},

en:{
home:"Home",
services:"Services",
products:"Products",
suppliers:"Suppliers",
about:"About",
contacts:"Contacts",

hero_text:"Footwear design, consultancy and production",

services_text:"Design development, prototyping, product engineering and production coordination.",

products_text:"Footwear and semi-finished production with industrial quality standards.",

suppliers_text:"We cooperate only with professional factories selected for production capacity, reliability and quality standards.",

suppliers_text2:"Specialized manufacturing network ensuring flexibility and scalability.",

about1:"Technical footwear expertise",
about2:"International industrial network",
about3:"Structured quality control",
about4:"Support from development to bulk",

address:"Address: INSERT ADDRESS"
}
};

let lang=navigator.language.startsWith("it")?"it":"en";

const btn=document.getElementById("langBtn");

function setLang(l){
document.documentElement.lang=l;

document.querySelectorAll("[data-i18n]").forEach(el=>{
const k=el.dataset.i18n;
if(dict[l][k]) el.innerText=dict[l][k];
});

btn.innerText=(l==="it")?"EN":"IT";
}

setLang(lang);

btn.onclick=()=>{
lang=(lang==="it")?"en":"it";
setLang(lang);
};