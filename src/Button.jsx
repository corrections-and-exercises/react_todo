function Button({ content, handleClick }) {
    return (
        <button
            className="w-24 rounded border-2 border-white bg-slate-800 p-2 uppercase text-orange-400 hover:text-green-600 active:text-green-900 "
            onClick={handleClick}
        >
            {content}
        </button>
    );
}

export default Button;
