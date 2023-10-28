import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productsApi=createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3001"
    }),
    reducerPath:"productsApi",
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:(name, minPrice, maxPrice, category, order, type) => `/products?name=${name}&minPrice=${""}&maxPrice=${""}&category=${""}&type=${""}&order=${""}`,
            providesTags:["products"]
        }),
        createProduct:builder.mutation({
            query:(newProduct)=>({
                url:"/products",
                method:"POST",
                body:newProduct
            }),
            invalidatesTags:["products"]
        }),
        getProductById:builder.query({
            query:(id) => `/products/${id}`
        }),
    })
})

export const {useCreateProductMutation, useGetProductByNameQuery, useGetAllProductsQuery, useGetProductByIdQuery}=productsApi