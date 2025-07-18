import { useOutletContext, useNavigate } from 'react-router-dom';

interface FormData {
  personal: { nombre: string; apellido: string };
  contact: { email: string; telefono: string };
  preferences: { newsletter: boolean; theme: string };
}

interface ContextType {
  formData: FormData;
  completedSteps: number[];
}

const Step4Confirm = () => {
  const { formData, completedSteps } = useOutletContext<ContextType>();
  const navigate = useNavigate();

  return (
    <section>
      <h2>Confirmación</h2>
      <div>
        <h3>Datos Personales</h3>
        <p>
          {formData.personal.nombre} {formData.personal.apellido}
        </p>
        {completedSteps.includes(1) && (
          <button onClick={() => navigate('/multi-step-form/step1')}>Editar</button>
        )}
      </div>

      <div>
        <h3>Contacto</h3>
        <p>{formData.contact.email}</p>
        <p>{formData.contact.telefono}</p>
        {completedSteps.includes(2) && (
          <button onClick={() => navigate('/multi-step-form/step2')}>Editar</button>
        )}
      </div>

      <div>
        <h3>Preferencias</h3>
        <p>{formData.preferences.newsletter ? 'Sí' : 'No'} newsletter</p>
        <p>Tema: {formData.preferences.theme}</p>
        {completedSteps.includes(3) && (
          <button onClick={() => navigate('/multi-step-form/step3')}>Editar</button>
        )}
      </div>

      <button
        style={{ marginTop: '1.5rem' }}
        onClick={() => alert('Formulario enviado correctamente!')}
      >
        Confirmar y Enviar
      </button>
    </section>
  );
};

export default Step4Confirm;
