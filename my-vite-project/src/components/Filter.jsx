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
                <h2>Filtrar</h2>
            </div>
            <div className={`teste ${isExpanded ? 'visible' : ''}`}>
                {isExpanded ? (
                    <div>
                        <div className={`filter-options`}>
                            <div>
                                <p>Status:</p>
                                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                                    <option value="all">Todas</option>
                                    <option value="completed">Completas</option>
                                    <option value="inCompleted">Não Completas</option>
                                </select>
                            </div>

                            <div>
                                <p>Ordem Alfabética:</p>
                                <button onClick={() => setSort("Asc")}>Crescente</button>
                                <button onClick={() => setSort("Desc")}>Decrescente</button>
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