import {Book, Books} from "../model/Books";

export const addBook = async (newBook: Book) => {
    const book = await Books.create({
        book_name: newBook.book_name,
        book_isbn: newBook.book_isbn,
        author: newBook.author
    });
    return book;
}

export const getAllBooks = async () => {
    const book = await Books.find();
    return book;

}

export const deleteBook = async (id: string) => {
    const deleteBook = await Books.deleteOne({
        _id: id
    });
}

export const updateBook = async (id: string, updateName: string, updateAuthor: string, updateISBN: string) => {
    await Books.updateOne({_id: id}, {
        $set: {
            book_name: updateName,
            author: updateAuthor,
            book_isbn: updateISBN
        }
    });
}
