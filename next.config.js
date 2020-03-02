if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    env: {
        ROOT_URL: process.env.ROOT_URL,
    },
};
