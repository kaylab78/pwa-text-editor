const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event - Done
window.addEventListener('beforeinstallprompt', (event) => {
    // event.preventDefault();
    // Defer prompt into later in the page lifecycle. (tutor)
    window.deferredPrompt = event;
    butInstall.style.visibility = 'visible';
});

// TODO: Implement a click event handler on the `butInstall` element - Done
// butInstall.addEventListener('click', async () => {
//     // event.prompt();
//     butInstall.setAttribute('disabled', true);
//     butInstall.textContent = "Installed!";
// });

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
  
    if (!promptEvent) {
      return;
    }
  
    promptEvent.prompt();
  
    window.deferredPrompt = null;
  
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event - Done
window.addEventListener('appinstalled', (event) => {
    console.log('Success', 'appinstalled', event);
});
