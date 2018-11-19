const apiKey =
  "K5nHFEs1RPWeLeejEigxz7J6-pFRwdCqt-bNCHQxdeJPYp9P0s_lx5v_jKI9FymkmtiUMsxkYpV-tEacD0HpUg_gfAHNWjxk30yYS2j7ToYIS8JpO9b6CYsvzg7wW3Yx";
const Yelp = {
  businessApi: [],
  search: async function(term, location, sortBy) {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: { Authorization: `Bearer ${apiKey}` }
      }
    );
    const jsonResponse = await response.json();
    if (jsonResponse["businesses"]) {
      return jsonResponse["businesses"].map(business => {
        return {
          name: business.name,
          rating: business.rating,
          address: business.location.address1,
          city: business.location.city,
          zipCode: business.location.zip_code,
          reviewCount: business.review_count,
          image: business.image_url,
          category: business.categories[0].title
        };
      });
    }
  }
};

export default Yelp;
