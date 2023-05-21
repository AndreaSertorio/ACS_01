
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
                <td data-section="cerebral-cortex">CORTECCIA CEREBRALE:</td>
                <td contenteditable="true">Descrizione dell'integrità e simmetria della sostanza grigia corticale.</td>
            </tr>
            <tr>
                <td data-section="white-matter">SOSTANZA BIANCA:</td>
                <td contenteditable="true">Descrizione della sostanza bianca, segni di leucodistrofia o lesioni ipodense.</td>
            </tr>
<tr id="Volumi_Cerebrali">
    <td class="toggle" onclick="toggleContent(this)">VOLUMI CEREBRALI</td>
    <td class="description">
        <table>
            <tr>
                <td>Volume Generale del Cervello:</td>
                <td contenteditable="true">Descrizione del volume generale del cervello, eventuali segni di atrofia cerebrale o di un aumento del volume cerebrale.</td>
            </tr>
            <tr>
                <td>Asimmetria:</td>
                <td contenteditable="true">Descrizione di eventuali segni di asimmetria nel cervello.</td>
            </tr>
            <tr>
                <td class="toggle" onclick="toggleContent(this)">LOBI CEREBRALI</td>
                <td class="description">
                    <table>
                        <tr>
                            <td>Lobi Frontali:</td>
                            <td contenteditable="true">Descrizione del volume e della simmetria dei lobi frontali, eventuali segni di atrofia o di espansione.</td>
                        </tr>
                        <tr>
                            <td>Lobi Temporali:</td>
                            <td contenteditable="true">Descrizione del volume e della simmetria dei lobi temporali, eventuali segni di atrofia o di espansione.</td>
                        </tr>
                        <tr>
                            <td>Lobi Parietali:</td>
                            <td contenteditable="true">Descrizione del volume e della simmetria dei lobi parietali, eventuali segni di atrofia o di espansione.</td>
                        </tr>
                        <tr>
                            <td>Lobi Occipitali:</td>
                            <td contenteditable="true">Descrizione del volume e della simmetria dei lobi occipitali, eventuali segni di atrofia o di espansione.</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td class="toggle" onclick="toggleContent(this)">REMANENTI STRUTTURE</td>
                <td class="description">
                    <table>
                        <tr>
                            <td>Gangli della Base:</td>
                            <td contenteditable="true">Descrizione del volume dei gangli della base, eventuali segni di atrofia o di espansione.</td>
                        </tr>
                        <tr>
                            <td>Talamo:</td>
                            <td contenteditable="true">Descrizione del volume del talamo, eventuali segni di atrofia o di espansione.</td>
                        </tr>
                        <tr>
                            <td>Cervelletto:</td>
                            <td contenteditable="true">Descrizione del volume del cervelletto, eventuali segni di atrofia o di espansione.</td>
                        </tr>
                        <tr>
                            <td>Tronco Encefalico:</td>
                            <td contenteditable="true">Descrizione del volume del tronco encefalico, eventuali segni di atrofia o di espansione.</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </td>
</tr>



            <tr id="Strutture_Mediane">
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
            <th>Struttura</th>
            <th>Descrizione</th>
        </tr>
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
            <th>Struttura</th>
            <th>Descrizione</th>
        </tr>
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
            <th>Struttura</th>
            <th>Descrizione</th>
        </tr>
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
            <th>Struttura</th>
            <th>Descrizione</th>
        </tr>
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
            <th>Struttura</th>
            <th>Descrizione</th>
        </tr>
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
    <td class="toggle" onclick="toggleContent(this)">OSSA CRANICHE</td>
    <td class="description">
        <table>
        <tr>
        <th>Osso</th>
        <th>Descrizione</th>
    </tr>
            <tr>
                <td>OSSO FRONTALE:</td>
                <td contenteditable="true">Normale</td>
            </tr>
            <tr>
                <td>OSSA PARIETALI:</td>
                <td contenteditable="true">Normale</td>
            </tr>
            <tr>
                <td>OSSA TEMPORALI:</td>
                <td contenteditable="true">Normale</td>
            </tr>
            <tr>
                <td>OSSO OCCIPITALE:</td>
                <td contenteditable="true">Normale</td>
            </tr>
            <tr>
                <td>FOSSA CRANICA ANTERIORE, MEDIA E POSTERIORE:</td>
                <td contenteditable="true">Normale</td>
            </tr>
            <tr>
                <td>BASE DEL CRANIO:</td>
                <td contenteditable="true">Normale</td>
            </tr>
            <tr>
            <td>SUTURA CRANICA:</td>
            <td contenteditable="true">Normale</td>
        </tr>
            <tr>
                <td>VALUTAZIONE FINALE DELL'OSSEO CRANICO:</td>
                <td contenteditable="true">Normale</td>
            </tr>
        </table>
    </td>
</tr>
<tr>
    <td class="toggle" onclick="toggleContent(this)">AngioTC - Vascolarizzazione</td>
    <td class="description">
    <table>
    <tr>
        <th>Vaso</th>
        <th>Descrizione</th>
    </tr>
       <tr>
    <td data-section="Carotid-Arteries" class="toggle" onclick="toggleContent(this)">Arterie Carotidi</td>
    <td>
        <table>
            <tr>
                <td data-section="Common-Carotid" class="toggle" onclick="toggleContent(this)">Carotidi Comuni</td>
                <td>
                    <table>
                        <tr>
                            <td>Sinistra:</td>
                            <td contenteditable="true">Permeabile.</td>
                        </tr>
                        <tr>
                            <td>Destra:</td>
                            <td contenteditable="true">Permeabile.</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td data-section="Int-Carotid" class="toggle" onclick="toggleContent(this)">Carotidi Interne</td>
                <td>
                    <table>
                        <tr>
                            <td>Sinistra:</td>
                            <td contenteditable="true">Permeabile.</td>
                        </tr>
                        <tr>
                            <td>Destra:</td>
                            <td contenteditable="true">Permeabile.</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td data-section="Ext-Carotid" class="toggle" onclick="toggleContent(this)">Carotidi Esterne</td>
                <td>
                    <table>
                        <tr>
                            <td>Sinistra:</td>
                            <td contenteditable="true">Permeabile.</td>
                        </tr>
                        <tr>
                            <td>Destra:</td>
                            <td contenteditable="true">Permeabile.</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </td>
