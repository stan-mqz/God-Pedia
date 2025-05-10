
export const SearchGodForm = () => {

  return (

    <form className="flex justify-center gap-2 mt-16 text-white mx-auto w-full">    
        <input className="border border-white p-3 w-96" type="text" placeholder="Buscar un Dios" />

        <select className="border border-white p-3" name="" id="">
            <option value="">Filtrar por categoría</option>
        </select>
    </form>
)
}
