//CORNERSTONE
const { cornerstone } = window;
const { cornerstoneWADOImageLoader } = window;
const { dicomParser } = window;

//Configura Cornerstone WADO Image Loader e registra i codec:
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

// Registra i codec di immagine
cornerstoneWADOImageLoader.webWorkerManager.initialize({
  webWorkerPath: '/node_modules/cornerstone-wado-image-loader/dist/cornerstoneWADOImageLoaderWebWorker.js',
  taskConfiguration: {
    'decodeTask': {
      codecsPath: '/node_modules/cornerstone-wado-image-loader/dist/cornerstoneWADOImageLoaderCodecs.js'
    }
  }
});
//CORNERSTONE
//Creare una funzione per visualizzare l'immagine DICOM:
// Cambia questa variabile per puntare alla cartella "dicom" sul tuo server
const dicomFolderUrl = "https://andreasertorio.github.io/ACS_01/02/dicom/";

const numSlices = 140;
const dicomFilenames = Array.from({ length: numSlices }, (_, i) => `1-${String(i + 1).padStart(3, "0")}.dcm`);
const imageIds = dicomFilenames.map(filename => `wadouri:${dicomFolderUrl}${filename}`);


// Carica tutte le immagini DICOM

async function loadImage(sliceIndex) {
    const element = document.getElementById("dicomImage");
    cornerstone.enable(element);
  
    try {
      const imageId = imageIds[sliceIndex];
      const image = await cornerstone.loadImage(imageId);
      cornerstone.displayImage(element, image);
    } catch (error) {
      console.error("Si è verificato un errore nel caricamento dell'immagine:", error);
    }
  }
  

  let currentSliceIndex = 0;

  document.getElementById("previousSlice").onclick = () => {
    if (currentSliceIndex > 0) {
      currentSliceIndex--;
      loadImage(currentSliceIndex);
    }
  };
  
  document.getElementById("nextSlice").onclick = () => {
    if (currentSliceIndex < numSlices - 1) {
      currentSliceIndex++;
      loadImage(currentSliceIndex);
    }
  };
  
  // Carica la prima immagine della serie
  loadImage(0);