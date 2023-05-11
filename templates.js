
const templates = {
    'ct-head': `
    <div data-template-id="ct-head">
    <table>
        <tr>
            <th>Organo\Sistema</th>
            <th>Descrizione</th>
        </tr>
        <tr>
        <td>PARENCHIMA CEREBRALE</td>
        <td class="description">
            <table>
                <tr>
                    <td>CORTECCIA CEREBRALE:</td>
                    <td contenteditable="true">Descrizione dell'integrità e simmetria della sostanza grigia corticale.</td>
                </tr>
                <tr>
                    <td>SOSTANZA BIANCA:</td>
                    <td contenteditable="true">Descrizione della sostanza bianca, segni di leucodistrofia o lesioni ipodense.</td>
                </tr>
                <tr id="Volume_Cerebrale-row" >
                <td class="toggle" onclick="toggleContent(this)">VOLUME CEREBRALE </td>
                <td class="description">
                      <table>
                        <tr>
                            <td>SEGNO DELL'ETÀ:</td>
                            <td contenteditable="true">No</td>
                        </tr>
                        <tr>
                            <td>ATROFIA:</td>
                            <td contenteditable="true">GLOBALE</td>
                        </tr>
                        <tr>
                            <td>PREDILEZIONE LOBALE:</td>
                            <td contenteditable="true">Nessuna</td>
                        </tr>
                        <tr>
                            <td>ASIMMETRIA:</td>
                            <td contenteditable="true">Nessuna</td>
                        </tr>
                        <tr>
                            <td>REGIONALE:</td>
                            <td contenteditable="true">Nessuna</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr id="Strutture_Mediane-row" >
            <td class="toggle" onclick="toggleContent(this)">STRUTTURE MEDIANE </td>
            <td class="description">
                <table>
                    <tr>
                        <td>GANGLI DELLA BASE:</td>
                        <td contenteditable="true">Descrizione dei gangli della base, inclusi nucleo caudato, putamen e globo pallido.</td>
                    </tr>
                    <tr>
                        <td>TALAMI:</td>
                        <td contenteditable="true">Descrizione dei talami, simmetria e densità.</td>
                    </tr>
                    <tr>
                        <td>IPPOCAMPI:</td>
                        <td contenteditable="true">Descrizione degli ippocampi, segni di atrofia o anomalie della densità.</td>
                    </tr>
                    <tr>
                        <td>FORNICE E CORPI MAMMILLARI:</td>
                        <td contenteditable="true">Descrizione del fornice e dei corpi mammillari.</td>
                    </tr>
                    <tr>
                        <td>CORPO CALLOSO:</td>
                        <td contenteditable="true">Descrizione del corpo calloso, eventuali segni di agenesia, disgenesia o lesioni.</td>
                    </tr>
                    </table>
                    </td>
                    </tr>
                <tr>
                <td class="toggle" onclick="toggleContent(this)">ISCHEMIA</td>
                <td class="description">
                    <table>
                        <tr>
                            <td>INFARTO ACUTO:</td>
                            <td contenteditable="true">
                                <select>
                                    <option>Assente</option>
                                    <option>Presente</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>INFARTO CRONICO:</td>
                            <td contenteditable="true">
                                <select>
                                    <option>Assente</option>
                                    <option>Presente</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>LOCALIZZAZIONE:</td>
                            <td contenteditable="true">Descrizione della localizzazione dell'area ischemica.</td>
                        </tr>
                        <tr>
                            <td>ESTENSIONE:</td>
                            <td contenteditable="true">Descrizione dell'estensione dell'area ischemica.</td>
                        </tr>
                        <tr>
                            <td>EFFETTO MASSA:</td>
                            <td contenteditable="true">Descrizione dell'effetto massa sulla strutture vicine, se presente.</td>
                        </tr>
                        <tr>
                            <td>MALATTIA CRONICA DELLE PICCOLE VIE VASCOLARI:</td>
                            <td contenteditable="true">
                                <select>
                                    <option>Assente</option>
                                    <option>Presente</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>MICROEMORRAGIE CEREBRALI:</td>
                            <td contenteditable="true">
                                <select>
                                    <option>Assente</option>
                                    <option>Presente</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>COMMENTI AGGIUNTIVI:</td>
                            <td contenteditable="true">Qualsiasi altra osservazione rilevante sull'ischemia.</td>
                        </tr>
                    </table>
                </td>
            </tr>
            
<tr>
    <td class="toggle" onclick="toggleContent(this)">MASSA</td>
    <td class="description">
        <table>
            <tr>
                <td>POSIZIONE:</td>
                <td contenteditable="true">Descrizione della posizione della massa.</td>
            </tr>
            <tr>
                <td>DIMENSIONI:</td>
                <td contenteditable="true">Descrizione delle dimensioni della massa.</td>
            </tr>
            <tr>
                <td>PRENDITA DI CONTRASTO:</td>
                <td contenteditable="true">
                    <select>
                        <option>Eseguita senza contrasto</option>
                        <option>Prende contrasto</option>
                        <option>Non prende contrasto</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>EFFETTO MASSA:</td>
                <td contenteditable="true">Descrizione dell'effetto massa sulla strutture vicine.</td>
            </tr>
            <tr>
                <td>DENSITÀ/COMPOSIZIONE:</td>
                <td contenteditable="true">Descrizione della densità e composizione interna della massa, inclusi eventuali segni di emorragia o altre caratteristiche.</td>
            </tr>
            <tr>
                <td>COMMENTI AGGIUNTIVI:</td>
                <td contenteditable="true">Qualsiasi altra osservazione rilevante sulla massa.</td>
            </tr>
        </table>
    </td>
</tr>
            </tr>
            </table>
        </td>
    </tr>
    <tr>
    <td class="toggle" onclick="toggleContent(this)">SHIFT DELLA LINEA MEDIANA</td>
    <td class="description">
        <table>
            <tr>
                <td>IDENTIFICAZIONE:</td>
                <td contenteditable="true">Centrata e allineata con la linea mediana del cranio.</td>
            </tr>
            <tr>
                <td>MISURAZIONE:</td>
                <td contenteditable="true">Distanza tra la linea mediana del cranio e la linea mediana del terzo ventricolo o del corpo calloso.</td>
            </tr>
            <tr>
                <td>CAUSA:</td>
                <td contenteditable="true">Nessuna massa, emorragia, edema o altre anomalie identificate che possano causare lo spostamento.</td>
            </tr>
            <tr>
                <td>PARENCHIMA CEREBRALE:</td>
                <td contenteditable="true">Nessuna area di ipodensità o iperdensità osservata.</td>
            </tr>
            <tr>
                <td>STRUTTURE ADIACENTI:</td>
                <td contenteditable="true">Nessun segno di compressione o spostamento del ventricolo laterale o del terzo ventricolo.</td>
            </tr>
            <tr>
                <td>FOSSA POSTERIORE:</td>
                <td contenteditable="true">Nessun segno di edema cerebellare o di ematoma che potrebbe causare un effetto di massa.</td>
            </tr>
            <tr>
                <td>GRAVITÀ:</td>
                <td contenteditable="true">Nessuno spostamento significativo della linea mediana osservato.</td>
            </tr>
        </table>
    </td>
</tr>
    <tr>
    <td class="toggle" onclick="toggleContent(this)">TRONCO ENCEFALICO</td>
    <td class="description">
        <table>
            <tr>
                <td>MESSENCEFALO (MIDBRAIN):</td>
                <td contenteditable="true">Descrizione del mesencefalo, incluse le strutture come i collicoli superiori e inferiori, sostanza nera e acquedotto cerebrale.</td>
            </tr>
            <tr>
                <td>PONTE (PONS):</td>
                <td contenteditable="true">Descrizione del ponte, comprese le sue fibre trasversali e longitudiali e il quarto ventricolo.</td>
            </tr>
            <tr>
                <td>BULBO (MEDULLA OBLONGATA):</td>
                <td contenteditable="true">Descrizione del bulbo, incluse le piramidi e l'oliva, nonché la continuità con il midollo spinale.</td>
            </tr>
        </table>
    </td>
</tr>

<tr>
    <td class="toggle" onclick="toggleContent(this)">CERVELLETTO</td>
    <td class="description">
        <table>
            <tr>
                <td>EMISFERI CERVELLETTOSI:</td>
                <td contenteditable="true">Descrizione della simmetria, morfologia e densità dei due emisferi cerebellari.</td>
            </tr>
            <tr>
                <td>VERME CERVELLETTOSO:</td>
                <td contenteditable="true">Descrizione del verme cerebellare, comprese le sue dimensioni e densità.</td>
            </tr>
            <tr>
                <td>FOSSA POSTERIORE:</td>
                <td contenteditable="true">Descrizione dello spazio della fossa posteriore, eventuali segni di ipertensione intracranica o idrocefalo.</td>
            </tr>
            <tr>
                <td>IV VENTRICOLO:</td>
                <td contenteditable="true">Descrizione del quarto ventricolo, compresa la sua posizione, dimensioni e eventuali segni di dilatazione o compressione.</td>
            </tr>
        </table>
    </td>
</tr>
   
    
 
<tr>
    <td class="toggle" onclick="toggleContent(this)">VENTRICOLI E SPAZI SUBARACNOIDEI</td>
    <td class="description">
        <table>
            <tr>
                <td>VENTRICOLI LATERALI:</td>
                <td contenteditable="true">Dimensioni, forma e simmetria normali. Nessun segno di dilatazione o asimmetria.</td>
            </tr>
            <tr>
                <td>III VENTRICOLO:</td>
                <td contenteditable="true">Normale. Nessun segno di dilatazione.</td>
            </tr>
            <tr>
                <td>IV VENTRICOLO:</td>
                <td contenteditable="true">Normale. Nessun segno di dilatazione.</td>
            </tr>
            <tr>
                <td>SISTEMA DEI SENI VENOSI:</td>
                <td contenteditable="true">Normale. Nessun segno di anomalie o trombosi.</td>
            </tr>
            <tr>
                <td>CISTERNE DELLA BASE E SPAZI SUBARACNOIDEI:</td>
                <td contenteditable="true">Normali. Nessun segno di sanguinamento o aumento di spazio.</td>
            </tr>
            <tr>
                <td>SPAZIO SUBDURALE E EPIDURALE:</td>
                <td contenteditable="true">Normale. Nessun segno di raccolta fluida o emorragia.</td>
            </tr>
        </table>
    </td>
</tr>
<tr>
    <td class="toggle" onclick="toggleContent(this)">STRUTTURE EXTRACRANICHE</td>
    <td class="description">
        <table>
            <tr>
                <td>PELLE E CUOIO CAPELLUTO:</td>
                <td contenteditable="true">Normale</td>
            </tr>
            <tr>
                <td>MUSCOLI CRANICI:</td>
                <td contenteditable="true">Normale</td>
            </tr>
            <tr>
                <td>GHIANDOLE SALIVARI:</td>
                <td contenteditable="true">Normale</td>
            </tr>
            <tr>
                <td>SENI PARANASALI:</td>
                <td contenteditable="true">Normale</td>
            </tr>
            <tr>
                <td>REGIONE ORBITARIA:</td>
                <td contenteditable="true">Normale</td>
            </tr>
        </table>
    </td>
</tr>

        <tr>
            <td>ALTRI RISULTATI</td>
            <td class="description" contenteditable="true">Nessuna significativa opacizzazione delle cellule mastoidee</td>
        </tr>
    
        <tr id="Volume_Ipotalamico-row" style="display: none;">
            <td>VOLUME IPOTALAMICO</td>
            <td class="description" contenteditable="true">Normale</td>
        </tr>
        <tr id="head-option-1-row" style="display: none;">
        <td>OPZIONE 1</td>
        <td class="description" contenteditable="true">Testo opzione 1</td>
      </tr>
      <tr id="head-option-2-row" style="display: none;">
        <td>OPZIONE 2</td>
        <td class="description" contenteditable="true">Testo opzione 2</td>
      </tr>
    </table>
    `,
    'ct-neck': `
    <table>
        <tr>
            <th>ANATOMICAL STRUCTURE/AREA</th>
            <th>DESCRIPTION OF FINDINGS</th>
        </tr>
        <tr>
            <td>Neck soft tissues</td>
            <td>
                <table>
                    <tr>
                        <td data-section="thyroid">THYROID:</td>
                        <td contenteditable="true">The thyroid gland is homogeneous in texture and has normal dimensions (right lobe measures 5.0 x 1.8 x 1.7 cm and left lobe measures 4.5 x 1.6 x 1.5 cm). No nodules or masses are identified.</td>
                    </tr>
                    <tr>
                        <td data-section="lymph-nodes">LYMPH NODES:</td>
                        <td contenteditable="true">Multiple small reactive lymph nodes are noted in the bilateral cervical chains.</td>
                    </tr>
                    <tr>
                        <td data-section="muscles">MUSCLES:</td>
                        <td contenteditable="true">The sternocleidomastoid and strap muscles appear normal in appearance and signal intensity.</td>
                    </tr>
                    <tr>
                        <td>FAT:</td>
                        <td contenteditable="true">The subcutaneous and prevertebral fat are within normal limits.</td>
                    </tr>
                    <tr>
                        <td>VESSELS:</td>
                        <td contenteditable="true">The carotid and vertebral arteries are patent without evidence of stenosis or aneurysm.</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr id="neck-option-1-row" style="display: none;">
            <td>OPZIONE 1</td>
            <td class="description" contenteditable="true">Testo opzione 1</td>
        </tr>
        <tr id="neck-option-2-row" style="display: none;">
            <td>OPZIONE 2</td>
            <td class="description" contenteditable="true">Testo opzione 2</td>
        </tr>
    </table>
    `,
    'ct-sinuses': `
    <table>
        <tr>
            <th>ANATOMICAL STRUCTURE/AREA</th>
            <th>DESCRIPTION OF FINDINGS</th>
        </tr>
        <tr>
            <td>Sphenoid and posterior ethmoid sinuses</td>
            <td contenteditable="true">Unremarkable, no significant mucosal thickening or fluid collections.</td>
        </tr>
        <tr>
            <td>Sphenoethmoidal recess</td>
            <td contenteditable="true">Clear bilaterally.</td>
        </tr>
        <tr>
            <td>Frontal, anterior ethmoid, and maxillary sinuses</td>
            <td>
                <table>
                    <tr>
                        <td>MAXILLARY SINUSES:</td>
                        <td contenteditable="true">Near complete opacification of the left maxillary sinus with mucosal thickening, suggestive of sinusitis. Right maxillary sinus clear with no significant mucosal thickening.</td>
                    </tr>
                    <tr>
                        <td>ETHMOID AIR CELLS:</td>
                        <td contenteditable="true">Mild mucosal thickening bilaterally, more pronounced on the left side.</td>
                    </tr>
                    <tr>
                        <td>FRONTAL SINUSES:</td>
                        <td contenteditable="true">Nessuna evidenza di patologia.</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>Maxillary ostium</td>
            <td contenteditable="true">Clear bilaterally.</td>
        </tr>
        <tr>
            <td>Nasal cavity</td>
            <td contenteditable="true">Mild septal deviation to the right without significant obstruction.</td>
        </tr>
        <tr>
            <td>Other</td>
            <td contenteditable="true">No evidence of bony erosion or destruction.</td>
        </tr>
        <tr id="sinuses-option-1-row" style="display: none;">
            <td>OPZIONE 1</td>
            <td class="description" contenteditable="true">Testo opzione 1</td>
        </tr>
        <tr id="sinuses-option-2-row" style="display: none;">
            <td>OPZIONE 2</td>
            <td class="description" contenteditable="true">Testo opzione 2</td>
        </tr>
    </table>
    `,
    'ct-chest': `
    <table>
        <tr>
            <th>STRUTTURE DI SUPPORTO</th>
            <td contenteditable="true">Normali.</td>
        </tr>
        <tr>
            <th>PARENCHIMA POLMONARE</th>
            <td contenteditable="true">Lieve versamento pleurico bilaterale con tracce di atelettasia basale sinistra. Nessun segno di formazione di empiema o ascesso. Alcuni piccoli noduli pleurici di natura incerta.</td>
        </tr>
        <tr>
            <th>TRACHEA E VIE AEREE CENTRALI</th>
            <td contenteditable="true">Normali.</td>
        </tr>
        <tr>
            <th>BRONCHI PERIFERICI</th>
            <td contenteditable="true">Normali.</td>
        </tr>
        <tr>
            <th>LN MEDIASTINALI</th>
            <td contenteditable="true">Singolo linfonodo mediastinico posteriore che misura fino a 7 mm a sinistra (immagine n. 70).</td>
        </tr>
        <tr>
            <th>CUORE/GRANDI VASI</th>
            <td contenteditable="true">Normali.</td>
        </tr>
        <tr>
            <th>VASCOLARIZZAZIONE POLMONARE</th>
            <td contenteditable="true">Normale.</td>
        </tr>
        <tr>
            <th>ALTRE STRUTTURE MEDIASTINALI</th>
            <td contenteditable="true">Normali.</td>
        </tr>
        <tr>
            <th>PLEURE</th>
            <td contenteditable="true">Normali.</td>
        </tr>
        <tr>
            <th>TESSUTO MAMMARIO</th>
            <td contenteditable="true">Normale.</td>
        </tr>
        <tr id="chest-option-1-row" style="display: none;">
            <th>OPZIONE 1</th>
            <td class="description" contenteditable="true">Testo opzione 1</td>
        </tr>
        <tr id="chest-option-2-row" style="display: none;">
            <th>OPZIONE 2</th>
            <td class="description" contenteditable="true">Testo opzione 2</td>
        </tr>
    </table>
    `,
    'ct-abdomen': `
                                         <table>
                            <tr>
                                <th>Organ\System</th>
                                <th>Description</th>
                            </tr>
                            <tr>
                                <td>LIVER</td>
                                <td class="description" contenteditable="true">The liver appears normal in size and attenuation, with no focal lesions or biliary ductal dilatation detected. The gallbladder contains multiple gallstones, but there are no signs of cholecystitis or wall thickening.</td>
                            </tr>
                            <tr>
                                <td>BILIARY SYSTEM</td>
                                <td class="description" contenteditable="true"></td>
                            </tr>
                            <tr>
                                <td>SPLEEN</td>
                                <td class="description" contenteditable="true">Normal.</td>
                            </tr>
                            <tr>
                                <td>PANCREAS</td>
                                <td class="description" contenteditable="true">Normal.</td>
                            </tr>
                            <tr>
                                <td>ADRENAL GLANDS</td>
                                <td class="description" contenteditable="true">Normal.</td>
                            </tr>
                            <tr>
                                <td>KIDNEYS</td>
                                <td class="description" contenteditable="true">Both kidneys are within normal limits in terms of size and configuration. No renal or ureteral stones are present, and there is no hydroureter or hydronephrosis. The bladder appears unremarkable, with no intrinsic or extrinsic masses.</td>
                            </tr>
                            <tr>
                                <td>BLADDER</td>
                                <td class="description" contenteditable="true"></td>
                            </tr>
                            <tr>
                                <td>BOWEL</td>
                                <td class="description" contenteditable="true">Diverticulosis is observed in the sigmoid colon, but no signs of acute diverticulitis are present. No bowel obstruction or significant bowel wall thickening is detected.</td>
                            </tr>
                            <tr>
                                <td>APPENDIX</td>
                                <td class="description" contenteditable="true">The appendix is not visualized, and there is no periappendiceal fat stranding.</td>
                            </tr>
                            <tr>
                                <td>PERITONEAL CAVITY</td>
                                <td class="description" contenteditable="true">No abdominal ascites or lymphadenopathy is identified.</td>
                            </tr>
                            <tr>
                                <td>UTERUS AND OVARIES (IF PRESENT)</td>
                                <td class="description" contenteditable="true"></td>
                            </tr>
                            <tr>
                                <td>PROSTATE AND SEMINAL GLANDS (IF PRESENT)</td>
                                <td class="description" contenteditable="true">The prostate gland is grossly unremarkable, and no pelvic ascites or lymphadenopathy is observed.</td>
                            </tr>
                            <tr>
                                <td>VASCULATURE</td>
                                <td class="description" contenteditable="true">Normal.</td>
                            </tr>
                            <tr>
                                <td>LYMPH NODES</td>
                                <td class="description" contenteditable="true">Normal.</td>
                            </tr>
                        </table>
     `,
     'ct-abdomen-pelvis': `
    <table>
        <tr>
            <th>Struttura anatomica</th>
            <th>Descrizione dei risultati</th>
        </tr>
        <tr>
            <td>FEGATO</td>
            <td contenteditable="true">Il fegato appare di dimensioni e attenuazione normali, senza lesioni focali.</td>
        </tr>
        <tr>
            <td>SISTEMA BILIARE</td>
            <td class="description">
                <table>
                    <tr>
                        <td>DILATAZIONE DOTTI BILIARI:</td>
                        <td contenteditable="true">Assente</td>
                    </tr>
                    <tr>
                        <td>CALCOLOSI VESCICOLARE:</td>
                        <td contenteditable="true">Presente con presenza di molteplici calcoli alla colecisti, ma senza segni di colecistite o ispessimento della parete.</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>MILZA</td>
            <td contenteditable="true">Normale</td>
        </tr>
        <tr>
            <td>PANCREAS</td>
            <td contenteditable="true">Normale</td>
        </tr>
        <tr>
            <td>ADRENALI</td>
            <td contenteditable="true">Normali</td>
        </tr>
        <tr>
            <td>RENIDimensioni e configurazione</td>
            <td contenteditable="true">Entrambi i reni sono entro i limiti della normalità in termini di dimensioni e configurazione. Non sono presenti calcoli renali o ureterali e non è presente idrouretere o idronefrosi.</td>
        </tr>
        <tr>
            <td>URETERI</td>
            <td contenteditable="true">Assenza di calcoli ureterali.</td>
        </tr>
        <tr>
            <td>VESCICA</td>
            <td contenteditable="true">La vescica appare non eccezionale, senza masse intrinseche o estrinseche.</td>
        </tr>
        <tr>
            <td>INTESTINO</td>
            <td class="description">
                <table>
                    <tr>
                        <td>DIVERTICOLI:</td>
                        <td contenteditable="true">Sigmoidi, ma senza segni di diverticolite acuta. Non è presente occlusione intestinale o ispessimento significativo della parete intestinale.</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>APPENDICE</td>
            <td contenteditable="true">Non identificato.</td>
        </tr>
        <tr>
            <td>CALOTTA PERITONEALE</td>
            <td class="description">
                <table>
                    <tr>
                        <td>ASCITE ADDOMINALE:</td>
                        <td contenteditable="true">Assente</td>
                    </tr>
                    <tr>
                        <td>LINFADENOPATIA ADDOMINALE:</td>
                        <td contenteditable="true">Non presente.</td>
                    </tr>
                </table>
            </td>
    </tr>
 </table>
    `,
    'ct-pankreas': `
<table>
        <tr>
            <th>TABELLA TUMORE DEL PANCREAS</th>
            <th></th>
        </tr>
        <tr>
            <td>TUMORE PANCREATICO PRESENTE</td>
            <td contenteditable="true">Sì</td>
        </tr>
        <tr>
            <td>LOCALIZZAZIONE</td>
            <td contenteditable="true">Testa</td>
        </tr>
        <tr>
            <td>DIMENSIONE</td>
            <td contenteditable="true">3,5 x 3,2 x 2,8 cm</td>
        </tr>
        <tr>
            <td>ENHANCEMENT RELATIVO AL PANCREAS</td>
            <td contenteditable="true">Ipo</td>
        </tr>
        <tr>
            <td>CONFINATO AL PANCREAS CON CHIARO PIANO DI GRASSO</td>
            <td contenteditable="true">No</td>
        </tr>
        <tr>
            <td>COINVOLGIMENTO BILIARE</td>
            <td contenteditable="true">No</td>
        </tr>
        <tr>
            <td>RESTANTE PANCREAS</td>
            <td contenteditable="true">Dilatazione dei dotti biliari intraepatici</td>
        </tr>
        <tr>
            <td>ADENOPATIA PRESENTE</td>
            <td contenteditable="true">Sì</td>
        </tr>
        <tr>
            <td>MALATTIA METASTATICA</td>
            <td contenteditable="true">Sì</td>
        </tr>
        <tr>
            <td>ASCITE / LIQUIDO PERIPANCREATICO</td>
            <td contenteditable="true">No</td>
        </tr>

     
        <tr>
            <td>Tavola vascolare pancreatico</td>
            <td>
                <table>
                    <tr>
                        <td>INVOLVIMENTO TUMORALE VASCOLARE E GRADO:</td>
                        <td contenteditable="true">No</td>
                    </tr>
                    <tr>
                        <td>INVOLVIMENTO DEL CELIACO:</td>
                        <td contenteditable="true">No</td>
                    </tr>
                    <tr>
                        <td>INVOLVIMENTO DELL'A. MESENTERICA SUPERIORE (AMS):</td>
                        <td contenteditable="true">No</td>
                    </tr>
                    <tr>
                        <td>INVOLVIMENTO DELLA V. MESENTERICA SUPERIORE (VMS):</td>
                        <td contenteditable="true">&lt;50%</td>
                    </tr>
                    <tr>
                        <td>ALTRO INVOLVIMENTO VASCOLARE:</td>
                        <td contenteditable="true">No</td>
                    </tr>
                    <tr>
                        <td>TROMBOSI QUALSIASI VASO:</td>
                        <td contenteditable="true">No</td>
                    </tr>
                    <tr>
                        <td>ANATOMIA ABERRANTE:</td>
                        <td contenteditable="true">No</td>
                    </tr>
                    <tr>
                        <td>A. EPATICA DESTRA SOSTITUITA:</td>
                        <td contenteditable="true">No</td>
                    </tr>
                    <tr>
                        <td>PRINCIPALI ACCESSORI O ALTRE ARTERIE, VENE, COLLATERALI O VASI DILATATI SOSTITUITI:</td>
                        <td contenteditable="true">No</td>
                    </tr>
                    <tr>
                        <td>ORIGINI ATTEROSCLEROSE DELL'ASSE CELIACO E DELL'AMS:</td>
                        <td contenteditable="true">No</td>
                    </tr>
                    <tr>
                        <td>DISTANZA DALLA VMS:</td>
                        <td contenteditable="true">Non fornita</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr id="neck-option-1-row" style="display: none;">
            <td>OPZIONE 1</td>
            <td class="description" contenteditable="true">Testo opzione 1</td>
        </tr>
        <tr id="neck-option-2-row" style="display: none;">
            <td>OPZIONE 2</td>
            <td class="description" contenteditable="true">Testo opzione 2</td>
        </tr>
    </table>
    `,
    'ct-spine': `
    <table>
        <tr>
            <th>STRUTTURA ANATOMICA/ZONA</th>
            <th>DESCRIZIONE DEI RISULTATI</th>
        </tr>
        <tr>
            <td>Allineamento</td>
            <td contenteditable="true">L'allineamento della colonna cervicale è mantenuto.</td>
        </tr>
        <tr>
            <td>Frattura/Sublussazione</td>
            <td contenteditable="true">Nessuna evidenza di frattura o sublussazione acuta.</td>
        </tr>
        <tr>
            <td>Altezza corpi vertebrali</td>
            <td contenteditable="true">Le altezze dei corpi vertebrali sono conservate.</td>
        </tr>
        <tr>
            <td>Spazi discali</td>
            <td contenteditable="true">Gli spazi intervertebrali sono ben conservati.</td>
        </tr>
        <tr>
            <td>Malattia degenerativa del disco</td>
            <td contenteditable="true">Una lieve malattia degenerativa del disco a livello C5-C6 con piccola formazione di osteofiti, più evidente sul lato sinistro, senza significativo restringimento foraminal.</td>
        </tr>
        <tr>
            <td>Dischi cervicali rimanenti</td>
            <td contenteditable="true">I dischi cervicali rimanenti non mostrano anomalie significative.</td>
        </tr>
        <tr>
            <td>Articolazioni a cerniera (facet joints)</td>
            <td contenteditable="true">Le articolazioni a cerniera sono indenni.</td>
        </tr>
        <tr>
            <td>Tessuti molli</td>
            <td contenteditable="true">I tessuti molli prevertebrali e paravertebrali appaiono normali.</td>
        </tr>
        <tr>
            <td>Linfadenopatia/Masse</td>
            <td contenteditable="true">Non sono identificate linfadenopatie o masse significative.</td>
        </tr>
        <tr>
            <td>Fossa posteriore/regione soprasellare</td>
            <td contenteditable="true">Le parti visualizzate della fossa posteriore e della regione soprasellare non mostrano anomalie.</td>
        </tr>
        <tr id="neck-option-1-row" style="display: none;">
            <td>OPZIONE 1</td>
            <td class="description" contenteditable="true">Testo opzione 1</td>
        </tr>
        <tr id="neck-option-2-row" style="display: none;">
            <td>OPZIONE 2</td>
            <td class="description" contenteditable="true">Testo opzione 2</td>
        </tr>
    </table>
    `,
    'angio-tc': `
    <table>
     <tr>
            <th>ADDOME/PRINCIPALE</th>
            <th>DESCRIZIONE DEI RISULTATI</th>
        </tr>
        <tr>
            <td>Aorta addominale</td>
            <td contenteditable="true">Placca aterosclerotica lieve.</td>
        </tr>
        <tr>
            <td>Tronco celiaco</td>
            <td contenteditable="true">Permeabile.</td>
        </tr>
        <tr>
            <td>Arteria epatica</td>
            <td contenteditable="true">Normale.</td>
        </tr>
        <tr>
            <td>Arteria splenica</td>
            <td contenteditable="true">Normale.</td>
        </tr>
        <tr>
            <td>Arterie gastriche</td>
            <td contenteditable="true">Normali.</td>
        </tr>
        <tr>
            <td>Arteria SMA</td>
            <td contenteditable="true">Permeabile.</td>
        </tr>
        <tr>
            <td>Arteria IMA</td>
            <td contenteditable="true">Permeabile.</td>
        </tr>
        <tr>
            <td>Arterie renali</td>
            <td>
                <table>
                    <tr>
                        <td>SINISTRA:</td>
                        <td contenteditable="true">Permeabile.</td>
                    </tr>
                    <tr>
                        <td>DESTRA:</td>
                        <td contenteditable="true">Permeabile.</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>Sistema venoso</td>
            <td>
                <table>
                    <tr>
                        <td>VENA CAVA INFERIORE:</td>
                        <td contenteditable="true">Normale.</td>
                    </tr>
                    <tr>
                        <td>VENA PORTA:</td>
                        <td contenteditable="true">Normale.</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>Vene renali</td>
            <td>
                <table>
                    <tr>
                        <td>SINISTRA:</td>
                        <td contenteditable="true">Normale.</td>
                    </tr>
                    <tr>
                        <td>DESTRA:</td>
                        <td contenteditable="true">Normale.</td>
                    </tr>
                </table>
            </td>
        </tr>
<tr>
            <th>PELVI/PRINCIPALE</th>
            <th>DESCRIZIONE DEI RISULTATI</th>
        </tr>
        <tr>
            <td>Arterie iliache</td>
            <td>
                <table>
                    <tr>
                        <td>ARTERIA ILIACA COMUNE SINISTRA</td>
                        <td contenteditable="true">Placca aterosclerotica lieve.</td>
                    </tr>
                    <tr>
                        <td>ARTERIA ILIACA COMUNE DESTRA</td>
                        <td contenteditable="true">Placca aterosclerotica lieve.</td>
                    </tr>
                    <tr>
                        <td>ARTERIA ILIACA ESTERNA SINISTRA</td>
                        <td contenteditable="true">Normale.</td>
                    </tr>
                    <tr>
                        <td>ARTERIA ILIACA ESTERNA DESTRA</td>
                        <td contenteditable="true">Normale.</td>
                    </tr>
                    <tr>
                        <td>ARTERIA ILIACA INTERNA SINISTRA</td>
                        <td contenteditable="true">Normale.</td>
                    </tr>
                    <tr>
                        <td>ARTERIA ILIACA INTERNA DESTRA</td>
                        <td contenteditable="true">Normale.</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>Sistema venoso</td>
            <td>
                <table>
                    <tr>
                        <td>VENA CAVA INFERIORE</td>
                        <td contenteditable="true">Normale.</td>
                    </tr>
                    <tr>
                        <td>VENA ILIACA COMUNE SINISTRA</td>
                        <td contenteditable="true">Normale.</td>
                    </tr>
                    <tr>
                        <td>VENA ILIACA COMUNE DESTRA</td>
                        <td contenteditable="true">Normale.</td>
                    </tr>
                    <tr>
                        <td>VENA ILIACA ESTERNA SINISTRA</td>
                        <td contenteditable="true">Normale.</td>
                    </tr>
                    <tr>
                        <td>VENA ILIACA ESTERNA DESTRA</td>
                        <td contenteditable="true">Normale.</td>
                    </tr>
                    <tr>
                        <td>VENA ILIACA INTERNA SINISTRA</td>
                        <td contenteditable="true">Normale.</td>
                    </tr>
                    <tr>
                        <td>VENA ILIACA INTERNA DESTRA</td>
                        <td contenteditable="true">Normale.</td>
                    </tr>
                </table>
            </td>
        </tr>
<tr>
            <th>ARTI INFERIORI/PRINCIPALE</th>
            <th>DESCRIZIONE DELLE CONDIZIONI</th>
        </tr>
        <tr>
            <td>ARTERIE FEMORALI</td>
            <td>
                <table>
                    <tr>
                        <td>SINISTRA:</td>
                        <td contenteditable="true">Placca aterosclerotica minima.</td>
                    </tr>
                    <tr>
                        <td>DESTRA:</td>
                        <td contenteditable="true">Placca aterosclerotica minima.</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>ARTERIE POPLITEE</td>
            <td>
                <table>
                    <tr>
                        <td>SINISTRA:</td>
                        <td contenteditable="true">Stenosi lieve della porzione prossimale dell'arteria poplitea sinistra.</td>
                    </tr>
                    <tr>
                        <td>DESTRA:</td>
                        <td contenteditable="true">Normale.</td>
                    </tr>
                </table>
            </td>
        </tr>
		<tr>
            <td>Arterie tibiali e peronee</td>
            <td>
                <table>
                    <tr>
                        <td>TRONCO PERONEALE - SINISTRO</td>
                        <td contenteditable="true">Normale</td>
                    </tr>
                    <tr>
                        <td>TRONCO PERONEALE - DESTRO</td>
                        <td contenteditable="true">Stenosi moderata del tronco peroneale destro</td>
                    </tr>
                    <tr>
                        <td>ARTERIA TIBIALE ANTERIORE - SINISTRO</td>
                        <td contenteditable="true">Stenosi lieve della porzione prossimale dell'arteria tibiale anteriore sinistra</td>
                    </tr>
                    <tr>
                        <td>ARTERIA TIBIALE ANTERIORE - DESTRO</td>
                        <td contenteditable="true">Stenosi lieve</td>
                    </tr>
                    <tr>
                        <td>ARTERIA PERONEALE - SINISTRO</td>
                        <td contenteditable="true">Normale</td>
                    </tr>
                    <tr>
                        <td>ARTERIA PERONEALE - DESTRO</td>
                        <td contenteditable="true">Normale</td>
                    </tr>
                    <tr>
                        <td>ARTERIA TIBIALE POSTERIORE - SINISTRO</td>
                        <td contenteditable="true">Stenosi lieve</td>
                    </tr>
                    <tr>
                        <td>ARTERIA TIBIALE POSTERIORE - DESTRO</td>
                        <td contenteditable="true">Stenosi minima</td>
                    </tr>
                    <tr>
                        <td>Sistema venoso</td>
                        <td>
                            <table>
                                <tr>
                                    <td>VENA FEMORALE - SINISTRO</td>
                                    <td contenteditable="true">Normale</td>
                                </tr>
                                <tr>
                                    <td>VENA FEMORALE - DESTRO</td>
                                    <td contenteditable="true">Normale</td>
                                </tr>
                                <tr>
                                    <td>VENA SAFENA MAGGIORE - SINISTRO</td>
                                    <td contenteditable="true">Normale</td>
                                </tr>
                                <tr>
                                    <td>VENA SAFENA MAGGIORE - DESTRO</td>
                                    <td contenteditable="true">Normale</td>
                                </tr>
                                <tr>
                                    <td>VENA SAFENA MINORE - SINISTRO</td>
                                    <td contenteditable="true">Normale</td>
                                </tr>
                                <tr>
                                    <td>VENA SAFENA MINORE - DESTRO</td>
													          <td contenteditable="true">Normale</td>
                                </tr>
													   <table>
													</td>
											 </tr>
									<table>
							</td>
					 </tr>
    </table>
    `,
    'mr-neck': 'Contenuto per MR NECK...',
    'mr-cardiac': 'Contenuto per MR CARDIAC...',
    'angio-mr': 'Contenuto per ANGIO MR...',
    'mri-wholebody': 'Contenuto per MRI WHOLEBODY...',
    'mr-abdomen': 'Contenuto per MR ABDOMEN...',
    'mr-prostata': 'Contenuto per MR PROSTATA...',
    'mr-shoulder': 'Contenuto per MR SHOULDER...',
    'mr-elbow': 'Contenuto per MR ELBOW...',
    'mr-spine': 'Contenuto per MR SPINE...',
    'mr-wrist': 'Contenuto per MR WRIST...',
    'mr-hip': 'Contenuto per MR HIP...',
    'mr-knee': 'Contenuto per MR KNEE...',
    'mr-ankle': 'Contenuto per MR ANKLE...',
};

