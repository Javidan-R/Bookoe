export type SingleBooksTypes={
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}


export interface BooksTypes {
    books:SingleBooksTypes[]
}