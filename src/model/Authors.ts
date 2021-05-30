import {model, Schema, SchemaTypes, Document} from "mongoose";

export interface Author {
    name: string
}

export interface AuthorModel extends Author, Document {
}

const AuthorsSchema = new Schema({
    name: {
        type: SchemaTypes.String,
        required: true
    },
    age: {
        type: SchemaTypes.Number,
        required: false
    }
});

export const Authors = model<AuthorModel>("authors", AuthorsSchema);


