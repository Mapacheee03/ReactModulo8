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

const Step3Preferences = () => {
  const { formData, updateFormData, markStepCompleted } =
    useOutletContext<ContextType>();
  const navigate = useNavigate();

  const [newsletter, setNewsletter] = useState(formData.preferences.newsletter);
  const [theme, setTheme] = useState(formData.preferences.theme);

  const handleNext = () => {
    updateFormData('preferences', { newsletter, theme });
    markStepCompleted(3);
    navigate('/multi-step-form/confirm');
  };

  const handleBack = () => {
    navigate('/multi-step-form/step2');
  };

  return (
    <section>
      <h2>Preferencias</h2>
      <label>
        <input
          type="checkbox"
          checked={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
        />
        Deseo recibir newsletter
      </label>
      <label>
        Tema:
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Claro</option>
          <option value="dark">Oscuro</option>
        </select>
      </label>
      <div>
        <button onClick={handleBack}>Anterior</button>{' '}
        <button onClick={handleNext}>Siguiente</button>
      </div>
    </section>
  );
};

export default Step3Preferences;
