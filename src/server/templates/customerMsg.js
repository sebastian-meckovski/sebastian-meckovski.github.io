const returnCustomerMsg = (req) => {
  return `
    <h1>Hi, ${req.body.name}!</h1>
    <p>Thanks for reaching out! This page is still under developemnt
    but I will get back to you shortly </p>
    `;
};
module.exports = {
  returnCustomerMsg,
};
