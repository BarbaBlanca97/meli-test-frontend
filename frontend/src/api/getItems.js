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
                        amount: 33,
                        decimals: 0,
                    }
                },
                {
                    id: 'id2',
                    title: 'Item 2',
                    picture: 'https://http2.mlstatic.com/D_NQ_NP_851471-MLA45979938567_052021-O.webp',
                    condition: 'usd',
                    free_shipping: false,
                    location: 'Paraná',
                    price: {
                        currency: 'ARS',
                        amount: 4567,
                        decimals: 0,
                    }
                },
                {
                    id: 'id3',
                    title: 'Item 3',
                    picture: 'https://http2.mlstatic.com/D_NQ_NP_851471-MLA45979938567_052021-O.webp',
                    condition: 'new',
                    free_shipping: false,
                    location: 'Captial Federal',
                    price: {
                        currency: 'ARS',
                        amount: 120,
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
