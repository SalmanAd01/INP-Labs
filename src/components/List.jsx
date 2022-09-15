import React from 'react'

const List = ({current,name,pos}) => {
    return (
        <section className="container list h-100" id="list">
            <div className="list-group">
                {
                    current ? <a href="#hero" className="list-group-item list-group-item-action active" aria-current={current} key={pos}>
                    {name}
                </a> : <a href="#about" className="list-group-item list-group-item-action" aria-current={current} key={pos}>
                    {name}
                </a>
                }
            </div>
        </section>
    )
}

export default List