</tr>

    <tr>
        <td class="toggle" onclick="toggleContent(this)">Circolo di Willis</td>
        <td>
            <table>
                <tr>
                    <td>Arteria cerebrale anteriore:</td>
                    <td contenteditable="true">Permeabile.</td>
                </tr>
                <tr>
                    <td>Arteria comunicante anteriore:</td>
                    <td contenteditable="true">Permeabile.</td>
                </tr>       
                <tr>
                    <td>Arteria cerebrale media:</td>
                    <td contenteditable="true">Permeabile.</td>
                </tr>
                <tr>
                    <td>Arteria cerebrale posteriore:</td>
                    <td contenteditable="true">Permeabile.</td>
                </tr>
                <tr>
                    <td>Arteria comunicante posteriore:</td>
                    <td contenteditable="true">Permeabile.</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
    <td class="toggle" onclick="toggleContent(this)">Circolo Posteriore</td>
    <td>
        <table>
            <tr>
                <td>Arterie Vertebrali</td>
                <td>
                    <table>
                        <tr>
                            <td>Sinistra:</td>
                            <td contenteditable="true">Permeabile.</td>
                        </tr>
                        <tr>
                            <td>Destra:</td>
                            <td contenteditable="true">Permeabile.</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>Arterie Basilari</td>
                <td>
                    <table>
                        <tr>
                            <td>Basilaris:</td>
                            <td contenteditable="true">Permeabile.</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
            <td class="toggle" onclick="toggleContent(this)">PICA</td>
            <td>
                <table>
                    <tr>
                        <td>Sinistra:</td>
                        <td contenteditable="true">Permeabile.</td>
                    </tr>
                    <tr>
                        <td>Destra:</td>
                        <td contenteditable="true">Permeabile.</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="toggle" onclick="toggleContent(this)">AICA</td>
            <td>
                <table>
                    <tr>
                        <td>Sinistra:</td>
                        <td contenteditable="true">Permeabile.</td>
                    </tr>
                    <tr>
                        <td>Destra:</td>
                        <td contenteditable="true">Permeabile.</td>
                    </tr>
                </table>
            </td>
        </tr>
        </table>
    </td>
</tr>

    <tr>
        <td class="toggle" onclick="toggleContent(this)">Seni Venosi della Dura Madre</td>
        <td>
            <table>
                <tr>
                    <td>Seni sagittale superiore:</td>
                    <td contenteditable="true">Permeabile.</td>
                </tr>
                <tr>
                    <td>Seni sagittale inferiore:</td>
                    <td contenteditable="true">Permeabile.</td>
                </tr>
                <tr>
                    <td>Seni trasverso:</td>
                    <td contenteditable="true">Permeabile.</td>
                </tr>
                <tr>
                    <td>Seni sigmoideo:</td>
                    <td contenteditable="true">Permeabile.</td>
                </tr>
                <tr>
                    <td>Seni cavernoso:</td>
                    <td contenteditable="true">Permeabile.</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td class="toggle" onclick="toggleContent(this)">Vene Giugulari</td>
        <td>
            <table>
                <tr>
                    <td>Vene Giugulari interne:</td>
                    <td contenteditable="true">Permeabile.</td>
                </tr>
                <tr>
                    <td>Vene Giugulari esterne:</td>
                    <td contenteditable="true">Permeabile.</td>
                </tr>
            </table>
        </td>
    </tr>
</table>
    </td>
</tr>
        <tr>
            <td>ALTRI RISULTATI</td>
            <td class="description" contenteditable="true">Eventuali ulteriori osservazioni</td>
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



    'Volumi_Cerebrali': {
        id: 'Volumi_Cerebrali',
        title: 'VOLUMI CEREBRALI',
        content: 'gfxgfxfgxgfxgfxgjfxjgfxjgfxjgfxj' // Aggiungi il contenuto della sezione qui, se necessario
    },
    'Strutture_Mediane': { // Questa è la nuova sezione
        id: 'Strutture_Mediane',
        title: 'STRUTTURE MEDIANE',
        content: '' // Contenuto della sezione
    },


};



/////////    INDICAZIONI CLINICHE    //////////
const clinicalIndicationsData = {
    'ct-head': {
        indications: [
            {
                id: 'Volumi_Cerebrali',
                label: 'Indicazione Volumi Cerebrali'
            },
            {
                id: 'Edema_Cerebrale',
                label: 'Indicazione Edema Cerebrale'
            },
            {
                id: 'Hemorragia_Intracranica',
                label: 'Indicazione Hemorragia Intracranica'
            }
        ],
        focus: {
            'Volumi_Cerebrali': ['Volumi_Cerebrali', 'Strutture_Mediane'], // Aggiunta di 'Strutture_Mediane'
            'Edema_Cerebrale': ['Edema_Cerebrale'], // Ad esempio
            'Hemorragia_Intracranica': ['Hemorragia_Intracranica'] // Ad esempio
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