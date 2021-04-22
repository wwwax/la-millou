import img_1 from '../../img/slider/image-1.jpg';
import img_2 from '../../img/slider/image-2.jpg';
import img_3 from '../../img/slider/image-3.jpg';

export const sliderItems = [
  {
    id: 1,
    src: img_1,
    imageObjectPosition: 'top',
    tooltips: [
      {
        id: 1,
        name: 'Torba',
        brand: 'Dolce Vita',
        productLink:
          'https://www.lamillou.com/shop/plecaki-dolce-vita-pure/dolce-vita-pure-plecak-arizona',
        position: {
          left: '50%',
          top: '50%',
        },
      },
    ],
  },

  {
    id: 2,
    src: img_2,
    imageObjectPosition: 'bottom',
    tooltips: [
      {
        id: 1,
        name: 'Big John',
        brand: 'Navy Jungle',
        productLink: 'https://www.lamillou.com/shop/big-john-navy-jungle-ecru',
        position: {
          left: '70%',
          top: '50%',
        },
      },
      {
        id: 2,
        name: 'Kocyk średniaka',
        brand: 'Navy Jungle',
        productLink: 'https://www.lamillou.com/shop/kocyk-sredniaka-navy-jungle-ecru',
        position: {
          left: '30%',
          top: '80%',
        },
      },
      {
        id: 3,
        name: 'Koc narzuta',
        brand: 'Navy Jungle',
        productLink:
          'https://www.lamillou.com/shop/koc-narzuta-140-x-200-cm-navy-jungle-ecru',
        position: {
          left: '80%',
          top: '80%',
        },
      },
    ],
  },

  {
    id: 3,
    src: img_3,
    imageObjectPosition: 'center',
    tooltips: [
      {
        id: 1,
        name: 'Bambusowa Kura Babci Dany',
        brand: 'Boho Palms Light',
        productLink:
          'https://www.lamillou.com/shop/bambusowa-kura-babci-dany-boho-palms-light-deep-ocean',
        position: {
          left: '35%',
          top: '40%',
        },
      },
      {
        id: 2,
        name: 'Bamboo Bedding Medium',
        brand: 'Boho Girl',
        productLink: 'https://www.lamillou.com/shop/bamboo-bedding-medium-size-boho-girl',
        position: {
          left: '55%',
          top: '60%',
        },
      },
      {
        id: 3,
        name: 'Organic Jersey Collection - KOMPLET POŚCIELI "M" 80X100',
        brand: 'Boho Girl',
        productLink:
          'https://www.lamillou.com/shop/organic-jersey-collection-komplet-poscieli-m-80x100-boho-girl',
        position: {
          left: '80%',
          top: '70%',
        },
      },
    ],
  },
];
