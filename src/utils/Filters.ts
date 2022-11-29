export const simpleFilters = [
  {
    tag: 'select',
    choices: [
      { value: 'cont1', text: 'continente1' },
      { value: 'cont2', text: 'continente2' },
      { value: 'cont3', text: 'continente3' },
    ],
    name: 'contient',
    placeholder: 'Seleccione Continente',
    selectName: 'Continente',
  },
  {
    tag: 'select',
    choices: [
      { value: 'contry1', text: 'contry1' },
      { value: 'contry2', text: 'contry2' },
      { value: 'contry3', text: 'contry3' },
    ],
    name: 'contry',
    placeholder: 'Seleccione Pais',
    selectName: 'Pais',
  },
  {
    tag: 'select',
    choices: [
      { value: 'state1', text: 'state1' },
      { value: 'state2', text: 'state2' },
      { value: 'state3', text: 'state3' },
    ],
    name: 'state',
    placeholder: 'Seleccione',
    selectName: 'Estado',
  },
  {
    tag: 'select',
    choices: [
      { value: 'vehicleType1', text: 'vehicleType1' },
      { value: 'vehicleType2', text: 'vehicleType2' },
      { value: 'vehicleType3', text: 'vehicleType3' },
    ],
    name: 'vehicleType',
    placeholder: 'Seleccione tipo de vehiculo',
    selectName: 'Tipo de vehiculo',
  },
  {
    tag: 'radioButton',
    choices: [
      { value: 'v1', text: 'Vehiculo 1' },
      { value: 'v2', text: 'Vehiculo 2' },
      { value: 'v3', text: 'Vehiculo 3' },
    ],
    name: 'vehicleType',
    placeholder: 'Seleccione tipo de vehiculo',
    selectName: 'Vehiculo En',
  },
  {
    tag: 'select',
    choices: [
      { value: 'vehicleBrand1', text: 'vehicleBrand1' },
      { value: 'vehicleBrand2', text: 'vehicleBrand2' },
      { value: 'vehicleBrand3', text: 'vehicleBrand3' },
    ],
    name: 'vehicleBrand',
    placeholder: 'Seleccione vehicleBrand',
    selectName: 'vehicleBrand',
  },
  {
    tag: 'select',
    choices: [
      { value: 'vehicleModel1', text: 'vehicleModel1' },
      { value: 'vehicleModel2', text: 'vehicleModel2' },
      { value: 'vehicleModel3', text: 'vehicleModel3' },
    ],
    name: 'vehicleModel',
    placeholder: 'Seleccione vehicleModel',
    selectName: 'vehicleModel',
  },
];

export const complexFilters = [
  {
    tag: 'checkBox',
    choices: [
      { value: 'cont1', text: 'continente1' },
      { value: 'cont2', text: 'continente2' },
      { value: 'cont3', text: 'continente3' },
    ],
    name: 'contient',
    placeholder: 'Seleccione Continente',
    selectName: 'Continente',
  },
  {
    tag: 'input',
    choices: [],
    name: 'input',
    placeholder: 'Escriba Input',
    selectName: 'Escriba un Input',
  },
];

export const vehicleLocation = [
  {
    tag: 'select',
    choices: [
      { value: 'cont1', text: 'continente1' },
      { value: 'cont2', text: 'continente2' },
      { value: 'cont3', text: 'continente3' },
    ],
    name: 'contient',
    placeholder: 'Seleccione Continente',
    selectName: 'Continente',
  },
  {
    tag: 'select',
    choices: [
      { value: 'country1', text: 'pais1' },
      { value: 'country2', text: 'pais2' },
      { value: 'country3', text: 'pais3' },
    ],
    name: 'contry',
    placeholder: 'Seleccione pais',
    selectName: 'pais',
  },
  {
    tag: 'select',
    choices: [
      { value: 'state1', text: 'state1' },
      { value: 'state2', text: 'state2' },
      { value: 'state3', text: 'state3' },
    ],
    name: 'state',
    placeholder: 'Seleccione',
    selectName: 'Estado',
  },
  {
    tag: 'select',
    choices: [
      { value: 'city1', text: 'city1' },
      { value: 'city2', text: 'city2' },
      { value: 'city3', text: 'city3' },
    ],
    name: 'city',
    placeholder: 'Seleccione Cuidad',
    selectName: 'Cuidad',
  },
  {
    tag: 'select',
    choices: [
      { value: 'zone1', text: 'zone1' },
      { value: 'zone2', text: 'zone2' },
      { value: 'zone3', text: 'zone3' },
    ],
    name: 'zone',
    placeholder: 'Seleccione Zona',
    selectName: 'Zona',
  },
]

export const brandYearVehicle = [
  {
    tag: 'select',
    choices: [
      { value: 'brand1', text: 'brand1' },
      { value: 'brand2', text: 'brand2' },
      { value: 'brand3', text: 'brand3' },
    ],
    name: 'vehicleBrand',
    placeholder: 'Selecciona marca',
    selectName: 'Marca del vehiculo',
  },
  {
    tag: 'select',
    choices: [
      { value: 'model1', text: 'model1' },
      { value: 'model2', text: 'model2' },
      { value: 'model3', text: 'model3' },
    ],
    name: 'vehicleModel',
    placeholder: 'Modelo de Vehiculo',
    selectName: 'Marca de vehiculo',
  },
  {
    tag: 'input',
    choices: [],
    name: 'vehicleYear',
    placeholder: 'Ejm: 1987',
    selectName: 'Año de vehiculo',
  },
  {
    tag: 'select',
    choices: [
      { value: 'model1', text: 'model1' },
      { value: 'model2', text: 'model2' },
      { value: 'model3', text: 'model3' },
    ],
    name: 'model',
    placeholder: 'Seleccione la marca',
    selectName: 'Tipo de vehiculo',
  },
]

export const vehicleStatus = [
  {
    tag: 'select',
    choices: [
      { value: 'brand1', text: 'brand1' },
      { value: 'brand2', text: 'brand2' },
      { value: 'brand3', text: 'brand3' },
    ],
    name: 'brand',
    placeholder: 'Selecciona marca',
    selectName: 'Marca del vehiculo',
  },
  {
    tag: 'select',
    choices: [
      { value: 'brand1', text: 'brand1' },
      { value: 'brand2', text: 'brand2' },
      { value: 'brand3', text: 'brand3' },
    ],
    name: 'brand',
    placeholder: 'Selecciona marca',
    selectName: 'Marca del vehiculo',
  },
]

export const money = [
  {
    tag: 'select',
    choices: [
      { value: 'USD', text: 'USD' },
      { value: 'EUR', text: 'EUR' },
      { value: 'other', text: 'other' },
    ],
    name: 'money',
    placeholder: 'Seleccione Moneda',
    selectName: 'Seleccione Moneda',
  },
]