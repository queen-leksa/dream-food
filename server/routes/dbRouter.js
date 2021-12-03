const router = require("express").Router();
const db = require("./db.js");
router.post("/add", (req, res) => {
    console.log(req.body); // Получить тело формы
    /* *
    * Добавить в массив новые данные => Перезаписать файл
    * */
    const client = db();
    client.connect(err => {
        if (err) {
            // aaa!!!
        } else {
            const table = client.db("food");
            const col = table.collection("products");
            col.insertOne(req.body, err => {
                if (err) {
                    console.log(err);
                } else {
                    res.send({msg: "done"});
                }
                client.close();
            });

        }
    });
});

module.exports = router;