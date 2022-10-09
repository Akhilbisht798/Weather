import { getData, ConvertTemp } from './api'

async function DetailsSection() {
    let data = await getData("London");
    let container = document.querySelector('.container');
    let div = document.createElement('div');
    div.id = "details";
    container.appendChild(div);
    ChangeCity(data, true);
}

function ChangeCity(obj, change) {
    let div = document.getElementById("details");
    let link = "https://openweathermap.org/img/wn/" + obj["weather"][0]["icon"] + "@2x.png";
    let Temp = ConvertTemp(obj["main"]["temp"], change);
    let Max = ConvertTemp(obj["main"]["temp_max"], change);
    let Min = ConvertTemp(obj["main"]["temp_min"], change);

    let symbol = (change) ? " °C" : " K";

    div.innerHTML = `<div id="Left">
                        <p id="city-name">${obj["name"]}</p>
                        <p id="weather">${obj["weather"][0]["main"]}</p>
                        <p id="temp">${Temp} ${symbol}</p>
                        <p id="HLTemp">High: ${Max} ${symbol}, Low: ${Min} ${symbol}</p>
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

async function GetValue(change) {
    let val = document.getElementById("Search_bar").value;
    if (val.length == 0) {
        val = document.getElementById("city-name").innerHTML;
    }
    console.log(val);
    const data = await getData(val);
    console.log(data);
    ChangeCity(data, change);
}

async function ChangeTempUI() {
    let toggle = document.getElementById("Slider");
    toggle.addEventListener('change', () => {
        if (toggle.checked) GetValue(false);
        else GetValue(true);
    })
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
                    </div>
                    <div>
                        <label class="switch">
                            <input type="checkbox" id="Slider">
                                <span class="slider round"></span>
                        </label>
                    </div>`;

    container.appendChild(div);
    SerachCity();
    ChangeTempUI();
}

function Footer() {
    let container = document.querySelector('.container');
    let div = document.createElement('div');
    div.id = "Footer";
    div.innerHTML = `<div id="details">
                        <p class="footer_para">Made By AKhil</p>
                    </div>`
    container.appendChild(div);
}

export {
    header,
    ChangeCity,
    DetailsSection,
    Footer
}