require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    try {
        const { amount } = JSON.parse(event.body); // we expect amount as int including 2 decimal points, $100 -> 10000

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'cad',
            payment_method_types: ['card']
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent })
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 400,
            body: JSON.stringify({ error })
        };
    }
}
