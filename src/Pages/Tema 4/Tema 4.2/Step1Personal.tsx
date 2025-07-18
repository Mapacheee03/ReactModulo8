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

const Step1Personal = () => {
  const { formData, updateFormData, markStepCompleted } =
    useOutletContext<ContextType>();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState(formData.personal.nombre);
  const [apellido, setApellido] = useState(formData.personal.apellido);
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!nombre.trim() || !apellido.trim()) {
      setError('Por favor llena todos los campos');
      return;
    }
    updateFormData('personal', { nombre, apellido });
    markStepCompleted(1);
    navigate('/multi-step-form/step2');
  };

  return (
    <section>
      <h2>Datos Personales</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          autoFocus
        />
      </label>
      <label>
        Apellido:
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </label>
      <button onClick={handleNext}>Siguiente</button>
    </section>
  );
};

export default Step1Personal;
