import { Component } from '@angular/core';
import { Istd } from './shared/models/student';
import { ICompany } from './shared/models/comdetails';
import{IProduct} from './shared/models/product';
import{ICountry} from './shared/models/country'
import { IFootballPlayer } from './shared/models/Players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Company Table"
 stdArr: Array <Istd> = [
    { 
      fname: 'John',
      lname: 'Doe', 
      email: 'john@gmail.com',
      contact: 1234567890,
      stdid: '123'
    },
    {
      fname: 'May',
      lname: 'Doe',
      email: 'may@gmail.com',
      contact: 9876543210,
      stdid: '124'
    },
    {
  fname: 'Amit',
  lname: 'Patil',
  email: 'amit.patil@gmail.com',
  contact: 9123456780,
  stdid: '101'
},
{
  fname: 'Sneha',
  lname: 'Sharma',
  email: 'sneha.sharma@gmail.com',
  contact: 9234567810,
  stdid: '102'
},
{
  fname: 'Rahul',
  lname: 'Verma',
  email: 'rahul.verma@gmail.com',
  contact: 9345678120,
  stdid: '103'
},
{
  fname: 'Pooja',
  lname: 'Kulkarni',
  email: 'pooja.kulkarni@gmail.com',
  contact: 9456781230,
  stdid: '104'
},
{
  fname: 'Rohit',
  lname: 'Mehta',
  email: 'rohit.mehta@gmail.com',
  contact: 9567812340,
  stdid: '105'
},
{
  fname: 'Neha',
  lname: 'Joshi',
  email: 'neha.joshi@gmail.com',
  contact: 9678123450,
  stdid: '106'
},
{
  fname: 'Kunal',
  lname: 'Deshmukh',
  email: 'kunal.deshmukh@gmail.com',
  contact: 9781234560,
  stdid: '107'
},
{
  fname: 'Anjali',
  lname: 'Rane',
  email: 'anjali.rane@gmail.com',
  contact: 9892345670,
  stdid: '108'
},
{
  fname: 'Vikas',
  lname: 'Jadhav',
  email: 'vikas.jadhav@gmail.com',
  contact: 9012345678,
  stdid: '109'
},
{
  fname: 'Priya',
  lname: 'Naik',
  email: 'priya.naik@gmail.com',
  contact: 9123987654,
  stdid: '110'
}
  ];
  
   companyArr: Array<ICompany> = [
    {
      companyId: 'C101',
      companyName: 'TCS',
      industry: 'IT Services',
      email: 'contact@tcs.com',
      contact: 9123456789,
      city: 'Mumbai',
      employees: 500000
    },
    {
      companyId: 'C102',
      companyName: 'Infosys',
      industry: 'Software',
      email: 'info@infosys.com',
      contact: 9234567810,
      city: 'Bangalore',
      employees: 350000
    },
    {
      companyId: 'C103',
      companyName: 'Wipro',
      industry: 'Consulting',
      email: 'support@wipro.com',
      contact: 9345678123,
      city: 'Pune',
      employees: 250000
    },
    {
      companyId: 'C104',
      companyName: 'HCL',
      industry: 'Technology',
      email: 'careers@hcl.com',
      contact: 9456781234,
      city: 'Noida',
      employees: 220000
    },
    {
      companyId: 'C105',
      companyName: 'Accenture',
      industry: 'IT Consulting',
      email: 'connect@accenture.com',
      contact: 9567812345,
      city: 'Hyderabad',
      employees: 700000
    }
  ];


   products :IProduct[]=[
  {
    id: 101,
    name: 'Laptop',
    category: 'Electronics',
    price: 65000,
    inStock: true,
    rating: 4.5,
    brand: 'Dell'
  },
  {
    id: 102,
    name: 'Smartphone',
    category: 'Electronics',
    price: 32000,
    inStock: true,
    rating: 4.3,
    brand: 'Samsung'
  },
  {
    id: 103,
    name: 'Headphones',
    category: 'Accessories',
    price: 2500,
    inStock: false,
    rating: 4.1,
    brand: 'Boat'
  },
  {
    id: 104,
    name: 'Smart Watch',
    category: 'Accessories',
    price: 5000,
    inStock: true,
    rating: 4.2,
    brand: 'Noise'
  },
  {
    id: 105,
    name: 'Keyboard',
    category: 'Accessories',
    price: 1200,
    inStock: true,
    rating: 4.0,
    brand: 'Logitech'
  }
];

countries :ICountry[] = [
  {
    id: 1,
    name: 'India',
    capital: 'New Delhi',
    population: 1400000000,
    currency: 'INR',
    continent: 'Asia'
  },
  {
    id: 2,
    name: 'United States',
    capital: 'Washington, D.C.',
    population: 331000000,
    currency: 'USD',
    continent: 'North America'
  },
  {
    id: 3,
    name: 'Germany',
    capital: 'Berlin',
    population: 83000000,
    currency: 'EUR',
    continent: 'Europe'
  },
  {
    id: 4,
    name: 'Japan',
    capital: 'Tokyo',
    population: 125000000,
    currency: 'JPY',
    continent: 'Asia'
  },
  {
    id: 5,
    name: 'Australia',
    capital: 'Canberra',
    population: 26000000,
    currency: 'AUD',
    continent: 'Australia'
  }
];


bestFootballPlayers:IFootballPlayer[] = [
   {
    id: 1,
    name: 'Lionel Messi',
    country: 'Argentina',
    club: 'Inter Miami',
    position: 'Forward',
    goals: 800
  },
  {
    id: 2,
    name: 'Cristiano Ronaldo',
    country: 'Portugal',
    club: 'Al Nassr',
    position: 'Forward',
    goals: 850
  },
  {
    id: 3,
    name: 'Neymar Jr',
    country: 'Brazil',
    club: 'Al Hilal',
    position: 'Forward',
    goals: 450
  },
  {
    id: 4,
    name: 'Kylian Mbappé',
    country: 'France',
    club: 'Paris Saint-Germain',
    position: 'Forward',
    goals: 300
  },
  {
    id: 5,
    name: 'Kevin De Bruyne',
    country: 'Belgium',
    club: 'Manchester City',
    position: 'Midfielder',
    goals: 150
  }
];

 desh: string[] = [
  'India',
  'USA',
  'Germany',
  'Japan',
  'Australia'
];

colors: string[] = ['Red', 'Blue', 'Green', 'Yellow', 'Black'];
cities: string[] = ['Mumbai', 'Delhi', 'Pune', 'Bangalore', 'Chennai'];
languages: string[] = ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'];
fruits: string[] = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];
sports: string[] = [
  'Football',
  'Cricket',
  'Hockey',
  'Tennis',
  'Badminton'
];
}


