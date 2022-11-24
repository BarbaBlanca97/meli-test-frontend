const queryId = 'getItem'

const getItem = async (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve({
                "id": 'asdasdasd',
                "title": 'Fuente de alimentación para PC LNZ SX Series SX500-FC 500W negra 115V/230V',
                "price": {
                    "currency": 'ARS',
                    "amount": 3456,
                    "decimals": 74,
                },
                picture: 'https://http2.mlstatic.com/D_NQ_NP_610517-MLA50731051105_072022-O.webp',
                "condition": 'new',
                "free_shipping": true,
                "sold_quantity": 23,
                "description": 'La sierra Einhell TC-CS 1400/1 es la solución para realizar cortes con precisión y velocidad. Es un producto que hace la tarea más fácil y por lo tanto es excelente para equipar un taller o una carpintería, ya sea profesional o amateur. Diámetro del disco Su disco de 184mm posibilita cortes definidos y prolijos, difíciles de alcanzar de manera manual.',
            })
        }, 2600)
    })
}

export {
    queryId,
    getItem,
}
