function changeContent(id) {
    const tableContainer = document.querySelector('.table-container');
    const editableText = document.querySelector('.editable-text');
    tableContainer.innerHTML = templates[id];
}

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

// Apri la scheda "Metodica" di default 

document.getElementById("Metodica").style.display = "block";

const menuItems = document.querySelectorAll('.sidebar ul li');

menuItems.forEach(item => {
    if (item.id === 'abdomen') {
        item.addEventListener('click', () => {
            const submenu = createCtAbdomenSubmenu(ctAbdomenOptions);
            item.appendChild(submenu);
        });
    } else if (templates.hasOwnProperty(item.id)) {
        item.addEventListener('click', () => {
            changeContent(item.id);
        });
    }
});

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

const mainMenuItems = document.querySelectorAll('.sidebar > ul > li');

menuItems.forEach(item => {
    if (item.id === 'abdomen') {
        item.addEventListener('click', () => {
            createSubmenu(item.id, ctAbdomenOptions, 'abdomen-submenu');
        });
    } else if (templates.hasOwnProperty(item.id)) {
        item.addEventListener('click', () => {
            changeContent(item.id);
        });
    }
});


function createCtAbdomenSubmenu() {
    // Aggiungi una verifica per assicurarsi che il sottomenu sia stato creato solo una volta
    if (document.getElementById('abdomen-submenu')) {
        return;
    }

    const ctAbdomen = document.getElementById('abdomen');
    const ctAbdomenSubmenu = document.createElement('ul');
    ctAbdomenSubmenu.id = 'abdomen-submenu';

    ctAbdomenOptions.forEach((option, index) => {
        const ctAbdomenOption = document.createElement('li');
        ctAbdomenOption.innerHTML = `<input type="checkbox" id="abdomen-option-${index}" onchange="modifyTemplate(this, '${option}')">${option}`;

        ctAbdomenSubmenu.appendChild(ctAbdomenOption);
    });

    ctAbdomen.appendChild(ctAbdomenSubmenu);
}


document.getElementById('abdomen').addEventListener('click', createCtAbdomenSubmenu);
function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
}


function modifyTemplate(checkbox, text) {
    const editableText = document.querySelector('.editable-text');
    const existingText = editableText.innerHTML;

    if (checkbox.checked) {
        // Se la checkbox è stata selezionata, aggiungi il testo al template
        editableText.innerHTML = existingText + '\n' + text;
    } else {
        // Se la checkbox è stata deselezionata, rimuovi il testo dal template
        editableText.innerHTML = existingText.replace('\n' + text, '');
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Funzione per creare un'opzione di indicazione clinica come elemento di checkbox
function createClinicOption(text) {
    const option = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
        modifyTemplate(this, text);
    });

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(text));
    option.appendChild(label);

    return option;
}

// Funzione per creare un sottomenu con le indicazioni cliniche
function createSubmenu(id, clinicOptions, submenuId = null) {
    // Aggiungi una verifica per assicurarsi che il sottomenu sia stato creato solo una volta
    if (submenuId && document.getElementById(submenuId)) {
        return;
    }

    const parentElement = document.getElementById(id);
    const submenu = document.createElement('ul');
    submenu.id = submenuId || `${id}-submenu`;

    clinicOptions.forEach(text => {
        submenu.appendChild(createClinicOption(text));
    });

    parentElement.appendChild(submenu);
}

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

// Funzione per aggiungere sottomenu e gestire eventi click
function setupClinicMenuItems(menuItems, optionsData) {
    menuItems.forEach(item => {
        const matchingOption = optionsData.find(optionData => optionData.id === item.id);
        if (matchingOption) {
            const submenu = createClinicSubmenu(`${item.id}-submenu`, matchingOption.options);
            item.appendChild(submenu);

            item.removeEventListener('click', event => {
                event.stopPropagation();
                toggleSubmenu(`${item.id}-submenu`);
            });

            item.addEventListener('click', event => {
                event.stopPropagation();
                toggleSubmenu(`${item.id}-submenu`);
            });
        }
    });
}

// Aggiungi event listener e sottomenu per le opzioni del menu "Clinica-Metodica"
const tcMenuItems = document.querySelectorAll('#Clinica-Metodica ul li ul li');
setupClinicMenuItems(tcMenuItems, [...tcOptions, ...mriOptions, ...ecoOptions]);

function checkContent(element) {
    if (element.querySelector('td[contenteditable="true"]').textContent.trim() !== "") {
        element.classList.add("visible-options");
    } else {
        element.classList.remove("visible-options");
    }
}
// Crea una funzione JavaScript showOptions che accetta l'ID dell'elemento selezionato e mostra le opzioni corrispondenti nel secondo tab "Clinica-Metodica".
function showOptions(selectedId) {
    // Nascondi tutti i sottomenu nel secondo tab
    const options = document.querySelectorAll('#Clinica-Metodica > ul > li > ul');
    options.forEach(option => {
        option.style.display = 'none';
    });

    // Mostra solo il sottomenu corrispondente nel secondo tab
    const correspondingOption = document.querySelector(`#Clinica-Metodica > ul > li#${selectedId} > ul`);
    correspondingOption.style.display = 'block';

    // Seleziona il secondo tab "Clinica-Metodica"
    document.querySelector('.tab-button[onclick="openTab(event, \'Clinica-Metodica\')"]').click();
}

  
  
