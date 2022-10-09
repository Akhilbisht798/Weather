
async function getData(City) {
    let link = "http://api.openweathermap.org/data/2.5/weather?q=" + City + "&APPID=55a967536c6b25bfe368a4c4f5f1f869";

    try {
        const response = await fetch(link, { mode: 'cors' });
        const Data = await response.json();
        return Data;
    }
    catch (error) {
        console.error(error);
    }
}

function ConvertTemp(temp, toCelcius) {
    if (toCelcius) return parseFloat((temp - 273.15).toString()).toFixed(1);
    return temp;
}

export {
    getData,
    ConvertTemp
}