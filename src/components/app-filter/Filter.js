

const Filter = (props) => {

    const buttonsData = [
        { name: "all", label: "Все сотрудники" },
        { name: "like", label: "На повышение" },
        { name: "salary", label: "З/П больше 1000$" }
    ]

    const buttons = buttonsData.map(btn => {
        const active = props.filter == btn.name

        return (
            <button type="button"
                className={`btn ${active ? "btn-light" : "btn-outline-light"}`}
                key={btn.name}
                onClick={() => props.setFilter(btn.name)}>
                {btn.label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default Filter;