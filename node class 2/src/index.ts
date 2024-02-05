import express, { Express, Request, Response } from "express";
import mariadb from 'mariadb'
const app: Express = express();
const PORT: number | string = process.env.PORT || 5000
app.use(express.json());
// this is for connection with db
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'ali',
    database: "xeurix_db_bk",
    connectionLimit: 5
});

app.get("/", async (req: Request, res: Response) => {
    const connection = await pool.getConnection()
    const response = await connection.query("SELECT id,first_name,last_name FROM users")
    res.send(response);

});
app.get("/:id", async (req: Request, res: Response) => {
    try {
        const connection = await pool.getConnection()
        const { id } = req.params;    
        
        if (id) {
            const response = await connection.query(`SELECT id,first_name,last_name FROM users where id='${id}'`)
            res.send(response);
        }
        // res.send('no id');
    } catch (error) {
        
        res.send(error);
    }

});
app.put("/:id", async (req: Request, res: Response) => {
    try {
        const connection = await pool.getConnection()
        const { id } = req.params;
        const {first_name,last_name} = req.body
        if (id) {
            const response = await connection.query(`Update users set first_name='${first_name}',last_name='${last_name}' where id='${id}'`)
            res.send(response);
        }
        // res.send('no id');
    } catch (error) {
        
        res.send(error);
    }

});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});