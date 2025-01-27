import z from 'zod';
const basicSchema = z.object({
  name: z.string(),
  age: z.number(),
});

const petSchema = z.discriminatedUnion('hasPet', [
  z.object({ hasPet: z.literal(true), petName: z.string() }),
  z.object({ hasPet: z.literal(false) }),
]);

export const schema = basicSchema.and(petSchema)



