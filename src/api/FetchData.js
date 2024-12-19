export const GetData = async()=>{
    const response = await fetch(`https://restcountries.com/v3.1/all?fields=capital,currencies,continents,coatOfArms,currencies,flags,gini,languages,maps,name,population,region,startOfWeek`,{
        method:'GET'
    })
    return await response.json()
}