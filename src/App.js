import './App.scss';
import AppInfo from './components/app-info/AppInfo';
import SearchForm from './components/app-search-form/SearchForm';
import Filter from './components/app-filter/Filter';
import EmployeesList from './components/app-employees-list/EmployeesList';
import AddEmployees from './components/app-add-employees/AddEmployees';
import { Component } from 'react';
import nextId from "react-id-generator";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      employees: [
        {
          id: nextId(),
          name: "John",
          salary: 800,
          increase: true,
          like: true
        },
        {
          id: nextId(),
          name: "Ivan",
          salary: 3000,
          increase: true,
          like: false
        },
        {
          id: nextId(),
          name: "Roman",
          salary: 5000,
          increase: false,
          like: false
        },
      ],
      search: '',
      filter: 'all'
    }
  }

  onDelete = (id) => {
    this.setState(({ employees }) => ({
      employees: employees.filter((item) => (item.id != id))
    }))
  }

  addEmployees = (name, salary) => {
    this.setState(({ employees }) => ({
      employees: [...employees, {
        id: nextId(),
        name,
        salary,
        increase: false
      }]
    }))
  }

  visibleEmp = (emp, search) =>{
  
    return emp.filter(item => item.name.includes(search))
  }

  toggleProp = (id, prop) => {
    this.setState(({ employees }) => ({
      employees: employees.map(item => item.id == id ? { ...item, [prop]: !item[prop] } : item)
    }))
  }

  searchEmp = (e) => {
    this.setState({search: e.target.value})
  }

  filterEmp = (emp, filter) => {
      switch(filter){
        case "like":
          return emp.filter(item => item.like)
        case "salary":
          return emp.filter(item => item.salary > 1000)
        default:
          return emp
      }
  }

  setFilter = (filter) => {
    this.setState({filter})
  }



  render() {

    const { employees, search, filter } = this.state
    const employeesNumber = employees.length
    const increasedNumber = employees.filter(item => item.increase).length
    const visibleEmp = this.filterEmp(this.visibleEmp(employees, search), filter)

    return (
      <div className="app">
        <AppInfo employeesNumber={employeesNumber} increasedNumber={increasedNumber} />
        <div className="search-panel">
          <SearchForm searchEmp={this.searchEmp} searchValue={search}/>
          <Filter setFilter={this.setFilter} filter={filter}/>
        </div>
        <EmployeesList employees={visibleEmp} onDelete={this.onDelete} toggleProp={this.toggleProp} />
        <AddEmployees addEmployees={this.addEmployees} />
      </div>
    );
  }

}

export default App;
