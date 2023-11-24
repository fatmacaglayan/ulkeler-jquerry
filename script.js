// $("#button").click(() => {

// })

// $("#button").on("click", () => {

// })

// $("#button").on({
//     click: function(){

//     },
//     mouseleave: function(){
//     }
// })

// $("#button").click(function () { 
    
    
// });

// $("#button").keyup(function () { 
    
// });

function calcWorldPop(){
    let total = 0
    $.each(countries_data, function (country) { 
        total += countries_data[country].population
    });
    return total
}


$("#button").click(() => {
    $.each(countries_data, function (countryIndex){
        $country = countries_data[countryIndex]
        $name = $("<h2></h2>")
        $capital = $("<h3></h3>")
        $flag = $("<img>")
        $population = $("<p></p>")
        $percent_of_pop = $("<p></p>")
        $div = $("<div></div>")
        $percent = Number((($country / calcWorldPop()) * 100).toFixed(5))

        $($name).text($country.name)
        $($capital).append($country.capital);
        $($flag).attr("src",`${$country.flag}`)
        $($flag).css("width", "50px");
        $($population).text($country.population)
        $($percent_of_pop).text(`bu ülkenin nüfusunun oranı dünya nüfusuna oranı: ${$percent}`);
        $($percent_of_pop).css("color", `${$percent >= 3 ? "red" : "green"}`);

        $div.append($name)
        $($div).append($capital);
        $($div).append($flag);
        $($div).append($population);
        $($div).append($percent_of_pop)
        $div.css({
            "display": "flex",
            "border": "1px solid black",
            "justify-content": "center",
            "align-items": "center",
            "flex-direction": "column",
            "text-align": "center"
        })

        $(".container").append($div)
        $(".title").text(`toplamda: ${countries_data.length} ülke var. Toplam nüfus: ${calcWorldPop()}`)
    });
})