

/////////    INDICAZIONI CLINICHE    //////////
const clinicalIndicationsData = {
    'ct-head': {
        indications: [
            {
                id: 'Trauma_Cranico',
                label: 'Indicazione Trauma Cranico'
            },
            {
                id: 'Cefalea_Nuova_Cambiata',
                label: 'Indicazione Cefalea Nuova o Cambiata'
            },
            {
                id: 'Perdita_Coscienza',
                label: 'Indicazione Perdita di Coscienza'
            },
            {
                id: 'Deficit_Neurologici_Focali',
                label: 'Indicazione Deficit Neurologici Focali Acuti'
            },
            {
                id: 'Segni_Aumento_Pressione_Intracranica',
                label: 'Indicazione Segni di Aumento della Pressione Intracranica'
            },
            {
                id: 'Convulsioni',
                label: 'Indicazione Convulsioni, specialmente se nuove o inusuali'
            },
            {
                id: 'Sospetta_Infezione',
                label: 'Indicazione Sospetta Infezione del Sistema Nervoso Centrale'
            },
            {
                id: 'Monitoraggio_Patologie',
                label: 'Indicazione Monitoraggio di Patologie Conosciute'
            },
            {
                id: 'Valutazione_Pre_Operativa',
                label: 'Indicazione Valutazione Pre-Operativa o Pre-Procedurale'
            },
            {
                id: 'Segni_Sintomi_Malattia_Vascolare',
                label: 'Indicazione Segni o Sintomi di Malattia Vascolare'
            },
            {
                id: 'Controllo_Post_Operativo',
                label: 'Indicazione Controllo Post-Operativo o Post-Procedurale'
            },
            {
                id: 'Sospetta_Malattia_Degenerativa',
                label: 'Indicazione Sospetta Malattia Degenerativa'
            }
        ],
        focus: {
            'Trauma_Cranico': ['Ossa_Craniche', 'Parenchima_Cerebrale', 'Strutture_Extracraniche', 'Ventricoli_SpaziSubAracnoidei'],
            'Cefalea_Nuova_o_Cambiata': ['Parenchima_Cerebrale', 'Seni_Paranasali'],
            'Perdita_di_Coscienza': ['Parenchima_Cerebrale', 'Ventricoli_SpaziSubAracnoidei'],
            'Deficit_Neurologici_Focali_Acuti': ['Parenchima_Cerebrale', 'Cervelletto', 'Tronco_Encefalico'],
            'Segni_di_Aumento_della_Pressione_Intracranica': ['Ventricoli_SpaziSubAracnoidei', 'Parenchima_Cerebrale'],
            'Convulsioni': ['Parenchima_Cerebrale'],
            'Sospetta_Infezione_del_Sistema_Nervoso_Centrale': ['Parenchima_Cerebrale', 'Strutture_Mediane', 'Ventricoli_SpaziSubAracnoidei'],
            'Monitoraggio_di_Patologie_Conosciute': ['Parenchima_Cerebrale', 'Massa_Cerebrale'],
            'Valutazione_Pre-Operativa_o_Pre-Procedurale': ['Parenchima_Cerebrale', 'Ossa_Craniche'],
            'Segni_o_Sintomi_di_Malattia_Vascolare': ['Ischemia_Cerebrale', 'AngioTC_-_Vascolarizzazione'],
            'Controllo_Post-Operativo_o_Post-Procedurale': ['Parenchima_Cerebrale', 'Massa_Cerebrale'],
            'Sospetta_Malattia_Degenerativa': ['Parenchima_Cerebrale', 'Strutture_Mediane']
        }
    },
    // Altri modelli, se necessario...
};


// qui implementiamo la funzione toggleContent()
function toggleContent(id, shouldBeExpanded) {
    const element = document.getElementById(id);
    if (element) {
        element.style.display = shouldBeExpanded ? 'block' : 'none';
    }
}

