import { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import filterSvg from '../assets/funnel.svg';
import resertSvg from '../assets/reset-arrow.svg';

const Filter = ({ filter, setFilter, setSort, categoryFilter, setCategoryFilter, priorityFilter, setPriorityFilter }) => {
    const [filterContainer, setFilterContainer] = useState(false);
    const filterRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setFilterContainer(false);
            }
        };

        
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [filterRef]);

    const openFilter = () => {
        setFilterContainer(!filterContainer);
    };

    const resetFilters = () => {
        setFilter('all');
        setCategoryFilter('');
        setPriorityFilter('');
    };

    return (
        <div className="filter-container" ref={filterRef}>
            <div className='filter-title'>
                <div onClick={openFilter}>
                    <img src={filterSvg} />
                    <h2>Filtrar</h2>
                </div>
                {filter === "all" && categoryFilter === "" && priorityFilter === "" ? (
                    ""
                ) : (
                    <img src={resertSvg} onClick={resetFilters} title='Resetar filtros' />
                )}
            </div>

            <CSSTransition
                in={filterContainer}
                timeout={300}
                classNames="openFilter"
                unmountOnExit
            >
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
            </CSSTransition>
        </div>
    );
};

export default Filter;
