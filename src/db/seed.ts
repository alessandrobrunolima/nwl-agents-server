import { reset, seed } from 'drizzle-seed';
import { db, sql } from './connection.ts';
import { schema } from './schema/index.ts';

await reset(db, schema);

const seedSchema = { rooms: schema.rooms, questions: schema.questions };

await seed(db, seedSchema).refine((f) => {
    return {
        rooms: {
            count: 5,
            columns: {
                name: f.companyName(),
                description: f.loremIpsum(),
                createdAt: f.date({ minDate: new Date(2025, 0, 1), maxDate: new Date(2025, 6, 1) })
            }
        },
        questions: {
            count: 20
        }
    }
});

await sql.end();

// biome-ignore lint/suspicious/noConsole: only used in dev
console.log('Database seeded successfully');