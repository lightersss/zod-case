import { schema } from '../basic'

test('discriminated unions basic schema', () => {

    expect(schema.safeParse({
        name: 'Mike',
        age: 18
    }).success).toBe(false);

    expect(schema.safeParse({
        name: 'Mike',
        age: 18,
        hasPet:false
    }).success).toBe(true);


    expect(schema.safeParse({
        name: 'Mike',
        age: 18,
        hasPet:true
    }).success).toBe(false);

    expect(schema.safeParse({
        name: 'Mike',
        age: 18,
        hasPet:true,
        petName:'PuppyA'
    }).success).toBe(true);


    expect(schema.safeParse({
        name: 'Mike',
        age: 18,
        hasPet:false,
        petName:'PuppyA'
    }).success).toBe(true);


});