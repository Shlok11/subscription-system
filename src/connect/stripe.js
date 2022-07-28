const stripe = require("stripe");
const STRIPE_SECRECT_KEY =
  "sk_test_51LQ6fqSJnMgw6ucHqK8leT4MU3l6o1yKwZAZEWdugtqRufDrVbuQfS3xZ4RWHCUZ6ojZQTWlTSg0B7BxUfK21z8Y00L9E9TaxI";

  const Stripe = stripe(STRIPE_SECRECT_KEY,{
    apiVersion:"2020-08-27",
  })

  const addNewCustomer = async (email) => {
    const customer = await Stripe.customers.create({
        email,
        description:"New Customer",
    })
    return customer;
  }

  const getCustomerById = async (id) => {
    const customer = await Stripe.customer.retrieve(id)
    return customer
  } 

  module.exports = {addNewCustomer,getCustomerById};
