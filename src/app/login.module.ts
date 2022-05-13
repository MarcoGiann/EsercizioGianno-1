export interface Ilogin{
  id: any
  name: string
  username: string
  email: string
  address?: IAddress
  phone: string
  website: string
  company?: Company
}

export interface ITodos{
  userId:number;
  id: number;
  title:string;
  completed:boolean;
}
export interface IAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo?: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

