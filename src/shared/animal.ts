import z from "zod/v4";
import { animalTypeEnum } from "../server/db/schema";

export const AnimalTypeEnum = z.enum(animalTypeEnum.enumValues, {
  message: "Выберите тип животного",
});

export const AnimalSchema = z.object({
  name: z
    .string({
      message: "Введите имя",
    })
    .min(1, "Введите имя"),
  type: AnimalTypeEnum,
  breed: z
    .string({
      message: "Введите пароду",
    })
    .min(1, "Введите пароду"),
  description: z
    .string({
      message: "Введите описание",
    })
    .min(1, "Введите описание"),
  age: z
    .string({
      message: "Введите возраст",
    })
    .min(1, "Введите возраст"),
});
