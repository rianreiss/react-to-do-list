import { useState } from 'react'
import filterSvg from '../assets/funnel.svg';
import resertSvg from '../assets/reset-arrow.svg';

const Filter = ({ filter, setFilter, setSort, categoryFilter, setCategoryFilter, priorityFilter, setPriorityFilter }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    }

    const resetFilters = () => {
        setFilter('all');
        setCategoryFilter('');
        setPriorityFilter('');
    }


    return (
        <div className="filter-container">
            <div className='filter-title'>
                <div onClick={handleToggle}>
                    <img src={filterSvg} />
                    <h2>Filtrar</h2>
                </div>
                { filter == "all" && categoryFilter == "" && priorityFilter == "" ? (
                    ""
                ) : (
                    
                    <img src={resertSvg} onClick={resetFilters} title='Resetar filtros' />
                )}
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

                            <div>
                                <p>Categoria:</p>
                                <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                                    <option value="">Todas</option>
                                    <option value="Trabalho">Trabalho</option>
                                    <option value="Pessoal">Pessoal</option>
                                    <option value="Estudos">Estudos</option>
                                </select>
                            </div>

                            <div>
                                <p>Prioridade:</p>
                                <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
                                    <option value="">Todas</option>
                                    <option value="1">Alta</option>
                                    <option value="2">Normal</option>
                                    <option value="3">Baixa</option>
                                </select>
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