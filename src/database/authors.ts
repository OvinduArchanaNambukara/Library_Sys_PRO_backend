import {Author, Authors} from "../model/Authors";

export const addAuthor = async (newAuthor: Author) => {
    const author = await Authors.create({
        name: newAuthor.name
    });
    return author;
}

export const getAllAuthors = async () => {
    const authors = await Authors.find();
    return authors;
}

export const deleteAuthor = async (id: string) => {
    const deleteAuthor = await Authors.deleteOne({
        _id: id
    });
}

export const updateAuthor = async (id: string, updateName: string) => {
    await Authors.updateOne({_id: id}, {$set: {name: updateName}})
}


