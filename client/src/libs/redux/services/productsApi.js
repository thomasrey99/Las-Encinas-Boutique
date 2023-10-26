import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productsApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3001"
    }),
    reducerPath:"productsApi",
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:(name) => `/products?name=${name}`,
            providesTags:["products"]
        }),
        createProduct:builder.mutation({
            query:(newProduct)=>({
                url:"/products",
                method:"POST",
                body:newProduct
            }),
            invalidatesTags:["products"]
        })
    })
})

export const {useCreateProductMutation, useGetProductByNameQuery, useGetAllProductsQuery}=productsApi