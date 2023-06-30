interface products {
  productList: Array<productsData>;
  selectedProduct: Array<productsData>;
  productObj: productsData;
}
interface productsData {
  id: number;
  subCatId: number;
  catId: number;
  name: string;
  img: string;
  rating: number;
  price: number;
  quantity: number;
  sell: number;
  description: string;
}
export const products = {
  namespaced: true,
  state() {
    return {
      productList: [
        {
          id: 1,
          subCatId: 1,
          name: "QLED TVs ",
          price: 17000,
          rating: 4.3,
          quantity: 1,
          sell: true,
          img: "https://eptummers.nl/media/wysiwyg/category/beeld-geluid/MicrosoftTeams-image_3_.png",
          description: "good dmsof dmslkmfs fmoksdmfsd",
        },
        {
          id: 2,
          subCatId: 1,
          name: "OLED TVs",
          price: 50000,
          rating: 4.4,
          quantity: 1,
          sell: false,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/wysiwyg/category/beeld-geluid/MicrosoftTeams-image_4_.png",
        },
        {
          id: 3,
          subCatId: 1,
          name: "Phillips",
          price: 30000,
          rating: 4.3,
          quantity: 1,
          sell: true,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/wysiwyg/Philips_2.jpg",
        },
        {
          id: 4,
          subCatId: 2,
          name: "SonOne For All Samsung remote controly",
          price: 56000,
          rating: 4.3,
          quantity: 1,
          sell: false,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/o/n/one-for-all-afstandsbediening-samsung-urc4910.png",
        },

        {
          id: 5,
          subCatId: 2,
          name: "Hirschmann Fekab ​Coax Antenna Cable 1.5 meters",
          price: 85000,
          rating: 4.3,
          quantity: 1,
          sell: false,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/8/1/811126_1.png",
        },
        {
          id: 6,
          subCatId: 3,
          name: "Google Chromecast Google TV",
          price: 87000,
          rating: 3.3,
          quantity: 1,
          sell: false,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/f/e/fee_786_587_png_5.webp",
        },
        {
          id: 7,
          subCatId: 3,
          name: "Samsung Q-series Soundbar HW-Q800C (2023)",
          price: 12000,
          rating: 4.3,
          quantity: 1,
          sell: true,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/s/a/samsung-q-series-soundbar-hw-q800c-2023.jpg",
        },
        {
          id: 8,
          subCatId: 4,
          name: "Denon Home 150 Zwart",
          price: 52000,
          rating: 4.3,
          quantity: 1,
          sell: false,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/d/e/denon-home-150-multi-room-speaker.jpg",
        },

        {
          id: 9,
          subCatId: 5,
          name: "Lenovo IdeaPad 3 82KU01LGMH Laptop",
          price: 40000,
          rating: 2.3,
          quantity: 1,
          sell: false,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/0/1/0196119905463-image-01-20230213122553.webp",
        },
        {
          id: 10,
          subCatId: 5,
          name: "Lenovo IdeaPad 33342",
          price: 52000,
          rating: 3.3,
          quantity: 1,
          sell: false,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/0/1/0196119905463-image-03-20230213122600.webp",
        },
        {
          id: 11,
          subCatId: 6,
          name: "Samsung Galaxy Tab A8 WiFi 32GB Rose Goud",
          price: 12000,
          rating: 4.3,
          quantity: 1,
          sell: true,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/2/0/2004840848.png",
        },
        {
          id: 12,
          subCatId: 6,
          name: "Samsung Galaxy Tab A8 WiFi 16GB",
          price: 15000,
          rating: 4.3,
          quantity: 1,
          sell: false,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/2/0/2004840844.png",
        },
        {
          id: 13,
          subCatId: 6,
          name: "Samsung Galaxy Tab A8 WiFi 16GB",
          price: 12000,
          rating: 4.3,
          quantity: 1,
          sell: false,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/2/0/2004840844.png",
        },
        {
          id: 14,
          subCatId: 7,
          name: "MSI Cubi 5 10M-414EU",
          price: 10000,
          rating: 4.3,
          quantity: 1,
          sell: true,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/2/0/2004902762.jpeg",
        },
        {
          id: 15,
          subCatId: 8,
          name: "Epson Expression Premium XP-6105",
          price: 100000,
          rating: 4.3,
          quantity: 1,
          sell: false,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/e/p/epson_1_1.jpg",
        },
        {
          id: 16,
          subCatId: 8,
          name: "Epson Expression ",
          price: 120000,
          rating: 4.3,
          quantity: 1,
          sell: false,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/e/p/epson_5_1.jpg",
        },
        {
          id: 17,
          subCatId: 9,
          name: "Samsung WW80T734AWH/S2 ",
          price: 100000,
          rating: 4.3,
          quantity: 1,
          sell: true,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/s/a/samsung_ww80t734awh_quickdrive_7000_serie_wasmachine.jpg",
        },
        {
          id: 18,
          subCatId: 9,
          name: "Samsung GalaxyWW80T734AWH",
          price: 10000,
          rating: 4.3,
          quantity: 1,
          sell: false,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/s/a/samsung_ww80t734awh_quickdrive_7000_serie_wasmachine.jpg",
        },
        {
          id: 19,
          subCatId: 10,
          name: "AEG AB61C3CR",
          price: 120000,
          rating: 4.3,
          quantity: 1,
          sell: true,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/r/e/remote.jpg_4_3.png",
        },
        {
          id: 20,
          subCatId: 10,
          name: "Samsung2 AEG AB61C3CR2344",
          price: 12000,
          rating: 4.3,
          quantity: 1,
          sell: false,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/r/e/remote.jpg_4_3.png",
        },
        {
          id: 21,
          subCatId: 11,
          name: "Google Nest Learning Thermostat V3 Premium Silver",
          price: 12000,
          rating: 4.3,
          quantity: 1,
          sell: true,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/1/3/1366015.webp",
        },
        {
          id: 22,
          subCatId: 11,
          name: "Google Nest Learning Thermostat V3 Premium Silver",
          price: 14000,
          rating: 4.3,
          quantity: 1,
          sell: false,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/1/3/1366015.webp",
        },
        {
          id: 23,
          subCatId: 12,
          name: "Samsung Safety",
          price: 5000,
          rating: 4.3,
          quantity: 1,
          sell: true,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/wysiwyg/category/huishouden-wonen/Rookmelder.jpg",
        },
        {
          id: 24,
          subCatId: 13,
          name: "Bosch GSN58EWCV 21q",
          price: 4000,
          rating: 4.3,
          quantity: 1,
          sell: false,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/m/c/mcsa03100585_j3999_2416843_gsn58ewdv_def.webp",
        },

        {
          id: 25,
          subCatId: 13,
          name: " GSN58EWCV 21q2",
          price: 7000,
          rating: 4.3,
          quantity: 1,
          sell: true,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/m/c/mcsa03100585_j3999_2416843_gsn58ewdv_def.webp",
        },
        {
          id: 26,
          subCatId: 14,
          name: "DishwashersB",
          price: 7470,
          rating: 4.3,
          quantity: 1,
          sell: false,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/wysiwyg/category/keuken/vaatwassers.jpg",
        },
        {
          id: 27,
          subCatId: 14,
          name: "DishwashersB W2425647",
          price: 7020,
          rating: 4.3,
          quantity: 1,
          sell: true,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/wysiwyg/category/keuken/vaatwassers.jpg",
        },
        {
          id: 28,
          subCatId: 15,
          name: "Phillips S1333/41",
          price: 4500,
          rating: 4.3,
          quantity: 1,
          sell: false,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/s/1/s1333_41_rtp_global_001_3_1.jpg",
        },
        {
          id: 29,
          subCatId: 15,
          name: "Philips MG3740/15",
          price: 2500,
          rating: 4.3,
          quantity: 1,
          sell: true,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/p/h/philips_trim_1_1.jpg",
        },
        {
          id: 30,
          subCatId: 15,
          name: "Philips123 MG37402121/15",
          price: 1200,
          rating: 4.3,
          quantity: 1,
          sell: false,
          description: "good dmsof dmslkmfs fmoksdmfsd",
          img: "https://eptummers.nl/media/catalog/product/cache/7596907dda960431c9a022f2d3b01a28/1/4/14-series-3000-baardtrimmer.jpg",
        },
      ],
      selectedProduct: [],
      productObj: {},
    };
  },
  getters: {
    getSelectedProduct(state: products) {
      return state.selectedProduct;
    },
    singleProduct(state: products) {
      return state.productObj;
    },

    sellproduct(state: products) {
      const data = state.productList.filter((data: any) => data.sell === true);

      return data;
    },
  },
  mutations: {
    /* subCategory call */
    productsFunction(state: products, payload: { Id: number }) {
      state.selectedProduct = state.productList.filter(
        (data) => data.subCatId === payload.Id
      );
      
    },

    /* products call */
    singleProductFunction(state: products, payload: { id: number }) {
      const data = state.productList.filter((data) => data.id === payload.id);
    

      state.productObj = data[0];

    },
  },
  actions: {
    productsFunction(context: any, payload: { Id: number }) {
      context.commit("productsFunction", payload);
    },
    singleProductFunction(context: any, payload: { id: number }) {
      context.commit("singleProductFunction", payload);
    },
  },
};
