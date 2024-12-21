

type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

async function fetchBooks(): Promise<Book[]> {
  const response = await fetch('https://simple-books-api.glitch.me/books', {
    cache: 'no-store', 
  });

  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }

  return response.json();
}

export default async function ServerSidePage() {
  try {
    const books: Book[] = await fetchBooks();

    return (
      <div className="p-6 min-h-screen bg-indigo-300">
        <h1 className="text-4xl font-black text-center text-gray-800 mb-6">Server-Side Fetched Books</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-gray-200 shadow-md rounded-lg p-4 h-60 flex flex-col items-center"
            >
              <h2 className="text-2xl font-black text-gray-800 text-center  leading-relaxed ">{book.name}</h2>
              <p className="text-2xl text-gray-600 mt-4">{book.type}</p>
              <p className="text-indigo-500 mt-6 font-bold">Available: {book.available ? 'Yes' : 'No'}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error('Error fetching books:', errorMessage);

    
    console.log("Entering error block...");

    return (
      <div className="p-6 min-h-screen bg-red-100">
        <h1 className="text-4xl font-black text-center text-gray-800 mb-6">Error</h1>
        <p className="text-center text-red-500">Failed to load data: {errorMessage}</p>

       
      </div>
    );
  }
}
