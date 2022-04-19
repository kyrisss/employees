

const SearchForm = (props) =>{
    return(
        <input type="text" className="form-control seacrh-input" placeholder="Найти сотрудника" onChange={props.searchEmp} value={props.searchValue}/>
    )
}

export default SearchForm