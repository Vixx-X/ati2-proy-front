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
