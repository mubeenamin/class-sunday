import {InferModel} from 'drizzle-orm'
import {user} from "../db/schema/user"


export type User = InferModel<typeof user>;
export type NewUser = InferModel<typeof user, 'insert'>;