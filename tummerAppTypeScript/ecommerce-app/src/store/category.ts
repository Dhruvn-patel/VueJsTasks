interface category {
  categoryList: Array<categoryData>;
}
interface categoryData {
  id: number;
  name: string;
  img: string;
}
export const category = {
  namespaced: true,
  state() {
    return {
      categoryList: [
        {
          id: 1,
          name: "Images & Sound",
          text: "Image-Sound",
          img: "https://eptummers.nl/media/tailoredslider_media/2/Beeld-geluid_2.png",
        },
        {
          id: 2,
          name: "Computers & Tablets",
          text: "Computers-Tablets",
          img: "https://eptummers.nl/media/tailoredslider_media/2/Computers-tablets.png",
        },
        {
          id: 3,
          name: "Household & Living",
          text: "Household-Living",
          img: "https://eptummers.nl/media/tailoredslider_media/2/huishouden-wonen.png",
        },
        {
          id: 4,
          name: "Kitchen",
          text: "Kitchen",
          img: "https://eptummers.nl/media/tailoredslider_media/2/Keuken_1.png",
        },
        {
          id: 5,
          name: "Sports & Care",
          text: "Sports-Care",
          img: "https://eptummers.nl/media/tailoredslider_media/2/scheerhorloge.png",
        },
      ],
    };
  },

  getters: {
    categoryData(state: category) {
      return state.categoryList;
    },
    categoryId(state: category, id: number) {

      return state.categoryList;
    },
  },
  mutations: {},
  actions: {},
};
