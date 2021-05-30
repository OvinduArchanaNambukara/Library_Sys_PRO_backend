import {Schema, SchemaTypes, Document, model} from "mongoose";

export interface Book {
    book_name: string;
    book_isbn: string;
    author: string;
}

export interface BookModel extends Book, Document {
}

const BookSchema = new Schema({
    book_name: {
        type: SchemaTypes.String,
        required: true
    },
    book_isbn: {
        type: SchemaTypes.String,
        required: true
    },
    author: {
        type: SchemaTypes.String,
        required: true
    }
});

export const Books = model<BookModel>("books", BookSchema);
