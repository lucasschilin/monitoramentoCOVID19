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


minhaPromise()
    .then(function(response) {
        pais.value = response.Countries[23].Country;
        novasconfirmadas.value = response.Countries[23].NewConfirmed;
        totalconfirmadas.value = response.Countries[23].TotalConfirmed;
        novasmortes.value = response.Countries[23].NewDeaths;
        totalmortes.value = response.Countries[23].TotalDeaths;
        console.log(response.Countries[23]);
    })
    .catch(function(error) {
        console.warn(error);
    });

