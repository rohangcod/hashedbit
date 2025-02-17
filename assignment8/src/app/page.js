import Link from 'next/link';
import Image from 'next/image'; // Add this import

const movies = [
  { id: 1, title: 'Movie 1', image: '/movie1.jpg' },
  { id: 2, title: 'Movie 2', image: '/movie2.jpg' },
  { id: 3, title: 'Movie 3', image: '/movie3.jpg' },
  { id: 4, title: 'Movie 4', image: '/movie4.jpg' },
];

export default function Home() {
  return (
    <div className="container">
      <h1>Movie List</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <Link href={`/movie/${movie.id}`}>
              {/* Use <Image> instead of <image> */}
              <Image src={movie.image} alt={movie.title} width={150} height={225} />
              <p>{movie.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}