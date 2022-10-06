import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Products from "./components/products/Products";
import Main from "./layout/Main";
import Friends from "./components/friends/Friends";
import FriendDetails from "./components/friendDetails/FriendDetails";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Main />,
			children: [
				{
					path: "home",
					element: <Home />,
				},
				{
					path: "about",
					element: <About />,
				},
				{
					path: "products",
					element: <Products />,
				},
				{
					path: "friends",
					loader: async () => {
						return await fetch("https://jsonplaceholder.typicode.com/users");
					},
					element: <Friends />,
				},
				{
					path: "/friend/:friendId",
					loader: async ({ params }) => {
						return fetch(
							`https://jsonplaceholder.typicode.com/users/${params.friendId}`
						);
					},
					element: <FriendDetails />,
				},
			],
		},
		{
			path: "*",
			element: <div>this is page is not found😪😪</div>,
		},
	]);

	return (
		<div className="">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
