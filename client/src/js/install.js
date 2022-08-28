const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Defer prompt into later in the page lifecycle. Reference: Boot Camp Tutor Meg Meyers
    window.deferredPrompt = event;
    butInstall.style.visibility = 'visible';
});

// Click event handler on the `butInstall` element
// Reference: Boot Camp Tutor Meg Meyers. 
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
      return;
    }
  
    promptEvent.prompt();
    window.deferredPrompt = null;

    // Without this code, the console log reads an error saying that "e.split" isn't a function
    butInstall.classList.toggle('hidden', true);
    butInstall.textContent = "Installed!";
});

// Handler for the `appinstalled` event 
window.addEventListener('appinstalled', (event) => {
    console.log('Success', 'appinstalled', event);
});
