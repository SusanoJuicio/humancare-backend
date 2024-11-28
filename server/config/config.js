import dotenv from 'dotenv';
dotenv.config();

const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        mongodb: {
            uri:
                process.env.MONGODB_URI || 'mongodb://localhost:27017/pescarSampleDB',
        },
        server: {
            port: process.env.PORT || 5001,
        },
        cors: {
            origin: 'http://localhost:8080',
        },
    },
    production: {
        mongodb: {
            uri: process.env.MONGODB_URI,
        },
        server: {
            port: process.env.PORT || 80,
        },
        cors: {
            origin: process.env.CLIENT_URL,
        },
    },
};

export default config[env];