
function handleSubMenuClick(event) {
    const targetId = event.target.id;
    changeContent(targetId);
}
document.querySelectorAll('#Metodica li[id]').forEach(submenu => {
    submenu.addEventListener('click', handleSubMenuClick);
});

document.querySelectorAll('.sidebar li').forEach(menuItem => {
    const subMenu = menuItem.querySelector('ul');
    if (subMenu) {
        menuItem.addEventListener('click', (event) => {
            event.stopPropagation();
            menuItem.classList.toggle('clicked');
        });
    }
});


// gestisce tab del menu laterale sinsitro
function openTab(evt, tabName) {
    if (evt) evt.stopPropagation(); // Aggiungi questa riga per fermare la propagazione dell'evento di click
    
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
    if (evt) evt.currentTarget.className += " active";
}

// apre menu laterale destro
document.querySelector('.right-sidebar .toggle-area').addEventListener('click', function () {
    document.querySelector('.right-sidebar').classList.toggle('open');
});



// Aggiungi una variabile per tracciare lo stato del sottomenu
let submenuOpen = false;

// Modifica la funzione toggle-area per aprire o chiudere il sottomenu in base allo stato attuale
document.querySelector('.toggle-area').addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    const tabBar = document.querySelector('.tab-bar');
    
    // Se il sottomenu è aperto, chiudilo
    if (tabBar.getAttribute('data-open') === 'true') {
        tabBar.style.display = 'none';
        tabBar.setAttribute('data-open', 'false');
    } 
    // Se il sottomenu è chiuso, aprilo
    else {
        tabBar.style.display = 'flex';
        tabBar.setAttribute('data-open', 'true');
    }
    
    sidebar.classList.toggle('open');
});


// Apri la scheda "Metodica" di default 

document.getElementById("Metodica").style.display = "block";


/////////// Update Template con indicazionii clinica 
let currentTemplateId = null;

function fillTemplate(templateId, indicazioneClinica) {

    if (currentTemplateId === templateId) {
        return;
    }
    currentTemplateId = templateId;
    const content = document.querySelector('.table-container');
    content.innerHTML = templates[templateId];

    // Aggiunta degli event listener
    addEventListeners();

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
  
  
  function updateTemplate(optionId, isChecked) {
    const rowId = optionId + '-row';
    const row = document.getElementById(rowId);
    if (row) {
        row.style.display = isChecked ? '' : 'none';
    }
}



////
// Aggiungere un event listener "click" a ciascuna delle sezioni non editabili del template e apri la barra laterale destra quando viene fatto clic su una sezione.
function addEventListeners() {
    const nonEditableSections = document.querySelectorAll('[data-section]');

    nonEditableSections.forEach(section => {
        section.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const data = sectionData[sectionId];
            if (data) {
                document.getElementById('table-desc').textContent = data.tableDesc;
                document.getElementById('normal-desc').textContent = data.normalDesc;
                document.getElementById('image-desc').textContent = data.imageDesc;
                const pathologyList = document.getElementById('pathology-list');
                pathologyList.innerHTML = '';
                data.pathologyList.forEach(pathology => {
                    const li = document.createElement('li');
                    li.textContent = pathology;
                    pathologyList.appendChild(li);
                });
                openTab(null, 'Focus');
             
                document.querySelector('.right-sidebar').classList.add('open');
            } else {
                debug('Nessun dato trovato per sectionId: ' + sectionId);
            }
        });
    });
}




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


/// DEBUG

function debug(message) {
    const debugElement = document.getElementById('debug');
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    debugElement.appendChild(messageElement);
}

