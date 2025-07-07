
            // Dark Mode Toggle Functionality
            function myFunction() {
              const body = document.body;
              body.classList.toggle("dark-mode");

              // Change icon to reflect mode
              const icon = document.querySelector("#dark-mode span");
              if (body.classList.contains("dark-mode")) {
                  icon.classList.remove("fa-circle-half-stroke");
                  icon.classList.add("fa-sun");
              } else {
                  icon.classList.remove("fa-sun");
                  icon.classList.add("fa-circle-half-stroke");
              }
          }



          const element = document.querySelector('.typewriter');
          const texts = [
            'Love Micha',
            '',
            'Thanks for reading',
            'Thanks for reading\n– Love Michael.'
          ];
          
          let index = 0;
          let charIndex = 0;
          let isDeleting = false;
          
          function type() {
            if (index >= texts.length) return;
          
            const currentText = texts[index];
            const fullText = currentText.replace(/\n/g, '<br>'); // handle line breaks
            const partial = currentText.substring(0, charIndex).replace(/\n/g, '<br>');
            
            element.innerHTML = partial;
          
            if (!isDeleting) {
              if (charIndex < currentText.length) {
                charIndex++;
                setTimeout(type, 100);
              } else {
                setTimeout(() => {
                  isDeleting = true;
                  setTimeout(type, 100);
                }, 1000);
              }
            } else {
              if (charIndex > 0) {
                charIndex--;
                setTimeout(type, 50);
              } else {
                isDeleting = false;
                index++;
                setTimeout(type, 500);
              }
            }
          }
          
          type();
          