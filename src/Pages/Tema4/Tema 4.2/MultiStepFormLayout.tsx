// src/Pages/MultiStepForm/MultiStepFormLayout.tsx
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import './MultiStepForm.css';

const steps = [
  { step: 1, label: 'Datos Personales', path: 'step1' },
  { step: 2, label: 'Contacto', path: 'step2' },
  { step: 3, label: 'Preferencias', path: 'step3' },
  { step: 4, label: 'Confirmación', path: 'confirm' },
];

interface FormData {
  personal: { nombre: string; apellido: string };
  contact: { email: string; telefono: string };
  preferences: { newsletter: boolean; theme: string };
}

const initialData: FormData = {
  personal: { nombre: '', apellido: '' },
  contact: { email: '', telefono: '' },
  preferences: { newsletter: false, theme: 'light' },
};

const MultiStepFormLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const savedData = sessionStorage.getItem('multiStepFormData');
  const savedCompleted = sessionStorage.getItem('multiStepCompleted') || '[]';

  const formData: FormData = savedData ? JSON.parse(savedData) : initialData;
  const completedSteps: number[] = JSON.parse(savedCompleted);

  const currentPath = location.pathname.split('/').pop();
  const currentStepObj = steps.find((s) => s.path === currentPath);
  const currentStep = currentStepObj ? currentStepObj.step : 1;

  // Bloquear acceso directo a pasos no permitidos
  for (let i = 1; i < currentStep; i++) {
    if (!completedSteps.includes(i)) {
      const firstIncomplete = steps.find((s) => !completedSteps.includes(s.step));
      if (firstIncomplete) {
        navigate(firstIncomplete.path, { replace: true });
        return null;
      }
    }
  }

  const updateFormData = (stepKey: keyof FormData, data: any) => {
    const updatedData = { ...formData, [stepKey]: data };
    sessionStorage.setItem('multiStepFormData', JSON.stringify(updatedData));
  };

  const markStepCompleted = (stepNumber: number) => {
    const newCompleted = [...new Set([...completedSteps, stepNumber])];
    sessionStorage.setItem('multiStepCompleted', JSON.stringify(newCompleted));
  };

  const progressPercent = (completedSteps.length / (steps.length - 1)) * 100;

  return (
    <div className="multi-step-layout">
      <header>
        <h1>Formulario de Registro Multi-paso</h1>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
        <nav className="steps-nav">
          {steps.map(({ step, label, path }) => {
            const isCompleted = completedSteps.includes(step);
            const isCurrent = step === currentStep;
            const canNavigate = step < currentStep || isCompleted;
            return (
              <button
                key={step}
                disabled={!canNavigate && !isCurrent}
                className={`step-button ${isCurrent ? 'current' : ''} ${
                  isCompleted ? 'completed' : ''
                }`}
                onClick={() => {
                  if (canNavigate || isCurrent) navigate(path);
                }}
                aria-current={isCurrent ? 'step' : undefined}
              >
                {label}
              </button>
            );
          })}
        </nav>
      </header>
      <main>
        <Outlet
          context={{ formData, updateFormData, markStepCompleted, completedSteps }}
        />
      </main>
    </div>
  );
};

export default MultiStepFormLayout;
