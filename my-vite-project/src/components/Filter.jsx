const Filter = ({ filter, setFilter, setSort }) => {
    return (
        <div className="filter">
            <h2>Filter:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="inCompleted">Not Completed</option>
                    </select>
                </div>

                <div>
                    <p>Alphabetical  Ordem:</p>
                    <button onClick={() => setSort("Asc")}>Asc</button>
                    <button onClick={() => setSort("Desc")}>Desc</button>
                </div>
            </div>
        </div>
    );
};

export default Filter