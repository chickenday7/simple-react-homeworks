import React from 'react'
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import {Route, Routes} from "react-router-dom";
import {Junior} from "./pages/Junior";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
    // add paths
}




function RoutesComponent() {

    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}


            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            {/*<Route path={'/'} element = {<Redirect to={PATH.PRE_JUNIOR}/>}/>*/}

            <Routes>
                <Route path={'/'} element={<PreJunior/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                {/*<Route path={PATH.JUNIOR_PLUS}  />*/}



                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}

                <Route path={'/*'} element={<Error404/>}/>
            </Routes>


        </div>

    )
}

export default RoutesComponent