//// set un checkboxes
class ClinicalIndications {
    constructor(modelId) {
        this.modelId = modelId;
        this.indications = clinicalIndicationsData[modelId].indications;
        this.setupCheckboxes();
        // Aggiungi una proprietà per tracciare lo stato corrente di ciascuna sezione
        this.sectionStates = {};
        Object.keys(sectionData).forEach((sectionKey) => {
            this.sectionStates[sectionKey] = false;
        });
        this.updateDisplay();
    }

    // Aggiungi un metodo per aggiornare lo stato di una sezione
    updateSectionState(id, isOpen) {
        this.sectionStates[id] = isOpen;
    }

    setupCheckboxes() {

        const container = document.getElementById('clinical-indications-container');
        this.indications.forEach(indication => {

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `indications_${indication.id}`;
            checkbox.addEventListener('change', () => this.updateDisplay());

            const label = document.createElement('label');
            label.htmlFor = `indications_${indication.id}`;
            label.textContent = indication.label;

            container.appendChild(checkbox);
            container.appendChild(label);
            container.appendChild(document.createElement('br'));
        });
    }

    getSelectedIndications() {
        const selectedIndications = this.indications
            .filter(indication => {
                const checkbox = document.getElementById(`indications_${indication.id}`);
                const isChecked = checkbox && checkbox.checked;
                // debug per ciascuna indicazione
                //  debug(`Indicazione: ${indication.id}, Selezionato: ${isChecked}`);
                return isChecked;
            })
            .map(indication => indication.id);

        // debug per le indicazioni selezionate
        // debug(`Indicazioni selezionate: ${selectedIndications.join(', ')}`);

        return selectedIndications;
    }

    getSectionsToExpand(selectedIndications) {
        const sectionsToExpand = new Set();

        selectedIndications.forEach(indicationId => {
            const sections = clinicalIndicationsData[this.modelId].focus[indicationId];
            if (sections) {
                // debug per ciascuna sezione da espandere
                sections.forEach(sectionId => {
                    //  debug(`Sezione da espandere per l'indicazione ${indicationId}: ${sectionId}`);
                    sectionsToExpand.add(sectionId);
                });
            } else {
                // debug nel caso non ci siano sezioni da espandere per un'indicazione
                debug(`Nessuna sezione da espandere per l'indicazione ${indicationId}`);
            }
        });

        return sectionsToExpand;
    }

    simulateClick(id) {
        debug('simulateClick ');
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
            const toggleElement = sectionElement.querySelector('.toggle');
            if (toggleElement && toggleElement.onclick) {
                toggleElement.onclick();
                // Aggiorna lo stato della sezione dopo il click
                this.updateSectionState(id, !this.sectionStates[id]);
            } else {
                debug(`Toggle element non trovato o non ha un evento onclick: ${id}`);
            }
        } else {
            debug(`Elemento della sezione non trovato: ${id}`);
        }
    }

    updateDisplay() {
        const selectedIndications = this.getSelectedIndications();
        const sectionsToExpand = this.getSectionsToExpand(selectedIndications);

        // Aggiorna le sezioni espandibili
        Object.keys(sectionData).forEach((sectionKey) => {
            const shouldBeExpanded = sectionsToExpand.has(sectionKey);
            const isCurrentlyExpanded = this.sectionStates[sectionKey];
            const element = document.getElementById(sectionData[sectionKey].id);

            if (element) {
                // Aggiunge o rimuove la classe "selected" basandosi su shouldBeExpanded
                element.classList.toggle('selected', shouldBeExpanded);
            }

            // Simula un click sull'elemento se il suo stato dovrebbe cambiare
            if (shouldBeExpanded !== isCurrentlyExpanded) {
                this.simulateClick(sectionData[sectionKey].id);
                debug(`Simula un click sulla sezione ${sectionKey}`);
            }
        });
        debug('updateDisplay ');
    }



}