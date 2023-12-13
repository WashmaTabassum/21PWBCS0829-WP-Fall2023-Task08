const express = require('express');
const app = express();

const ecommerceRoutes = require('./ecommerceRoutes');
const passwordStrengthRoutes = require('./passwordStrengthRoutes');

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/ecommerce', ecommerceRoutes); // Mounting ecommerceRoutes
app.use('/password', passwordStrengthRoutes); // Mounting passwordStrengthRoutes

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
