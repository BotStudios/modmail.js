const intents = (intents) => {
const Intents = {
  intents: intents
};
if (intents == "" || intents == undefined) throw new TypeError("Please Provide An Array Of Privileged Intents.");
if(intents !== Array) throw new TypeError("Please Provide An Array Of Privileged Intents.");
  module.exports =  { Intents }
}


module.exports = intents;
