import { useParams, useNavigate } from 'react-router-dom';
import { employees } from '../../../Data/employees';
import './employee.css'; // Importa tus estilos

const EmployeeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const employee = employees.find((e) => e.id === id);

  if (!employee) {
    return <h2>Empleado no encontrado</h2>;
  }

  return (
    <div className="employee-container employee-detail">
      <h1 className="employee-title">{employee.name}</h1>
      <p><strong>Puesto:</strong> {employee.position}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Teléfono:</strong> {employee.phone}</p>
      <p><strong>Departamento:</strong> {employee.department}</p>

      <button className="back-button" onClick={() => navigate(-1)}>
        Volver a la lista
      </button>
    </div>
  );
};

export default EmployeeDetail;
