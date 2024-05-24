document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("KAlzJsaohdcmJqtOc"); 

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID = 'service_0thmp3x';
        const templateID = 'template_xs2pgzl'; 

        const formData = {
            nombre: contactForm.nombre.value,
            telefono: contactForm.telefono.value,
            correo: contactForm.correo.value,
            mensaje: contactForm.mensaje.value,
        };

        emailjs.send(serviceID, templateID, formData)
            .then(function(response) {
                console.log('Correo enviado con éxito', response.status, response.text);
                alert('Correo enviado con éxito');
                contactForm.reset();
            }, function(error) {
                console.error('Error al enviar el correo', error);
                alert('Error al enviar el correo, por favor intenta nuevamente.');
            });
    });
});
