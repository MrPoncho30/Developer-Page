// src/ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.send(
            'service_0thmp3x', 
            'template_xs2pgzl', 
            formData,
            'KAlzJsaohdcmJqtOc' 
        )
        .then((response) => {
            console.log('Correo enviado con éxito', response.status, response.text);
            alert('Correo enviado con éxito');
            setFormData({
                nombre: '',
                telefono: '',
                correo: '',
                mensaje: ''
            });
        }, (error) => {
            console.error('Error al enviar el correo', error);
            alert('Error al enviar el correo, por favor intenta nuevamente.');
        });
    };

    return (
        <form onSubmit={handleSubmit} className="Formulario">
            <fieldset>
                <legend>Contacto</legend>
                <div className="contenedor-campos">
                    <div className="campo">
                        <label>Nombre</label>
                        <input
                            className="input-text"
                            type="text"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="campo">
                        <label>Teléfono</label>
                        <input
                            className="input-text"
                            type="tel"
                            name="telefono"
                            placeholder="Tu teléfono"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="campo">
                        <label>Correo</label>
                        <input
                            className="input-text"
                            type="email"
                            name="correo"
                            placeholder="Tu email"
                            value={formData.correo}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="campo">
                        <label>Mensaje</label>
                        <textarea
                            className="input-text"
                            name="mensaje"
                            placeholder="Tu mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className="campo">
                        <button type="submit" id="submitBtn">Enviar</button>
                    </div>
                </div>
            </fieldset>
        </form>
    );
};

export default ContactForm;
