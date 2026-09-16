import Receitas from "@/components/cardPRODUTO";

 <main>
            <h1>Receitas</h1>
            {msgErro != "" && <p>ERRO: {msgErro}</p> }
            

            {listaReceitas.length > 0 ?
                <div>
                  {listaReceitas.map( (user, idx) => {
                  return(
                    <div key={idx}>
                        <h3>{user.name.first}{" "}{user.name.last}</h3>
                        <img src={user.picture.large} alt="" />

                        </div>
                     )
                  } )}
                </div>
                :
                // aparece qndo não tem usuario
                <div>
                    <p>Sem nenhum usuario por enquanto...</p>
                </div>
            }

        </main>
