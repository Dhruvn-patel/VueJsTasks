// interface  {}
interface subcategory {
  subCategoryList: Array<subcategoryData>;
  selectedCategory: Array<subcategoryData>;
}
interface subcategoryData {
  id: number;
  catId: number;
  name: string;
  img: string;
}
export const subcategory = {
  namespaced: true,
  state() {
    return {
      subCategoryList: [
        {
          id: 1,
          catId: 1,
          name: "Televisies",
          img: "https://eptummers.nl/media/wysiwyg/category/beeld-geluid/televisies.png",
        },
        {
          id: 2,
          catId: 1,
          name: "Televisie accessoires",
          img: "https://eptummers.nl/media/wysiwyg/category/beeld-geluid/web_version-5858450_tvm5845_product_image_black-noshadow.png",
        },
        {
          id: 3,
          catId: 1,
          name: "Home cinema",
          img: "https://eptummers.nl/media/wysiwyg/category/beeld-geluid/homecinema.jpg",
        },
        {
          id: 4,
          catId: 1,
          name: "Speakers",
          img: "https://eptummers.nl/media/wysiwyg/category/beeld-geluid/speakers.jpg",
        },

        {
          id: 5,
          catId: 2,
          name: "Laptops",
          img: "https://eptummers.nl/media/wysiwyg/category/computers-tablets/laptop.jpg",
        },
        {
          id: 6,
          catId: 2,
          name: "tablets",
          img: "https://eptummers.nl/media/wysiwyg/category/computers-tablets/tablets.jpg",
        },
        {
          id: 7,
          catId: 2,
          name: "desktops",
          img: "https://eptummers.nl/media/wysiwyg/category/computers-tablets/desktop.jpg",
        },
        {
          id: 8,
          catId: 2,
          name: "printers",
          img: "https://eptummers.nl/media/wysiwyg/category/computers-tablets/printers.jpg",
        },

        {
          id: 9,
          catId: 3,
          name: "Washing machines",
          img: "https://eptummers.nl/media/wysiwyg/category/huishouden-wonen/wasmachines.jpg",
        },
        {
          id: 10,
          catId: 3,
          name: "Vacuum cleaners",
          img: "https://eptummers.nl/media/wysiwyg/category/huishouden-wonen/stofzuigers.jpg",
        },
        {
          id: 11,
          catId: 3,
          name: "SmartHome",
          img: "https://eptummers.nl/media/wysiwyg/category/huishouden-wonen/smarthome.jpg",
        },
        {
          id: 12,
          catId: 3,
          name: "Safety",
          img: "https://eptummers.nl/media/wysiwyg/category/huishouden-wonen/Rookmelder.jpg",
        },
        {
          id: 13,
          catId: 4,
          name: "Freezers",
          img: "https://eptummers.nl/media/wysiwyg/category/keuken/vriezers.jpg",
        },
        {
          id: 14,
          catId: 4,
          name: "Dishwashers",
          img: "https://eptummers.nl/media/wysiwyg/category/keuken/vaatwassers.jpg",
        },
        {
          id: 15,
          catId: 5,
          name: "Shave",
          img: "https://eptummers.nl/media/wysiwyg/category/sport-verzorging/scheren.jpg",
        },
      ],
      selectedCategory: [],
    };
  },
  getters: {
    subcategoryDisplay(state: subcategory) {
      return state.selectedCategory;
    },
  },
  mutations: {
    /* filter data selected Id getData */
    subCategoryFunction(state: subcategory, payload: { catId: number }) {
      state.selectedCategory = state.subCategoryList.filter(
        (data) => data.catId === payload.catId
      );
     
    },
  },
  actions: {
    subCategoryFunction(context: any, payload: { catId: number }) {
      context.commit("subCategoryFunction", payload);
    },
  },
};
