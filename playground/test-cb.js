function callBackFunction(errors, value) {
  if (errors) return new Error(errors);

  // xử lí value
  console.log(value);
  return value;
}

callBackFunction(null, "./public");
