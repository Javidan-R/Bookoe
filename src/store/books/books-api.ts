import {createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com'
    }),
    endpoints : (build)=>({
        GetBooks:build.query({
            query: ()=>{
                return {
                    url:'products',
                    method:'GET'
                }
            }
        })
    })
})

export const {useGetBooksQuery}  = booksApi