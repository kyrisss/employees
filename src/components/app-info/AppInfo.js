

const AppInfo = ({increasedNumber, employeesNumber}) => {
    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employeesNumber}</h2>
            <h2>Получат премию: {increasedNumber}</h2>
        </div>
    )
}

export default AppInfo;