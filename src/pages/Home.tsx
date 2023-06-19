import { useCategories } from "../hooks/useCategories"

const Home = () => {
  const { isLoading, categories } = useCategories()

  return (
    <div className='flex w-1/2 h-1/2 bg-orange-400'>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Home
