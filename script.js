// mette il template dopo che hai schiacchiato il bottone nel menu laterale sinistro
function changeContent(id) {
    const tableContainer = document.querySelector('.table-container');
    tableContainer.innerHTML = templates[id];
}

function handleSubMenuClick(event) {
    const targetId = event.target.id;
    changeContent(targetId);
}
document.querySelectorAll('#Metodica li[id]').forEach(submenu => {
    submenu.addEventListener('click', handleSubMenuClick);
});
// gestisce tab del menu laterale sinsitro
function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// apre menu laterale sinsitro
document.querySelector('.right-sidebar .toggle-area').addEventListener('click', function () {
    document.querySelector('.right-sidebar').classList.toggle('open');
});



document.querySelector('.toggle-area').addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    const tabBar = document.querySelector('.tab-bar');
    sidebar.classList.toggle('open');

    if (sidebar.classList.contains('open')) {
        tabBar.style.display = 'flex';
    } else {
        tabBar.style.display = 'none';
    }
});


// Apri la scheda "Metodica" di default 

document.getElementById("Metodica").style.display = "block";


/////////// Update Template con indicazionii clinica 
let currentTemplateId = null;

function fillTemplate(templateId, indicazioneClinica) {
    currentTemplateId = templateId;
    const template = templates[templateId];
    const content = document.getElementById('content');
    content.innerHTML = template;
  
    const indicazioneClinicaRow = document.getElementById('indicazione-clinica-row');
    if (indicazioneClinica) {
      indicazioneClinicaRow.style.display = '';
    } else {
      indicazioneClinicaRow.style.display = 'none';
    }
  }
  
  ///aggiungi un event listener alla checkbox per aggiornare il template quando lo stato della checkbox cambia:
  document.getElementById('indicazione-clinica-checkbox').addEventListener('change', (e) => {
    const indicazioneClinica = e.target.checked;
    fillTemplate(currentTemplateId, indicazioneClinica);
  });
  
  










///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Aggiungi gli ID e i sottomenu per ciascuna delle opzioni del menu "Clinica-Metodica"
const tcOptions = [
    { id: 'head', options: ['HEAD option 1', 'HEAD option 2'] },
    { id: 'neck', options: ['NECK option 1', 'NECK option 2'] },
    { id: 'sinuses', options: ['SINUSES option 1', 'SINUSES option 2'] },
    { id: 'chest', options: ['CHEST option 1', 'CHEST option 2'] },
    { id: 'abdomen', options: ['ABDOMEN option 1', 'ABDOMEN option 2'] },
    { id: 'abdomen-pelvis', options: ['ABDOMEN-PELVIS option 1', 'ABDOMEN-PELVIS option 2'] },
    { id: 'pankreas', options: ['PANKREAS option 1', 'PANKREAS option 2'] },
    { id: 'spine', options: ['SPINE option 1', 'SPINE option 2'] },
    { id: 'angio-tc', options: ['ANGIO TC option 1', 'ANGIO TC option 2'] },
];

const mriOptions = [
    { id: 'neckRM', options: ['MR NECK option 1', 'MR NECK option 2'] },
    { id: 'cardiacRM', options: ['MR CARDIAC option 1', 'MR CARDIAC option 2'] },
    { id: 'angioRM', options: ['ANGIO MR option 1', 'ANGIO MR option 2'] },
    { id: 'wholebodyRM', options: ['MRI WHOLEBODY option 1', 'MRI WHOLEBODY option 2'] },
    { id: 'abdomenRM', options: ['MR ABDOMEN option 1', 'MR ABDOMEN option 2'] },
    { id: 'prostataRM', options: ['MR PROSTATA option 1', 'MR PROSTATA option 2'] },
    { id: 'shoulderRM', options: ['MR SHOULDER option 1', 'MR SHOULDER option 2'] },
    { id: 'elbowRM', options: ['MR ELBOW option 1', 'MR ELBOW option 2'] },
    { id: 'spineRM', options: ['MR SPINE option 1', 'MR SPINE option 2'] },
    { id: 'wristRM', options: ['MR WRIST option 1', 'MR WRIST option 2'] },
    { id: 'hipRM', options: ['MR HIP option 1', 'MR HIP option 2'] },
    { id: 'kneeRM', options: ['MR KNEE option 1', 'MR KNEE option 2'] },
    { id: 'ankleRM', options: ['MR ANKLE option 1', 'MR ANKLE option 2'] },
];

const ecoOptions = [
    { id: 'eco', options: ['ECO option 1', 'ECO option 2'] },
];

// aggiungine uno uguale per l'RX
const rxOptions = [
    { id: 'rx', options: ['RX option 1', 'RX option 2'] },
];


