import { useState } from 'react'
import filterSvg from '../assets/funnel.svg';

const Filter = ({ filter, setFilter, setSort }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    }


    return (
        <div className="filter-container">
            <div onClick={handleToggle} className='filter-title'>
                <img src={filterSvg} alt='teste' />
                <h2>Filtrar teste</h2>
            </div>
            <div>
                {isExpanded ? (
                    <div>
                        <div className={`filter-options ${isExpanded ? 'visible' : ''}`}>
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

                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Filter