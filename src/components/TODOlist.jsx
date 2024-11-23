import React from 'react'
import TODOcard from './TODOcard';

export default function TODOlist(props) {
    const {todos} = props

    return (
        <ul className='main'>
            {todos.map((todo, TODOindex) =>
            {
                return (
                    <TODOcard {...props} key={TODOindex} index={TODOindex}>
                        <p>{todo}</p>
                    </TODOcard>
                )
            })}
            
        </ul>
    );
}
