// Take city name and give important data about its weather.

export default async function getData(City) {
    let link = "http://api.openweathermap.org/data/2.5/weather?q=" + City + "&APPID=55a967536c6b25bfe368a4c4f5f1f869";

    try {
        const response = await fetch(link, { mode: 'cors' });
        const Data = await response.json();
        return Data;
    }
    catch (error) {
        // throw new Error(error);
        console.error(error);
    }
}
