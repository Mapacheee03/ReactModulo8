import { useOutletContext, useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface FormData {
  personal: { nombre: string; apellido: string };
  contact: { email: string; telefono: string };
  preferences: { newsletter: boolean; theme: string };
}

interface ContextType {
  formData: FormData;
  updateFormData: (key: keyof FormData, data: any) => void;
  markStepCompleted: (step: number) => void;
}

const Step2Contact = () => {
  const { formData, updateFormData, markStepCompleted } =
    useOutletContext<ContextType>();
  const navigate = useNavigate();

  const [email, setEmail] = useState(formData.contact.email);
  const [telefono, setTelefono] = useState(formData.contact.telefono);
  const [error, setError] = useState('');

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleNext = () => {
    if (!validateEmail(email)) {
      setError('Ingresa un email válido');
      return;
    }
    if (!telefono.trim()) {
      setError('Ingresa un teléfono');
      return;
    }
    updateFormData('contact', { email, telefono });
    markStepCompleted(2);
    navigate('/multi-step-form/step3');
  };

  const handleBack = () => {
    navigate('/multi-step-form/step1');
  };

  return (
    <section>
      <h2>Contacto</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
      </label>
      <label>
        Teléfono:
        <input
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </label>
      <div>
        <button onClick={handleBack}>Anterior</button>{' '}
        <button onClick={handleNext}>Siguiente</button>
      </div>
    </section>
  );
};

export default Step2Contact;
