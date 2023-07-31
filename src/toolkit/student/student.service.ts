import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IStudent } from './student.interface'

// Define a service using a base URL and expected endpoints
export const studentApi = createApi({
    reducerPath: 'studentApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/student' }),
    tagTypes: ['Student'],
    endpoints: (builder) => ({
        getStudenList: builder.query({
            query: () => ``,
            providesTags: ['Student']
        }),
        addStudent: builder.mutation<IStudent[], IStudent>({
            query: (student) => ({
                url: '',
                method: 'POST',
                body: student,
            }),
            invalidatesTags: ['Student'],
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetStudenListQuery, useAddStudentMutation } = studentApi