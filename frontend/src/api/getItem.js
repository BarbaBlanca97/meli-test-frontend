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
                picture: 'https://www.shutterstock.com/image-vector/small-business-idea-successful-entrepreneur-260nw-2150553663.jpg',
                "condition": 'new',
                "free_shipping": true,
                "sold_quantity": 23,
                "description": 'In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign. You can enable this formatting by setting the currencySign option to "accounting". The default value is "standard"',
            })
        }, 2600)
    })
}

export {
    queryId,
    getItem,
}
