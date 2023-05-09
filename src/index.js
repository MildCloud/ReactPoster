import React from 'react'
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import NewPost, { action as newPostAction} from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import Posts, {loader as postsLoader} from './routes/Posts';
import PostDetails, {loader as postDetailsLoader} from './routes/PostDetails';

const router = createBrowserRouter([
    { path: '/', element: <RootLayout/>, children: [
        { path: '/', element: <Posts />, loader: postsLoader, children: [
            { path: '/create-post', element: <NewPost />, action: newPostAction},
            { path: '/:postId', element: <PostDetails />, loader: postDetailsLoader}
        ] }
    ]},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
