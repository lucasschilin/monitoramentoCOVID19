var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.covid19api.com/summary');
        xhr.send(null);
        
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição');
                }
            }
        }

    });
}

var pais = document.getElementById('pais');
var novasconfirmadas = document.getElementById('NovasConfirmadas');
var totalconfirmadas = document.getElementById('TotalConfirmadas');
var novasmortes = document.getElementById('NovasMortes');
var totalmortes = document.getElementById('TotalMortes');

var object;


minhaPromise()
    .then(function(response) {
        object = response.Countries;
        console.log(object);
        for (let index = 0; index < response.Countries.length; index++) {
            var optionpais = document.createElement('option');
            optionpais.setAttribute('value', index);
            pais.appendChild(optionpais);
            optionpais.innerHTML = response.Countries[index].Country;
        }
    })
    .catch(function(error) {
        console.warn(error);
    });

function mostraStatus(){
    novasconfirmadas.value = object[pais.value].NewConfirmed;
    totalconfirmadas.value = object[pais.value].TotalConfirmed;
    novasmortes.value = object[pais.value].NewDeaths;
    totalmortes.value = object[pais.value].TotalDeaths;
    console.log(object[pais.value]);
}


