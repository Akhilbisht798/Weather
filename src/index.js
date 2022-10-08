//http://api.openweathermap.org/data/2.5/weather?q=London&APPID=55a967536c6b25bfe368a4c4f5f1f869

//https://api.openweathermap.org/data/2.5/weather?q=London&appid=55a967536c6b25bfe368a4c4f5f1f869

// image - https://openweathermap.org/img/wn/11n@2x.png

import Data from './modules/api'
import { header, ChangeCity, DetailsSection } from './modules/Doc'

header(); // Import Header in Html.
(async function () {
    DetailsSection();
})();// Add detail section to document.
