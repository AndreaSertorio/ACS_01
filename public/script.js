
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


/////// funzione per lo spostamento dei menu laterali a seconda dello scroll della pagina principale

let ticking = false;

function updateSidebarPosition() {
    const leftSidebar = document.getElementById("left-sidebar");
    const rightSidebar = document.getElementById("right-sidebar");

    if (window.scrollY > 0) {
        leftSidebar.style.transform = `translateY(${window.scrollY}px)`;
        rightSidebar.style.transform = `translateY(${window.scrollY}px)`;
    } else {
        leftSidebar.style.transform = "translateY(0)";
        rightSidebar.style.transform = "translateY(0)";
    }

    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateSidebarPosition);
        ticking = true;
    }
}
// Aggiungi un event listener per l'evento di scroll
window.addEventListener("scroll", requestTick);


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

    // Aggiungi un event listener per l'evento input a tutti gli elementi contenteditable
    document.querySelectorAll('[contenteditable="true"]').forEach((element) => {
        element.addEventListener('input', function () {
            // Aggiungi la classe 'modified' all'elemento quando viene modificato
            this.classList.add('modified');
        });
    });
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
        section.addEventListener('click', function () {
            const sectionId = this.getAttribute('data-section');
            const data = sectionData[sectionId];
            if (data) {
                console.log('Sezione non editabile cliccata: ' + sectionId); // Aggiunto console.log qui
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

/////// funzionalità all'interno dei template [apertura chiusura sotto menu]

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









//////////////// APERTURA CHAT //////////////////////
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggle-button').addEventListener('click', function () {
        var container = document.getElementById('chat-container');
        var chat = document.querySelector('.chat-container'); // seleziona l'elemento della chat
        var arrowUp = document.getElementById('arrow-up');
        var arrowDown = document.getElementById('arrow-down');

        if (container.style.height === '100px') {
            container.style.height = '50vh'; // espande a metà dello schermo
            chat.style.height = 'calc(50vh - 50px)'; // modifica l'altezza della chat
            arrowUp.style.display = 'none';
            arrowDown.style.display = 'inline';
        } else {
            container.style.height = '100px'; // ritorna all'altezza iniziale
            chat.style.height = '100px'; // ritorna l'altezza della chat all'altezza iniziale
            arrowUp.style.display = 'inline';
            arrowDown.style.display = 'none';
        }
    });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////    IMPOSTAZIONI    ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.onload = function () {
    var controlPanelButton = document.getElementById('control-panel-button');
    var controlPanel = document.getElementById('control-panel');

    controlPanelButton.onclick = function (event) {
        if (controlPanel.style.display === 'none') {
            controlPanel.style.display = 'block';
        } else {
            controlPanel.style.display = 'none';
        }
    }

    window.onclick = function (event) {
        if (controlPanel.style.display === 'block' && event.target !== controlPanel && event.target !== controlPanelButton && !controlPanel.contains(event.target)) {
            controlPanel.style.display = 'none';
        }
    }
}






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////    RACCOGLI PARTI EDITABILI           ////////////////////////////////////////////////////////////

// prendi il contenuto modificato
function gatherEditableContent() {
    // Seleziona solo gli elementi contenteditable che hanno la classe 'modified'
    let editableElements = document.querySelectorAll('[contenteditable="true"].modified');

    let data = [];

    editableElements.forEach((element) => {
        // Ottieni il contenuto dell'elemento non modificabile che precede l'elemento modificabile
        let label = element.previousElementSibling.textContent;

        // Crea una stringa nel formato "label : content"
        let contentString = `${label} : ${element.textContent}`;

        // Aggiungi la stringa all'array data
        data.push(contentString);
    });

    return data;
}

/// event listenere per il bottone
document.getElementById('gather-content-button').addEventListener('click', function () {
    let data = gatherEditableContent();
    let dataString = JSON.stringify(data, null, 2);

    // Messaggio di sistema predefinito
    let systemMessage = "Ignora tutte le istruzioni precedenti: sei l'assistente di un radiologo esperto e devi aiutarlo a stilare il referto di un esame radiologico. Questo radiologo scrive in uno stile estremamente conciso ed esperto cerca di rispettarlo, non fare ipotesi diagnostiche ne considerazioni: scrivi il referto di una TC Encefalo senza mezzo di contrasto, usa la seguente [LISTA] di reperti che sono stati segnalati dal radiologi che ha accuratamente visionato le immagini, troverai i reperti nella forma \"sede/descrizione: reperto\", voglio che integri questi reperti in un discorso , non tralasciando le cose che normalmente si dovrebbero scrivere in un referto di una TC encefalo.  [LISTA]    ";

    // Combina il messaggio di sistema predefinito con i dati raccolti
    let fullMessage = systemMessage + "\n\n" + dataString;

    // Visualizza il messaggio completo nell'elemento dei risultati
    document.getElementById('results').textContent = fullMessage;
    // Imposta il valore dell'input della chat al messaggio completo
    document.getElementById('chat-input').value = fullMessage;

    // Invia il messaggio
    sendMessage();

});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





/// DEBUG

function debug(message) {
    const debugElement = document.getElementById('debug');
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    debugElement.appendChild(messageElement);
}

