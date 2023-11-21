document.getElementById('startbutton').addEventListener('click', function() {
      const sectionPosition = document.getElementById('section1').offsetTop;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    });