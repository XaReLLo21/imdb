import Link from 'next/link'
export default async function MovieDetail({ params }) {
  const { movie } = params
  const imagePath = 'https://image.tmdb.org/t/p/original'
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  )
  const res = await data.json()

  return (
    <div>
      <div>
        <h2 className='text-2xl'>{res.title}</h2>
        <h2 className='text-1g'>{res.release_date}</h2>
        <h2> Runtime: {res.runtime} minutes</h2>
        <h2 className='text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md'>
          {res.status}
        </h2>
        <img
          className='my-12 w-full'
          src={imagePath + res.backdrop_path}
          alt={res.title}
          width={1000}
          height={1000}
        />
        <p>{res.overview}</p>
        <Link href='/'>
          <button className='text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md'>
            Go Back
          </button>
        </Link>
      </div>
    </div>
  )
}
