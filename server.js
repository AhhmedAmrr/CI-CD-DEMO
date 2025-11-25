const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1 style="color:#00d4aa;font-family:Arial;text-align:center;margin-top:100px">
      CI/CD + Docker = SUCCESS
    </h1>
    <h2 style="text-align:center">Deployed automatically by Railway + GitHub</h2>
    <p style="text-align:center;font-size:18px">
      Last deploy: ${new Date().toLocaleString('en-EG')} (Cairo Time)
    </p>
    <p style="text-align:center;font-size:20px">Made with love by Ahmed Amr - Mouayed Amr - Mohamed Yasser - Omar Ibrahim - Youssef Hisham </p>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
