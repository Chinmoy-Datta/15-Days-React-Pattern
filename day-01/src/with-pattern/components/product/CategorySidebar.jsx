const CategorySidebar = ({categories, onFetchProducts}) => {
    return(
      <aside className="category-sidebar">
      <h3 className="category-title">Categories</h3>

      {categories?.map((category) => (
        <button
          key={category.id}
          onClick={() => onFetchProducts(category.name)}
          className="category-item"
        >
          {category.name}
        </button>
      ))}
    </aside>
    )
}


export default CategorySidebar
