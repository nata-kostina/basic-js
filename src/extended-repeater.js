module.exports = function repeater(str, options) {
    let result = '';
    
    if (!options.repeatTimes)
      options.repeatTimes = 1;
    if (!options.separator)
      options.separator = '+';
    if (options.hasOwnProperty('addition')) {
      if (typeof options.addition != 'string') {
        options.addition = String(options.addition);
      }
      if (!options.additionRepeatTimes)
        options.additionRepeatTimes = 1;
      if (!options.additionSeparator)
        options.additionSeparator = '|';
    }
    else {
      options.addition = '';
    }
    
    for (i = 0; i < options.repeatTimes; i++) {
      result += str;
      if (options.additionRepeatTimes != '') {
        for (k = 0; k < options.additionRepeatTimes; k++) {
          result += options.addition;
          if (k != options.additionRepeatTimes - 1) {
            result += options.additionSeparator;
          }
        }
      }
      if (i != options.repeatTimes - 1) {
        result += options.separator;
      }
    }
    return result;
  };