async function actors(){
    const response = await fetch('https://it-its.id/api/movies')
    var data = await response.json()

    console.log(data)

}
actors()