document.addEventListener('DOMContentLoaded', function () {
    const accesoBtn = document.querySelector('.acceso-button');
    const modal = document.getElementById("infoModal");
    const closeBtn = document.getElementById("closeModal");

    let redirectUrl = "";

    if (accesoBtn) {
      accesoBtn.addEventListener('click', function (e) {
        e.preventDefault(); // Evita redirección inmediata
        redirectUrl = this.getAttribute("href"); // Guarda la URL del botón
        modal.style.display = "flex";
      });
    }

    function closeModalAndRedirect() {
      modal.style.display = "none";
      if (redirectUrl) {
        window.open(redirectUrl, '_blank'); // Abre en nueva pestaña
      }
    }

    closeBtn.addEventListener('click', closeModalAndRedirect);

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModalAndRedirect();
      }
    });
  });