const removeFromArray = function removeFromArray(str, ...args) {
   const arrayString  = [];
   str.forEach((item) => {
    if (!args.includes(item)){
        arrayString.push(item);
    }
    
   });
   return arrayString;
};

// Do not edit below this line
module.exports = removeFromArray;
