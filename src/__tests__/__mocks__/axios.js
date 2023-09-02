const axios = {
  get: jest.fn(),
};

axios.get.mockResolvedValue({
  data: [
    {
      strCategory: 'Category 1', strCategoryThumb: 'image1.jpg',
    },
  ],
});

test('random test', () => {
  expect(2).toEqual(2);
});
export default axios;
