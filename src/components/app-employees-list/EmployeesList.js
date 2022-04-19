
import EmployeesItem from './../app-emloyees-item/EmloyeesItem';

const EmployeesList = ({ employees, onDelete, toggleProp}) => {

    //console.log(employees)
    const elements = employees.map(employee => {
        const { id, ...employeesProps } = employee
        return <EmployeesItem
            key={id}
            onDelete={() => onDelete(id)}
            toggleProp={(e)=> toggleProp(id, e.currentTarget.getAttribute("data-toggle"))}
            {...employeesProps} />
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList