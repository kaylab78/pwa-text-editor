const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event - Done
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
});

// TODO: Implement a click event handler on the `butInstall` element - Done
butInstall.addEventListener('click', async () => {
    // event.prompt();
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = "Installed!";
});

// TODO: Add an handler for the `appinstalled` event - Done
window.addEventListener('appinstalled', (event) => {
    console.log('Success', 'appinstalled', event);
});
