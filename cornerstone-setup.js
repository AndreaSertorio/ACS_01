// cornerstone-setup.js

function initializeCornerstone() {
    // Configura il loader di immagini WADO
    cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
    cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
  
    // Registra il loader di immagini WADO come loader di default
    cornerstone.registerImageLoader(
      'wadors',
      cornerstoneWADOImageLoader.wadors.loadImage
    );
  
    // Inizializza l'elemento Cornerstone
    const element = document.getElementById('dicomImage');
    cornerstone.enable(element);
  
    // Funzione per caricare e visualizzare l'immagine DICOM
    function loadAndViewImage(url) {
      const imageId = `wadors:${url}`;
  
      cornerstone.loadAndCacheImage(imageId).then((image) => {
        const viewport = cornerstone.getDefaultViewportForImage(element, image);
        cornerstone.displayImage(element, image, viewport);
      });
    }
  
    // Carica e visualizza un'immagine DICOM da un URL
    const dicomUrl = 'https://your-dicom-server.com/path/to/dicom/image.dcm';
    loadAndViewImage(dicomUrl);
  }
  
  // Assicurati che il codice venga eseguito solo dopo il caricamento completo del DOM
  window.addEventListener('DOMContentLoaded', initializeCornerstone);
  