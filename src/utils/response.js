const response = (data, code = 200, message = 'Ok', itemsCount = 0) => ({
  code,
  message,
  data,
  itemsCount,
});

module.exports = { response };
