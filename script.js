    // Fonction pour détecter si l'utilisateur utilise un appareil mobile
    function detectMobileDevice() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // Redirection en fonction de la détection d'appareil mobile
    window.onload = function() {
      if (detectMobileDevice()) {
        window.location.href = './mobile/index-mobile.html';
      } else {
      }
    };


document.getElementById('startbutton').addEventListener('click', function() {
      const sectionPosition = document.getElementById('section1').offsetTop;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    });