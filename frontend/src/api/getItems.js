const queryId = 'getItems'

const getItems = async (query) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve([
                {
                    id: 'id1',
                    title: 'Fuente de alimentación para PC LNZ SX Series SX500-FC 500W negra 115V/230V',
                    picture: 'https://http2.mlstatic.com/D_NQ_NP_851471-MLA45979938567_052021-O.webp',
                    condition: 'new',
                    free_shipping: true,
                    location: 'Captial Federal',
                    price: {
                        currency: 'ARS',
                        amount: 7890,
                        decimals: 99,
                    }
                },
                {
                    id: 'id2',
                    title: 'Sierra circular eléctrica Bosch Professional GKS 150 184mm 1500W azul 220V',
                    picture: 'https://http2.mlstatic.com/D_NQ_NP_992170-MLA40581052455_012020-V.webp',
                    condition: 'usd',
                    free_shipping: false,
                    location: 'Paraná',
                    price: {
                        currency: 'ARS',
                        amount: 21899,
                        decimals: 0,
                    }
                },
                {
                    id: 'id3',
                    title: 'Motorola G42 128 Gb Verde Atlántico 4gb Ram',
                    picture: 'https://http2.mlstatic.com/D_NQ_NP_930921-MLA52181901586_102022-V.webp',
                    condition: 'usd',
                    free_shipping: false,
                    location: 'Captial Federal',
                    price: {
                        currency: 'ARS',
                        amount: 57999,
                        decimals: 50,
                    }
                },
            ])
        }, 2600)
    })
}

export {
    queryId,
    getItems,
}
