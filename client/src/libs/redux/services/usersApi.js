import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const URL_SERVER = import.meta.env.VITE_URL_SERVER; 

export const usersApi = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:URL_SERVER
    }),
    reducerPath:"userApi",
    endpoints: (builder) => ({
        getAllUsers:builder.query({
            query:(name) => `/users?name=${name}`,
            providesTags: ["users"]
        }),
        getUserById:builder.query({
            query:(id) => `/users/${id}`
        }),
        createUsers:builder.mutation({
            query:(newUser)=>({
                url: "/users",
                method: "POST",
                body: newUser
            }),
            invalidatesTags: ["users"]
        }),
        updateUserImage:builder.mutation({
            query:({id, image})=> ({
                url: `/users/${id}`,
                method: "PUT",
                body: image
            }),
            invalidatesTags: ["users"]
        }),
    })
})

export const {useGetAllUsersQuery, useCreateUsersMutation, useGetUserByIdQuery, useUpdateUserImageMutation} = usersApi