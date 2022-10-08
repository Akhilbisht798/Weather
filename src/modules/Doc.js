import Data from './api'

async function DetailsSection() {
    let data = await Data("London");
    let container = document.querySelector('.container');
    let div = document.createElement('div');
    div.id = "details";
    container.appendChild(div);
    ChangeCity(data);
}

function ChangeCity(obj) {
    let div = document.getElementById("details");
    let link = "https://openweathermap.org/img/wn/" + obj["weather"][0]["icon"] + "@2x.png";
    div.innerHTML = `<div id="Left">
                        <p id="city-name">${obj["name"]}</p>
                        <p id="weather">${obj["weather"][0]["main"]}</p>
                        <p id="temp">${obj["main"]["temp"]}</p>
                        <p id="HLTemp">High: ${obj["main"]["temp_max"]}, Low: ${obj["main"]["temp_min"]}</p>
                    </div>
                    <div id="right">
                        <img src="${link}" alt="weather">
                    </div>`;
}

async function SerachCity() {
    let SearchBtn = document.getElementById("Search_btn");
    SearchBtn.addEventListener("click", (e) => {
        GetValue()
    })
}

async function GetValue() {
    let val = document.getElementById("Search_bar").value;
    const data = await Data(val);
    // console.log(data);
    ChangeCity(data);
}

function header() {
    let container = document.querySelector('.container');
    let div = document.createElement('div');
    div.id = "Head";
    div.innerHTML = `<div id="head_icon">
                        <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" alt="Logo" id="Head_Icon_img">
                    </div>
                    <div class="Serach-bar">
                        <input type="text" name="city_name" id="Search_bar">
                        <label for="city_name" id="Search_btn">Search</label>
                    </div>`;

    container.appendChild(div);
    SerachCity();
}

export {
    header,
    ChangeCity,
    DetailsSection
}