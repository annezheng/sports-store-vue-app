
const testData = [];
for (let i = 1; i <= 10; i++) {
    testData.push({
        id: i, name: `Product #${i}`, category: `Category ${i % 3}`,
        description: `This is Product #${i}`, price: i * 50
    })
}
export default {
  currentPage: 1,
  pageSize: 4,
  currentCategory: "All",
  categoriesData: [],
  pages: [],
  serverPageCount: 0,
  searchTerm: '',
  showSearch: true
}
