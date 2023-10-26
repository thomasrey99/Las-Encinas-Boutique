import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productsApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3001"
        baseUrl:"http://localhost:3001"
    }),
    reducerPath:"productsApi",
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:() => '/products',
            providesTags:["products"]
        }),
        createProduct:builder.mutation({
            query:(newProduct)=>({
                url:"/products",
                url:"/products",
                method:"POST",
                body:newProduct
            }),
            invalidatesTags:["products"]
        }),
        getProductByName:builder.query({
            query:(name)=>`/productos?name=${name}`
        }),
        getProductById:builder.query({
            query:(id) => `/productos/${id}`
        }),
    })
})

export const {useCreateProductMutation, useGetProductByNameQuery, useGetAllProductsQuery, useGetProductByIdQuery}=productsApi