![CountryInfo](https://github.com/user-attachments/assets/89dc97ce-ef70-4ef7-be3f-49d6dd1daa3c)# Country List

## Front-end
### Tech Stack:
* React.js
* Next.js
* MVC architecture

### Pages
1. Country List Page (localhost:3000)
* Displays a list of clickable countries
2. Country Info Page (localhost:3000/country/$iso2)
* Displays information about the selected country, such as:
  * Country name and flag (if it’s found in countriesnow.space)
  * Country region and the number of bordering countries
  * A chart with the country's population over time
  * A list of countries that border the selected country

### Styling
* Tailwind
* [shadcn UI](https://ui.shadcn.com/docs) for input and chart

## Back-end
### Tech Stack:
* Node (Nest.js)

### Endpoints
* Base URL: localhost:5000/api/

1. #### Return a list of available countries

```bash
  GET /countries/GetAvailableCountries
```

 * #### Response is a list of:

| Field   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `countryCode`      | `string` | ISO2 code of the country |
| `countryName`      | `string` | Common name of the country |


2. #### Return detailed informations about a country given its ISO2 code

```bash
  GET /countries/GetDetailedCountryInfo/${iso2}
```

  * #### Response:
  | Field   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `countryCode`      | `string` | ISO2 code of the country |
| `countryName`      | `string` | Common name of the country |
| `countryOfficialName` | `string` | Official name of the country |
| `region` | `string` | Region where the country is located |
| `borders` | `list` | List of bordering countries |
| `countryFlag` | `string` | URL of the country's flag |
| `populationCounts` | `list` | List of the historical population of the country |

  * #### `borders` list:
  | Field   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `countryCode`      | `string` | ISO2 code of the country |
| `countryName`      | `string` | Common name of the country |

  * #### `populationCounts` list:
  
  | Field   | Type       | Description                                   |
| :---------- | :--------- | :------------------------------------------ |
| `year`      | `number` | year of the given population data |
| `value`      | `number` | number of population in that year |

# How to run
### Backend
#### 1. Access the `src` directory of the backend:
```console
user:~/CountryInfo$ cd CountryInfo/backend/src/
```

#### 2. Install all dependencies:
```console
user:~/CountryInfo/backend/src$ npm install
```

#### 3. Run the server:
```console
user:~/CountryInfo/backend/src$ npm run start:dev
```

The server should start on localhost:5000

### Frontend

#### 1. Access the `src` directory of the frontend:
```console
user:~/$ cd CountryInfo/frontend/src/
```

#### 2. Install all dependencies:
```console
user:~/CountryInfo/frontend/src/$ npm install
```

### 3. Run the frontend:
```console
user:~/CountryInfo/frontend/src/$ npm run dev
```

The frontend should start on localhost:3000

## Demo
![CountryInfoGif](https://github.com/user-attachments/assets/06518eaf-a2e5-4ed5-a23d-79e232606793)


