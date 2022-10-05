enum DaysOfWeek {
  MONDAY = 0,
  TUESDAY = 1,
  WEDNESDAY = 2,
  THURSDAY = 3,
  FRIDAY = 4,
  SATURDAY = 5,
  SUNDAY = 6,
  WEEKEND = 7,
  WEEK = 8,
}

enum SaleType {
  SALE = 'SALE',
  RENTAL = 'RENTAL',
  SALE_RENTAL = 'SALE RENTAL',
}

enum StatusVehicle {
  NEW = 'new',
  USED = 'used',
}

export const initialValues = {
  author: {
    password: '123',
    email: 'gabyustariz@hotmail.com',
    language: 'es',
    notification: {},
    about_website: {},
    payment_info: {},
  },
  id: 'post1234',
  address: {
    line1: 'los chaguaramos',
    line2: 'av francisco urdaneta',
    city: {
      name: 'caracas',
      state: {
        name: 'miranda',
        country: {
          name: 'venezuela',
          continent: {
            name: 'américa',
          },
        },
      },
    },
  },
  contact: {
    first_name: 'Gabriela',
    last_name: 'Ustariz',
    email: 'gabyustariz@hotmail.com',
    phone: '04241315948',
    local_phone: '04121315948',
    contact_days: DaysOfWeek.MONDAY,
    contact_hour_start: '',
    contact_hour_end: '',
  },
  details: 'Un modelo super todo terreno 4x4',
  vehicle_post: {
    rental_price: 400,
    sale_price: 1000000,
    currency: 'USD',
    sale_type: SaleType.SALE_RENTAL,
    vehicle: {
      model: 'samurai',
      year: '2012',
      brand: 'toyota',
      type: 'camioneta',
    },
    accesories: '',
    services: '',
    state: StatusVehicle.NEW,
    images: [
      {
        text: 'placeholder image',
        type: 'image',
        file: 'http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg',
      },
      {
        text: 'placeholder image',
        type: 'image',
        file: 'http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg',
      },
      {
        text: 'placeholder image',
        type: 'image',
        file: 'http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg',
      },
            {
        text: 'placeholder image',
        type: 'image',
        file: 'http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg',
      },
    ],
  },
};
