const validator = require('validator');

module.exports = (req, res, next) => {
  const result = Object.keys(req.body).map((item) => {
    req.body[item] = validator.trim(validator.escape(req.body[item]));

    return item;
  })
    .map((elem) => {
      if (elem === 'email') {
        return {
          elem: validator.isEmail(req.body[elem]),
          type: [elem],
        };
      }

      return {
        elem: !validator.isEmpty(`${req.body[elem]}`),
        type: [elem],
      };
    });

  if (Object.keys(result).every(elem => result[elem].elem)) {
    next();
  } else {
    res.json({ status: 'error', notValid: result });
  }
};
