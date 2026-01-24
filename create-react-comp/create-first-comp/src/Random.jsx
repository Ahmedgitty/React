function Random(){

    // eslint-disable-next-line react-hooks/purity
    let number = Math.random() * 100;

    return <h1 style={{'backgroundColor': 'beige'}}>Random Number is: {Math.round(number)}</h1>
}

export default Random;