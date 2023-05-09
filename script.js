
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
    evt.stopPropagation(); // Aggiungi questa riga per fermare la propagazione dell'evento di click
    
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
    debug('Chiamata a fillTemplate');
  
    if (currentTemplateId === templateId) {
      debug('Il template è già il corrente');
      return;
    }

    debug('Impostazione del nuovo template');
  
    currentTemplateId = templateId;
    const content = document.querySelector('.table-container');
    content.innerHTML = templates[templateId];
  
   
    // Generate the list of hidden options
    const hiddenOptions = generateHiddenOptionsList(templateId);
    debug('Generazione elenco opzioni nascoste');

    // Create a string with all the hidden options
    const hiddenOptionsText = hiddenOptions.join(', ');
    debug('Creazione stringa opzioni nascoste');

    // Find the text container and update its content
    const textContainer = document.querySelector('.text-container');
    debug('textContainer: ' + textContainer);

    textContainer.textContent = `Opzioni nascoste: ${hiddenOptionsText}`;
    debug('Opzioni nascoste: ' + hiddenOptionsText);


    const indicazioneClinicaRow = document.getElementById('indicazione-clinica-row');
    if (indicazioneClinica) {
      debug('Mostra indicazione clinica');
      indicazioneClinicaRow.style.display = '';
    } else {
      debug('Nascondi indicazione clinica');
      indicazioneClinicaRow.style.display = 'none';
    }

}

  
  
  ///aggiungi un event listener alla checkbox per aggiornare il template quando lo stato della checkbox cambia:
  document.getElementById('indicazione-clinica-checkbox').addEventListener('change', (e) => {
    const indicazioneClinica = e.target.checked;
    fillTemplate(currentTemplateId, indicazioneClinica);
  });
  
  
  function updateTemplate(optionId, text, isChecked) {
    const rowId = optionId + '-row';
    const row = document.getElementById(rowId);
    if (row) {
        row.style.display = isChecked ? '' : 'none';
        const descriptionCell = row.querySelector('.description');
        if (descriptionCell) {
            descriptionCell.textContent = text;
        }
    }
}


//// cerca elementi nascosti dentro template

function generateHiddenOptionsList(templateId) {
    // Get the template
    const template = templates[templateId];

    // Create a temporary DOM element to hold the template
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = template;

    // Find all rows that are initially hidden
    const hiddenRows = tempDiv.querySelectorAll('tr[style*="display: none"]');

    // Generate a list of the hidden option names
    const hiddenOptionNames = Array.from(hiddenRows).map(row => {
        // Assume the name is in the first cell of the row
        return row.querySelector('td').textContent;
    });

    // Return the list of hidden option names
    return hiddenOptionNames;
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
