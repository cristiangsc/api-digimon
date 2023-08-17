function consultar() {
    fetch(`https://digimon-api.vercel.app/api/digimon`).then((resp) => {
        return resp.json()
    }).then((data) => {
        $("#tabla-digimon tbody").html("");
        for (const post of data) {
            $("#tabla-digimon tbody").append(`
                <tr class="align-middle">
                    <td>${post.name}</td>
                    <td><img src="${post.img}" class="rounded w-25" /></td>
                    <td>${post.level}</td>
                </tr>
            `)
        }
    })
}

function buscar(digimon) {

    fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`).then((resp) => {
        return resp.json()
    }).then((data) => {
        $("#tabla-digimon tbody").html("");
        for (const post of data) {
            $("#tabla-digimon tbody").append(`
                <tr class="align-middle">
                    <td>${post.name}</td>
                    <td><img src="${post.img}" class="rounded w-25" /></td>
                    <td>${post.level}</td>
                </tr>
            `)
        }
    }).catch(error => alert("Digimon no encontrado!!!"))
}


$(document).ready(function() {
      $(document).on("click", "#list", function() {
        consultar()
    })

    $(document).on("click", "#search", function() {
        const digimon = prompt("Ingrese nombre del Digimon a buscar:")
        buscar(digimon)
    })
})