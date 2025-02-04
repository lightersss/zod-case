import z from "zod";
const basicSchema = z.object({
  name: z.string(),
  age: z.number(),
});

const petSchema = z.discriminatedUnion("hasPet", [
  z.object({ hasPet: z.literal(true), petName: z.string() }),
  z.object({ hasPet: z.literal(false) }),
]);

const roleSehema = z.discriminatedUnion("role", [
  z.object({ role: z.literal("admin"), adminKey: z.string() }),
  z.object({ role: z.literal("user"), userID: z.number() }),
]);

//! use `and` to make Cartesian Product
export const schema = basicSchema.and(petSchema).and(roleSehema);
