const priceFormatter = (price) => {

    const formatter = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN'
    })

    return formatter.format(price)

}

export default priceFormatter
