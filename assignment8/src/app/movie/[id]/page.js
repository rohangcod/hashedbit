import Link from 'next/link';

// Sample movie data (replace this with your actual data source)
const movies = [
  { id: 1, title: 'Movie 1', description: 'This is the description of Movie 1.', image: '/movie1.jpg' },
  { id: 2, title: 'Movie 2', description: 'This is the description of Movie 2.', image: '/movie2.jpg' },
  { id: 3, title: 'Movie 3', description: 'This is the description of Movie 3.', image: '/movie3.jpg' },
  { id: 4, title: 'Movie 4', description: 'This is the description of Movie 4.', image: '/movie4.jpg' },
];

export default function MovieDetails({ params }) {
  const { id } = params;

  // Find the movie based on the `id`
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="container">
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} width={300} height={450} />
      <p>{movie.description}</p>
      <Link href={`/booking/${id}`}>
        <button>Book Seat</button>
      </Link>
    </div>
  );
}