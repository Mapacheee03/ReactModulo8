import { Link } from 'react-router-dom';
import { employees } from '../../../Data/employees';
import './employee.css'; // Importa tus estilos

const EmployeeList = () => {
  return (
    <div className="employee-container">
      <h1 className="employee-title">Directorio de Empleados</h1>
      <ul className="employee-list">
        {employees.map((emp) => (
          <li key={emp.id}>
            <Link to={`/employee/${emp.id}`} className="employee-link">
              <strong>{emp.name}</strong> — {emp.position}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
