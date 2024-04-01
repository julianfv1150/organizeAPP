import 'dotenv/config';
import conn from './conn';
import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, async() => {
    console.log(`[SERVER]: Watchin in http://localhost:${PORT}`);
    conn();
})
