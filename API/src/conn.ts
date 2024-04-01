import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config({ path: __dirname+'/.env' });

const DB_CONN = process.env.DB_URL;
async function conn() {
    try {
        await mongoose.connect(`${DB_CONN}`)
        console.log(`[DB]: DB is connected to ${DB_CONN}`);
    } catch (error) {
        console.log(`[DB]: DB is NOT connected ${error}`);
    }
}

export default conn;
