import Link from 'next/link'

const Movie = ({ key, id, title, poster_path, release_date }) => {
  const imagePath = 'https://image.tmdb.org/t/p/original'
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <img src={imagePath + poster_path} alt={title} />
      </Link>
    </div>
  )
}

export default Movie