/////
const sectionData = {
    'thyroid': {
        tableDesc: 'Descrizione della ghiandola tiroidea...',
        normalDesc: 'Una breve descrizione di come dovrebbe essere normalmente la ghiandola tiroidea...',
        imageDesc: 'Come guardare la ghiandola tiroidea nelle immagini...',
        pathologyList: ['Ipotiroidismo', 'Ipertiroidismo', 'Tiroidite']
    },
    'lymph-nodes': {
        tableDesc: 'Descrizione dei linfonodi...',
        normalDesc: 'Una breve descrizione di come dovrebbero essere normalmente i linfonodi...',
        imageDesc: 'Come guardare i linfonodi nelle immagini...',
        pathologyList: ['Linfadenopatia', 'Linfoma']
    },
    'muscles': {
        tableDesc: 'Descrizione dei muscoli...',
        normalDesc: 'Una breve descrizione di come dovrebbero apparire normalmente i muscoli...',
        imageDesc: 'Come guardare i muscoli nelle immagini...',
        pathologyList: ['Distrofia muscolare', 'Miopatia']
    },
};




//////////////////////////
////visibilità sezioni////
src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
    $(".toggle").click(function() {
        $(this).next().children().toggle();
    });

    document.addEventListener('DOMContentLoaded', (event) => {
        let toggles = document.getElementsByClassName('toggle');
    
        for (let i = 0; i < toggles.length; i++) {
            toggles[i].addEventListener('click', function() {
                let content = this.nextElementSibling.firstElementChild;
                if (content.style.display === "none") {
                    content.style.display = "block";
                } else {
                    content.style.display = "none";
                }
            });
        }
    });