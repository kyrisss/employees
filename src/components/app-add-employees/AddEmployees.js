import { Component } from "react"

class AddEmployees extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: '',
            valid: true
        }
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (this.state.name.length < 3 || !this.state.salary) {
            this.setState((state) => ({
                name: '',
                salary: '',
                valid: false
            }))
            return
        }

        this.props.addEmployees(this.state.name, this.state.salary)
        this.setState({
            name: '',
            salary: '',
            valid: true
        })
    }

    render() {
        const { name, salary, valid } = this.state
        const validBtnClass = "btn btn-outline-light"
        const notValidBtnClass = "btn btn-outline-danger"


        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onChangeValue} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onChangeValue} />

                    <button type="submit"
                        className={valid ? validBtnClass : notValidBtnClass}>Добавить</button>
                </form>
            </div>
        )
    }
}

export default AddEmployees