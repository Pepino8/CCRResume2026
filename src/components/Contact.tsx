import React, { useState } from 'react';
import './Contact.css';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) {
      tempErrors.name = 'El nombre es obligatorio.';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      tempErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!emailRegex.test(form.email)) {
      tempErrors.email = 'El formato de correo no es válido.';
    }

    if (!form.message.trim()) {
      tempErrors.message = 'El mensaje no puede estar vacío.';
    } else if (form.message.trim().length < 10) {
      tempErrors.message = 'El mensaje debe tener al menos 10 caracteres.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="app-container">
      <div className="section-header">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">¿Tienes algún proyecto en mente o te gustaría colaborar? Escríbeme y hagamos algo increíble.</p>
      </div>

      <div className="contact-section">
        {/* Left Column: Contact details */}
        <div className="contact-info-panel">
          <div className="contact-info-card">
            <div className="contact-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div>
              <div className="contact-detail-lbl">Email</div>
              <div className="contact-detail-val">
                <a href="mailto:cristobal.coronado@cetys.edu.mx">cristobal.coronado@cetys.edu.mx</a>
              </div>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <div className="contact-detail-lbl">Teléfono</div>
              <div className="contact-detail-val">
                <a href="tel:+526462568363">+52 (646) 256 8363</a>
              </div>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div>
              <div className="contact-detail-lbl">Ubicación</div>
              <div className="contact-detail-val">Ensenada, B.C., México</div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact form */}
        <div className="glass-card contact-form-panel">
          {!isSubmitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nombre Completo</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  className="form-input" 
                  placeholder="Tu nombre..."
                  value={form.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  className="form-input" 
                  placeholder="tu@correo.com"
                  value={form.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea 
                  id="message"
                  name="message" 
                  className="form-input" 
                  placeholder="Escribe tu mensaje aquí..."
                  value={form.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
                      <line x1="12" y1="2" x2="12" y2="6"></line>
                      <line x1="12" y1="18" x2="12" y2="22"></line>
                      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                      <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                      <line x1="2" y1="12" x2="6" y2="12"></line>
                      <line x1="18" y1="12" x2="22" y2="12"></line>
                      <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                      <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="success-card">
              <div className="success-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="success-title">¡Mensaje Enviado!</h3>
              <p className="success-desc">Gracias por contactarme, Cristobal te responderá lo antes posible.</p>
              <button 
                className="btn btn-secondary" 
                onClick={() => setIsSubmitted(false)}
              >
                Enviar otro mensaje
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
