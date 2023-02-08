import { DataSource } from "typeorm"
import { Gender } from "./entities/gender.entity"
import { Brand } from './entities/brand.entity';
import { Category } from './entities/category.entity';
import { Size } from './entities/size.entity';
import { Product } from './entities/product.entity';
import { Color } from './entities/color.entity';

export const myDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT) || parseInt("5432"),
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "123",
  database: process.env.DB_DATABASE || "shopping_db",
  entities: [Gender, Brand, Category, Size, Product, Color],
  logging: true,
  synchronize: true,
})