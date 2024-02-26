function Layout({ children, count }) {
    return (
        <div className="h-full min-h-screen bg-slate-800  text-gray-200">
            <header className="mx-auto  border-b-2 bg-gray-900 p-4">
                <h1 className="p-2 text-center text-3xl">Todo List</h1>
                <span className=" ">open: {count}</span>
            </header>
            {children}
        </div>
    );
}

export default Layout;
