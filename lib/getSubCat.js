

const getSubCat = async({categoryId}) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/api/categories?categoryId=${categoryId}`); // API endpoint
        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        return data; // return the fetched categories
    } catch (error) {
        throw new Error(error.message); // throw error if something went wrong
    }
}

export default getSubCat