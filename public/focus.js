
/////
const sectionData = {
    /////////----------TC HEAD
    'cerebral-cortex': {
        tableDesc: 'Descrizione della corteccia cerebrale...',
        normalDesc: 'Una breve descrizione di come dovrebbe apparire normalmente la corteccia cerebrale...',
        imageDesc: 'Come guardare la corteccia cerebrale nelle immagini...',
        imagePath: 'img/grey_matter.jpeg', // Aggiungi questo campo per ogni sezione
        pathologyList: ['Cortical Atrophy', 'Cortical Dysplasia', 'Cerebral Edema']
    },
    'white-matter': {
        tableDesc: 'Descrizione della sostanza bianca...',
        normalDesc: 'Una breve descrizione di come dovrebbe apparire normalmente la sostanza bianca...',
        imageDesc: 'Come guardare la sostanza bianca nelle immagini...',
        imagePath: 'img/sostanza_bianca_cervello.jpg', // Aggiungi questo campo per ogni sezione
        pathologyList: ['Leukodystrophy', 'Multiple Sclerosis', 'White Matter Lesions']
    },
    'ventricles': { // Aggiungi questo campo per ogni sezione           
        tableDesc: 'Descrizione dei ventricoli...',
        normalDesc: 'Una breve descrizione di come dovrebbero apparire normalmente i ventricoli...',
        imageDesc: 'Come guardare i ventricoli nelle immagini...',
        imagePath: 'img/ventricoli.jpg', // Aggiungi questo campo per ogni sezione
        pathologyList: ['Hydrocephalus', 'Ventriculomegaly', 'Ventricular Hemorrhage']
    },
    'basal-ganglia': {
        tableDesc: 'Descrizione dei gangli della base...',
        normalDesc: 'Una breve descrizione di come dovrebbero apparire normalmente i gangli della base...',
        imageDesc: 'Come guardare i gangli della base nelle immagini...',
        imagePath: 'img/gangli_base.jpg', // Aggiungi questo campo per ogni sezione
        pathologyList: ['Basal Ganglia Calcification', 'Basal Ganglia Hemorrhage', 'Basal Ganglia Infarction']
    },
    'cerebellum': {
        tableDesc: 'Descrizione del cervelletto...',
        normalDesc: 'Una breve descrizione di come dovrebbe apparire normalmente il cervelletto...',
        imageDesc: 'Come guardare il cervelletto nelle immagini...',
        imagePath: 'img/cervelletto.jpg', // Aggiungi questo campo per ogni sezione
        pathologyList: ['Cerebellar Atrophy', 'Cerebellar Hemorrhage', 'Cerebellar Infarction']
    },
    'brainstem': {
        tableDesc: 'Descrizione del tronco encefalico...',
        normalDesc: 'Una breve descrizione di come dovrebbe apparire normalmente il tronco encefalico...',
        imageDesc: 'Come guardare il tronco encefalico nelle immagini...',
        imagePath: 'img/tronco_encefalico.jpg', // Aggiungi questo campo per ogni sezione
        pathologyList: ['Brainstem Hemorrhage', 'Brainstem Infarction', 'Brainstem Tumor']
    },
    'sinuses': {
        tableDesc: 'Descrizione dei seni paranasali...',
        normalDesc: 'Una breve descrizione di come dovrebbero apparire normalmente i seni paranasali...',
        imageDesc: 'Come guardare i seni paranasali nelle immagini...',
        imagePath: 'img/sinusite.jpg', // Aggiungi questo campo per ogni sezione
        pathologyList: ['Sinusitis', 'Sinus Polyps', 'Sinus Tumor']
    },
    'temporal-bone': {
        tableDesc: 'Descrizione dell\'osso temporale...',
        normalDesc: 'Una breve descrizione di come dovrebbe apparire normalmente l\'osso temporale...',
        imageDesc: 'Come guardare l\'osso temporale nelle immagini...',
        imagePath: 'img/osso_temporale.jpg', // Aggiungi questo campo per ogni sezione
        pathologyList: ['Temporal Bone Fracture', 'Temporal Bone Tumor', 'Temporal Bone Osteomyelitis']
    },
    'orbit': {
        tableDesc: 'Descrizione dell\'orbita...',
        normalDesc: 'Una breve descrizione di come dovrebbe apparire normalmente l\'orbita...',
        imageDesc: 'Come guardare l\'orbita nelle immagini...',
        imagePath: 'img/orbita.jpg', // Aggiungi questo campo per ogni sezione
        pathologyList: ['Orbital Fracture', 'Orbital Tumor', 'Orbital Hemorrhage']
    },


    //// TC NECK



    'oropharynx': {
        tableDesc: 'Descrizione dell\'orofaringe...',
        normalDesc: 'Una breve descrizione di come dovrebbe apparire normalmente l\'orofaringe...',
        imageDesc: 'Come guardare l\'orofaringe nelle immagini...',
        imagePath: 'img/orofaringe.jpg', // Aggiungi questo campo per ogni sezione
        pathologyList: ['Oropharyngeal Tumor', 'Oropharyngeal Hemorrhage', 'Oropharyngeal Infection']
    },
    'larynx': {
        tableDesc: 'Descrizione della laringe...',
        normalDesc: 'Una breve descrizione di come dovrebbe apparire normalmente la laringe...',
        imageDesc: 'Come guardare la laringe nelle immagini...',
        imagePath: 'img/laringe.jpg', // Aggiungi questo campo per ogni sezione
        pathologyList: ['Laryngeal Tumor', 'Laryngeal Hemorrhage', 'Laryngeal Infection']
    },
    'tonsils': {
        tableDesc: 'Descrizione delle tonsille...',
        normalDesc: 'Una breve descrizione di come dovrebbero apparire normalmente le tonsille...',
        imageDesc: 'Come guardare le tonsille nelle immagini...',
        imagePath: 'img/tonsille.jpg', // Aggiungi questo campo per ogni sezione
        pathologyList: ['Tonsillar Hypertrophy', 'Tonsillar Hemorrhage', 'Tonsillar Infection']
    },
    'salivary-glands': {
        tableDesc: 'Descrizione delle ghiandole salivari...',
        normalDesc: 'Una breve descrizione di come dovrebbero apparire normalmente le ghiandole salivari...',
        imageDesc: 'Come guardare le ghiandole salivari nelle immagini...',
        imagePath: 'img/ghiandole_salivari.jpg', // Aggiungi questo campo per ogni sezione
        pathologyList: ['Salivary Gland Tumor', 'Salivary Gland Hemorrhage', 'Salivary Gland Infection']
    },
    'thyroid': {
        tableDesc: 'Descrizione della ghiandola tiroidea...',

        normalDesc: 'Una breve descrizione di come dovrebbe essere normalmente la ghiandola tiroidea...',
        imageDesc: 'Come guardare la ghiandola tiroidea nelle immagini...',
        imagePath: 'img/tiroide.jpg', // Aggiungi questo campo per ogni sezione
        pathologyList: ['Hypothyroidism', 'Hyperthyroidism', 'Thyroiditis']
    },
    'lymph-nodes': {
        tableDesc: 'Descrizione dei linfonodi...',
        normalDesc: 'Una breve descrizione di come dovrebbero essere normalmente i linfonodi...',
        imageDesc: 'Come guardare i linfonodi nelle immagini...',
        imagePath: 'img/linfonodi.jpg', // Aggiungi questo campo per ogni sezione
        pathologyList: ['Lymphadenopathy', 'Lymphoma']
    },
    'muscles': {
        tableDesc: 'Descrizione dei muscoli...',
        normalDesc: 'Una breve descrizione di come dovrebbero apparire normalmente i muscoli...',
        imageDesc: 'Come guardare i muscoli nelle immagini...',
        imagePath: 'img/muscoli.jpg', // Aggiungi questo campo per ogni sezione
        pathologyList: ['Muscle Tumor', 'Muscle Hemorrhage', 'Muscle Infection']
    },
    'neck': {
        tableDesc: 'Descrizione del collo...',
        normalDesc: 'Una breve descrizione di come dovrebbe apparire normalmente il collo...',
        imageDesc: 'Come guardare il collo nelle immagini...',
        imagePath: 'img/collo.jpg', // Aggiungi questo campo per ogni sezione
        pathologyList: ['Neck Tumor', 'Neck Hemorrhage', 'Neck Infection']
    },













    ////////// INDICAZIONI CLINICHE //////////

    'Volumi_Cerebrali': {
        id: 'Volumi_Cerebrali',
        title: 'VOLUMI CEREBRALI',
        content: 'gfxgfxfgxgfxgfxgjfxjgfxjgfxjgfxj' // Aggiungi il contenuto della sezione qui, se necessario
    },

    'Ossa_Craniche': {
        id: 'Ossa_Craniche',
        title: 'OSSA CRANICHE',
        content: '' // Aggiungi il contenuto della sezione qui, se necessario
    },
    'Parenchima_Cerebrale': {
        id: 'Parenchima_Cerebrale',
        title: 'PARENCHIMA CEREBRALE',
        content: '' // Aggiungi il contenuto della sezione qui, se necessario
    },
    'Strutture_Extracraniche': {
        id: 'Strutture_Extracraniche',
        title: 'STRUTTURE EXTRACRANICHE',
        content: '' // Aggiungi il contenuto della sezione qui, se necessario
    },
    'Ventricoli_SpaziSubAracnoidei': {
        id: 'Ventricoli_SpaziSubAracnoidei',
        title: 'VENTRICOLI E SPAZI SUBARACNOIDEI',
        content: '' // Aggiungi il contenuto della sezione qui, se necessario
    },
    'Seni_Paranasali': {
        id: 'Seni_Paranasali',
        title: 'SENI PARANASALI',
        content: '' // Aggiungi il contenuto della sezione qui, se necessario
    },
    'Cervelletto': {
        id: 'Cervelletto',
        title: 'CERVELLETTO',
        content: '' // Aggiungi il contenuto della sezione qui, se necessario
    },
    'Tronco_Encefalico': {
        id: 'Tronco_Encefalico',
        title: 'TRONCO ENCEFALICO',
        content: '' // Aggiungi il contenuto della sezione qui, se necessario
    },
    'Strutture_Mediane': {
        id: 'Strutture_Mediane',
        title: 'STRUTTURE MEDIANE',
        content: '' // Aggiungi il contenuto della sezione qui, se necessario
    },
    'Massa_Cerebrale': {
        id: 'Massa_Cerebrale',
        title: 'MASSA',
        content: '' // Aggiungi il contenuto della sezione qui, se necessario
    },
    'Ischemia': {
        id: 'Ischemia',
        title: 'ISCEMIA',
        content: '' // Aggiungi il contenuto della sezione qui, se necessario
    },
    'AngioTC_Vascolarizzazione': {
        id: 'AngioTC_Vascolarizzazione',
        title: 'ANGIOTC - VASCOLARIZZAZIONE',
        content: '' // Aggiungi il contenuto della sezione qui, se necessario
    },



};

