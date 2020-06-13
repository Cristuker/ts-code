import React from 'react'

interface ContadorValorProps {
    contador: number
}

export default function ContadorValor(props:ContadorValorProps) {

    return (
        <div>
            {props.contador}
        </div>
    )
}
