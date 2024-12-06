import express from "express";
import sequelize from "./models/db.js";
import Product from "./models/Product.js";
import Category from "./models/Category.js";
import router from "./routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(router);

sequelize.sync({ force: true }).then(() => {
    console.log("База данных синхронизирована.");
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error("Ошибка при синхронизации базы данных:", error);
});

import path from "path";

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));