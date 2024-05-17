import React from 'react'
import BookHomepage from '../../Components/Books/BookHome';
import AddBook from '../../Components/Books/AddBook';
import EditBook from '../../Components/Books/EditBook';
import AuthorHome from '../../Components/Authors/AuthorHome';
import AddAuthor from '../../Components/Authors/AddAuthor';
import EditAuthor from '../../Components/Authors/EditAuthor';
import { Navigate } from 'react-router-dom';

const AppRoutes = [
    {
        path : '/',
        element : <BookHomepage/>,
        exact:true
    },
    {
        path : '/add-book',
        element : <AddBook/>,
        exact:true
    },
    {
        path : '/edit-book/:id',
        element : <EditBook/>,
        exact:true
    },
    {
        path : '/dashboard-author',
        element : <AuthorHome/>,
        exact:true
    },
    {
        path : '/add-author',
        element : <AddAuthor/>,
        exact:true
    },
    {
        path : '/edit-author/:id',
        element : <EditAuthor/>,
        exact:true
    },
    {
        path : '*',
        element : <Navigate to='/' />,
        exact:false
    }
]

export default AppRoutes