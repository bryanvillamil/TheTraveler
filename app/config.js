let config = {
  apiUrl: 'https://jsonplaceholder.typicode.com'
}


const exportConfig = config;
export default exportConfig;

















// const API_URL = 'https://jsonplaceholder.typicode.com'
// const PEOPLE_URL = '/users/:id/albums'
//
// const opts = { crossDomain: true }
//
//
// function obtenerUsuario(id) {
//
// 	return new Promise ((resolve, reject)=>{
// 		const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
// 		$
// 			.get(url, opts, function(data){
// 				resolve(data)
// 			})
// 			.fail(()=> reject(id)
// 			)
// 	})
// }
//
// function onError(id){
// 	console.log(`Sucedió un error al obtener el personaje ${id}`)
// }
//
// async function obtenerUsuarios() {
// 	var ids = [1,2,3,4,5,6,7]
// 	var promesas = ids.map(function(id){
// 		return obtenerUsuario(id)
// 	})
// 	try {
// 		var usuarios = await Promise.all(promesas)
// 		console.log(usuarios)
// 	} catch(id) {
// 		onError(id)
// 	}
// }
//
// obtenerUsuarios()
//
//
// const exportConfig = config;
// export default exportConfig;
