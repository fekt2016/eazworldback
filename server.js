const dotenv = require('dotenv');
const app = require('./app');


dotenv.config({ path: './config.env'});
const x = 200;
// console.log(process.env)

const port = 5000 ||process.env.PORT;
app.listen(port, () => {
    console.log(`App connect successfulluy on ${port}`);
})



















