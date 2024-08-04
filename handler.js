const AMTHAL = require("./data/index.json");

const randomMathal = () => {
   return AMTHAL[Math.floor(Math.random() * AMTHAL.length)];
}

const randomTen = () =>{
    let randomList = new Set();
    while(randomList.size < 10){
       let random = Math.floor(Math.random() * AMTHAL.length);
      
        randomList.add(random);
    }
    return [...randomList].map(index => AMTHAL[index]);
}

exports.handler = async (event, context) => {
    // Example of using query parameters to choose which function to call
    const { queryStringParameters } = event;

    let response;
    if (queryStringParameters && queryStringParameters.type === 'ten') {
        response = randomTen();
    } else {
        response = randomMathal();
    }

    return {
        statusCode: 200,
        body: JSON.stringify(response),
        headers: {
            'Content-Type': 'application/json',
        },
    };
}

module.exports = {
    randomMathal,
    randomTen
}