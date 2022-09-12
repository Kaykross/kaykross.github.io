const first = document.querySelector('#first-name');
const second = document.querySelector('#second-name');
const result = document.querySelector(".result");
// const myWorker = new Worker('./worker.js');

// const isServiceWorker = "serviceWorker" in navigator;
// const serviceWorker = navigator.serviceWorker;

// using async await to register service worker;
//  window.onload = async e =>{
//     if(serviceWorker){ 
//         await serviceWorker.register('service-worker.js',{scope:"/"});
//         await serviceWorker.register('service-worker.min.js',{scope:"/"});
//     }
// };

const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
      try {
        await navigator.serviceWorker.register("/service-worker.min.js", {scope: "/",});
      } catch (error) {console.error(`Registration failed with ${error}`);}
    }
  };

registerServiceWorker();
    








  
  

  
