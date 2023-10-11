const Card=() => {
    return(
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2 p-1">
                    {" "}
                    Dispositivos{" "}
                </span>
                <img className="w-full h-full object-cover rounded-lg"
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nacionrex.com%2Ftest%2Fbt21-que-personaje-eres-test-prueba-compatibilidad-20191111-0013.html&psig=AOvVaw3nvOgyfkhSAb5IVsQt9Ma3&ust=1697147792751000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjl5Kz-7oEDFQAAAAAdAAAAABAE"
                    alt=""
                    srcSet=""
                />
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    +
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">Celular</span>
                <span className="text-lg font-medium">$123</span>
            </p>
            
</div>
    )
}
export default Card