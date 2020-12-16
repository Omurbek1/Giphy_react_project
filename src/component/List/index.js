import React from 'react'

export default function List(props) {
    return (
        <div>
            {props.data ?
                props.data.map(el => {
                    return (
                        <iframe key={el.id}
                         src={el.embed_url}
                            width='100px'
                            height='100px'></iframe>
                    )

                })
                : 'Здесь ничего нет!!!'
            }
        </div>
    )
}
