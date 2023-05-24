﻿
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


///////////// MENU LATERALI /////////////


// apre menu laterale destro
document.querySelector('.right-sidebar .toggle-area').addEventListener('click', function () {
    document.querySelector('.right-sidebar').classList.toggle('open');
    adjustContentPosition();
});

// apre menu laterale sinistro
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
    adjustContentPosition();
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
// Apri la scheda "Metodica" di default 
document.getElementById("Metodica").style.display = "block";

function simulateLeftSidebarToggleClick() {
    const leftSidebarToggle = document.querySelector('.sidebar .toggle-area');
    leftSidebarToggle.click();
}


////funzione che gestirà lo spostamento del contenuto centrale in base allo stato dei menu laterali:
function adjustContentPosition() {
    const content = document.querySelector('.content');
    const leftSidebar = document.querySelector('.sidebar');
    const rightSidebar = document.querySelector('.right-sidebar');
  
    if (leftSidebar.classList.contains('open') && rightSidebar.classList.contains('open')) {
        content.classList.remove('left', 'right');
    } else if (leftSidebar.classList.contains('open')) {
        content.classList.remove('right');
        content.classList.add('left');
    } else if (rightSidebar.classList.contains('open')) {
        content.classList.remove('left');
        content.classList.add('right');
    } else {
        content.classList.remove('left', 'right');
    }
}




///////////// TEMPLATE /////////////

/////Crea template
let currentTemplateId = null;

function fillTemplate(templateId, indicazioneClinica) {

    if (currentTemplateId === templateId) {
        return;
    }
    currentTemplateId = templateId;
    const content = document.querySelector('.table-container');
    content.innerHTML = templates[templateId];

        // Trova tutti gli elementi con la classe 'toggle' dentro il template e simula un click su di loro
        let toggles = content.getElementsByClassName('toggle');
        for (let toggle of toggles) {
            toggleContent(toggle);
        }
    simulateLeftSidebarToggleClick();
    // Svuota il contenitore delle indicazioni cliniche
    const container = document.getElementById('clinical-indications-container');
    container.innerHTML = '';
    // Creazione di una nuova istanza di ClinicalIndications e impostazione delle checkbox
    clinicalIndications = new ClinicalIndications(templateId);

    // Aggiunta degli event listener
    addEventListeners();
    const indicazioneClinicaRow = document.getElementById('indicazione-clinica-row');
    if (indicazioneClinica) {
      indicazioneClinicaRow.style.display = '';
    } else {
      indicazioneClinicaRow.style.display = 'none';
    }

}

  /////////// Update Template con indicazionii clinica 
  
//   ///aggiungi un event listener alla checkbox per aggiornare il template quando lo stato della checkbox cambia:
//   document.getElementById('indicazione-clinica-checkbox').addEventListener('change', (e) => {
//     const indicazioneClinica = e.target.checked;
//     fillTemplate(currentTemplateId, indicazioneClinica);
//   });
  
  
//   function updateTemplate(optionId, isChecked) {
//     const rowId = optionId + '-row';
//     const row = document.getElementById(rowId);
//     if (row) {
//         row.style.display = isChecked ? '' : 'none';
//     }
// }



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

                // Imposta l'attributo src dell'elemento img
                document.getElementById('section-image').src = data.imagePath;


                openTab(null, 'Focus');
             
                document.querySelector('.right-sidebar').classList.add('open');
            } else {
                debug('Nessun dato trovato per sectionId: ' + sectionId);
            }
            adjustContentPosition()
        });
    });
}

/////// funzionalità all'interno dei template

// mostra noscondi contenuto
function toggleContent(element) {
    let content = element.nextElementSibling.firstElementChild;
    if (content.style.display === "none") {
        content.style.display = "block";
        debug('display table');
    } else {
        content.style.display = "none";
    }
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////// BACKEND  !!!!!! ///////////////

//// ONPEN AI   /////

async function sendToOpenAI() {
    // Get the text from the text area
    const text = document.querySelector('.editable-text').innerText;

    // Create a messages array
    const messages = [{ "role": "system", "content": "Sei connesso al servizio di assistenza radiologica." }, { "role": "user", "content": text }];

    // Send a POST request to the server
    const response = await fetch('https://damp-plains-57695.herokuapp.com/get-gpt-3-response', {
        method: 'POST',
        mode: 'cors', // Add this line
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: messages }), // Send the messages array
    })
        .then(response => response.json())
        .then(data => {
            console.log('debug: received data', data); // Debug: stampa i dati ricevuti
            let responseContainer = document.getElementById("responseContainer");
            let responseText = document.createElement("p");
            responseText.innerText = data.response;
            responseContainer.appendChild(responseText);
        })
        .catch((error) => {
            console.error('debug: Error:', error); // Debug: stampa l'errore, se presente
        });
}



/// DEBUG

function debug(message) {
    const debugElement = document.getElementById('debug');
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    debugElement.appendChild(messageElement);
}
