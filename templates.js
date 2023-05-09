
const templates = {
    'ct-head': `
    <table>
        <tr>
            <th>Organo\Sistema</th>
            <th>Descrizione</th>
        </tr>
        <tr>
            <td>VOLUME CEREBRALE</td>
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
    
        <tr>
            <td>VOLUME IPPOTALAMICO</td>
            <td class="description" contenteditable="true">Normale</td>
        </tr>
        <tr>
            <td>CERVELLO TRONCO CEREBELLO</td>
            <td class="description">
                <table>
                    <tr>
                        <td>VOLUME:</td>
                        <td contenteditable="true">Normale</td>
                    </tr>
                    <tr>
                        <td>INTENSITÀ DEL SEGNALE:</td>
                        <td contenteditable="true">Normale</td>
                    </tr>
                    <tr>
                        <td>CONDIZIONE:</td>
                        <td contenteditable="true">Nessuna evidenza di progressiva paralisi sopranucleare, atrofia multisistemica o altre condizioni neurodegenerative cerebellari primarie.</td>
                    </tr>
                </table>
            </td>
        </tr>
    
        <tr>
            <td>CORTECCIA GANGLI BASALI</td>
            <td class="description" contenteditable="true">EVIDENZA: Nessuna evidenza di lesioni pregresse, mineralizzazione anomala, malattia da prioni o encefalite autoimmune.</td>
        </tr>
        <tr>
            <td>ISCHEMIA</td>
            <td class="description">
                <table>
                    <tr>
                        <td>INFARTO:</td>
                        <td contenteditable="true">Nessuno</td>
                    </tr>
                    <tr>
                        <td>MALATTIA CRONICA DELLE PICCOLE VIE VASCOLARI:</td>
                        <td>
                            <table>
                                <tr>
                                    <td>COMPONENTE PROFONDA:</td>
                                    <td contenteditable="true">assente</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
    
                    <tr>
                        <td>MICROEMORRAGIE CEREBRALI:</td>
                        <td contenteditable="true">Nessuna</td>
                    </tr>
                </table>
            </td>
        </tr>
    
        <tr>
            <td>MASSA</td>
            <td class="description">
                <table>
                    <tr>
                        <td>POSIZIONE:</td>
                        <td contenteditable="true">regione sellare e soprasellare</td>
                    </tr>
                    <tr>
                        <td>DESCRIZIONE:</td>
                        <td contenteditable="true">con contrasto, con una misura di circa 3,2 x 2,8 x 3,1 cm, che comprime superiormente il chiasma ottico e si estende bilateralmente nei seni cavernosi, più coerente con un macroadenoma ipofisario</td>
                    </tr>
                </table>
            </td>
        </tr>
    
        <tr>
            <td>VENTRICOLI</td>
            <td class="description">
                <table>
                    <tr>
                        <td>IDROCEFALO:</td>
                        <td>
                            <table>
                                <tr>
                                    <td>TIPO:</td>
                                    <td contenteditable="true">No</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
    
                    <tr>
                        <td>DESCRIZIONE:</td>
                        <td contenteditable="true">Nessuna</td>
                    </tr>
                </table>
            </td>
        </tr>
    
        <tr>
            <td>COLLEZIONI DI LIQUIDO EXTRA ASSIALE</td>
            <td class="description" contenteditable="true">Nessuna</td>
        </tr>
        <tr>
            <td>ALTRI RISULTATI</td>
            <td class="description" contenteditable="true">Nessuna significativa opacizzazione delle cellule mastoidee</td>
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

    'ct-neck': 'Contenuto per CT NECK!!...',
    'ct-sinuses': 'Contenuto per CT SINUSES...',
    'ct-chest': 'Contenuto per CT CHEST...',
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

    'ct-abdomen-pelvis': 'Contenuto per CT ABDOMEN-PELVIS...',
    'ct-pankreas': 'Contenuto per CT PANKREAS...',
    'ct-spine': 'Contenuto per CT SPINE...',
    'angio-tc': 'Contenuto per ANGIO TC...',
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
