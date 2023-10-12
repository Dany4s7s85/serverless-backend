'use strict'
const axios = require("axios")

module.exports.hello = async (event, context, callback) => {

  const data = await axios({url: "https://api.twitter.com/1.1/direct_messages/events/show.json", method: "get"})
    console.log(data)
  
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: data,
        input: event,
      }),
    };
   
    callback(null, response);
};
