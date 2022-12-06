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

export enum contactUseHours {
  AM = 0,
  PM = 1
}

export enum SaleType {
  SALE = 'SALE',
  RENTAL = 'RENTAL',
  SALE_RENTAL = 'SALE AND RENTAL',
}

export enum UserType {
  NATURAL = 'natural',
  BUSINESS = 'business',
}

export enum StatusVehicle {
  NEW = 'new',
  USED = 'used',
}

export interface User {
  password1: string;
  password2: string;
  email: string;
  language: string;
  notification_setting: NotificationManager;
  about_website: AboutWebSite;
  payment_info: PaymentInfo;
}

export interface Business {
  user: User;
  name: string;
  tax_id: string;
  address: Address;
  representant: Representant;
}

export interface NaturalPerson {
  user: User;
  first_name: string;
  last_name: string;
  document_id: string;
  email: string;
  phone:string;
  local_phone: string;
  country: string;
}

interface PaymentInfo {
  source_bank: string;
  target_bank: string;
  country: string;
}

interface NotificationManager {
  active: boolean;
  frecuency: string;
  notification_method: NotificationMethod;
}

interface NotificationMethod {
  email: string;
  socials: Social[];
  sms: string;
  other: string;
  facebook: string;
}

interface AboutWebSite {
  web: boolean;
  socials: string[];
  friends: boolean;
  other: string;
}

interface Representant {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  local_phone: string;
}

interface Contact {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  local_phone: string;
  contact_days: DaysOfWeek;
  contact_hour_start: Date;
  contact_hour_end: Date;
}

interface Post {
  author: User;
  address: Address;
  contact: Contact;
  details: string;
}

interface VehiclePost {
  rental_price: number;
  sale_price: number;
  currency: string;
  // limit_media:string
  sale_type: SaleType;
  vehicle: Vehicle;
  accesories: string;
  services: string;
  state: StatusVehicle;
}

interface ContractModality {
  name: string;
}

interface Profession {
  name: string;
}

interface JobPost {
  contact: Contact;
  title: string;
  schedule: string;
  modality: ContractModality;
  supervisor: Profession[];
  interactor: Profession[];
}

interface ServicePost {
  url: string;
  title: string;
}

export interface Vehicle {
  model: string;
  year: string;
  brand: string;
  type: string;
}

export interface Multimedia {
  text: string;
  type: string;
  file: string;
}

interface Social {
  social: string;
  value?: string;
}

interface Address {
  line1: string;
  line2: string;
  city?: City | number;
}

interface City {
  name: string;
  state: State;
}

interface State {
  name: string;
  county: Country;
}

interface Country {
  name: string;
  continent?: Continent;
}

interface Continent {
  name: string;
}

interface ContactSeller {
  data: json;
}

export interface NaturalPerson {
  user: User;
  first_name: string;
  last_name: string;
  document_id: string;
  email: string;
  phone: string;
  local_phone: string;
  country: Country;
}
