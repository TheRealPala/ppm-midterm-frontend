import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './navDropdown.scss';


export function NavDropdown () {
    return <div className="custom-width page-header position-relative">
        <nav className={"nav-dropdown d-none d-md-flex"}>
            <Dropdown>
                <Dropdown.Toggle className="fw-semibold" variant={"false"}>
                    SEZIONI
                </Dropdown.Toggle>

                <Dropdown.Menu>
                   <div className={"w-full h-full d-flex justify-content-center align-items-center"}>
                       <div className={"dropdown-grid"}>
                           <li className="menu-sezioni__item fw-semibold">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/politica/"
                                  title="vai alla sezione Politica">Politica</a>
                           </li>
                           <li className="menu-sezioni__item fw-semibold">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/economia/"
                                  title="vai alla sezione Economia">Economia</a>
                           </li>
                           <li className="menu-sezioni__item fw-semibold">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/esteri/"
                                  title="vai alla sezione Esteri">Esteri</a>
                           </li>
                           <li className="menu-sezioni__item fw-semibold">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/italia/"
                                  title="vai alla sezione Italia">Italia</a>
                           </li>
                           <li className="menu-sezioni__item fw-semibold">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/cronaca/"
                                  title="vai alla sezione Cronaca">Cronaca</a>
                           </li>
                           <li className="menu-sezioni__item" >
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/commenti/"
                                  title="vai alla sezione Commenti">Commenti</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/scuola/"
                                  title="vai alla sezione Scuola">Scuola</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/cultura/"
                                  title="vai alla sezione Cultura">Cultura</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/robinson/"
                                  title="vai alla sezione Robinson">Robinson</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/venerdi/"
                                  title="vai alla sezione Venerdì">Venerdì</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/u/"
                                  title="vai alla sezione U">U</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/moda-e-beauty/d/"
                                  title="vai alla sezione D">D</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/sport/"
                                  title="vai alla sezione Sport">Sport</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/spettacoli/"
                                  title="vai alla sezione Spettacoli">Spettacoli</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/serietv"
                                  title="vai alla sezione Serie Tv">Serie Tv</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/rubriche/"
                                  title="vai alla sezione Rubriche">Rubriche</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/podcast/"
                                  title="vai alla sezione Podcast">Podcast</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/video/"
                                  title="vai alla sezione Video">Video</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/rubriche/metropolis/"
                                  title="vai alla rubrica Metropolis">Metropolis</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/salute/"
                                  title="vai alla sezione Salute">Salute</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/green-and-blue/"
                                  title="vai alla sezione Green&amp;Blue">Green&amp;Blue</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/tecnologia/"
                                  title="vai alla sezione Italian Tech">Italian Tech</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/moda-e-beauty"
                                  title="vai alla sezione Moda e Beauty">Moda e Beauty</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://design.repubblica.it/"
                                  title="vai alla sezione Design">Design</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/il-gusto/"
                                  title="vai alla sezione Il Gusto">Il Gusto</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/la-zampa/"
                                  title="vai alla sezione La Zampa">La Zampa</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/motori/"
                                  title="vai alla sezione Motori">Motori</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/viaggi/"
                                  title="vai alla sezione Viaggi">Viaggi</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/vaticano/"
                                  title="vai alla sezione Vaticano">Vaticano</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/londra/"
                                  title="vai alla sezione Londra">Londra</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://elezioni.repubblica.it/"
                                  title="vai alla sezione Elezioni">Elezioni</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://www.repubblica.it/solidarieta/"
                                  title="vai alla sezione Mondo Solidale">Mondo Solidale</a>
                           </li>
                           <li className="menu-sezioni__item">
                               <a className="menu-sezioni__link" href="https://scuola.repubblica.it/"
                                  title="vai alla sezione Repubblica@Scuola">Repubblica@Scuola</a>
                           </li>

                       </div>
                   </div>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle className="fw-semibold" variant={"false"}>
                    EDIZIONI LOCALI
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <div className={"w-full h-full d-flex justify-content-center align-items-center"}>
                        <div className={"dropdown-grid"}>

                            <li className="menu-sezioni__item fw-semibold">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/politica/"
                                   title="vai alla sezione Politica">Politica</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/economia/"
                                   title="vai alla sezione Economia">Economia</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/esteri/"
                                   title="vai alla sezione Esteri">Esteri</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/italia/"
                                   title="vai alla sezione Italia">Italia</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/cronaca/"
                                   title="vai alla sezione Cronaca">Cronaca</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/commenti/"
                                   title="vai alla sezione Commenti">Commenti</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/scuola/"
                                   title="vai alla sezione Scuola">Scuola</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/cultura/"
                                   title="vai alla sezione Cultura">Cultura</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/robinson/"
                                   title="vai alla sezione Robinson">Robinson</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/venerdi/"
                                   title="vai alla sezione Venerdì">Venerdì</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/u/"
                                   title="vai alla sezione U">U</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/moda-e-beauty/d/"
                                   title="vai alla sezione D">D</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/sport/"
                                   title="vai alla sezione Sport">Sport</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/spettacoli/"
                                   title="vai alla sezione Spettacoli">Spettacoli</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/serietv"
                                   title="vai alla sezione Serie Tv">Serie Tv</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/rubriche/"
                                   title="vai alla sezione Rubriche">Rubriche</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/podcast/"
                                   title="vai alla sezione Podcast">Podcast</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/video/"
                                   title="vai alla sezione Video">Video</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/rubriche/metropolis/"
                                   title="vai alla rubrica Metropolis">Metropolis</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/salute/"
                                   title="vai alla sezione Salute">Salute</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/green-and-blue/"
                                   title="vai alla sezione Green&amp;Blue">Green&amp;Blue</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/tecnologia/"
                                   title="vai alla sezione Italian Tech">Italian Tech</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/moda-e-beauty"
                                   title="vai alla sezione Moda e Beauty">Moda e Beauty</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://design.repubblica.it/"
                                   title="vai alla sezione Design">Design</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/il-gusto/"
                                   title="vai alla sezione Il Gusto">Il Gusto</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/la-zampa/"
                                   title="vai alla sezione La Zampa">La Zampa</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/motori/"
                                   title="vai alla sezione Motori">Motori</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/viaggi/"
                                   title="vai alla sezione Viaggi">Viaggi</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/vaticano/"
                                   title="vai alla sezione Vaticano">Vaticano</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/londra/"
                                   title="vai alla sezione Londra">Londra</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://elezioni.repubblica.it/"
                                   title="vai alla sezione Elezioni">Elezioni</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/solidarieta/"
                                   title="vai alla sezione Mondo Solidale">Mondo Solidale</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://scuola.repubblica.it/"
                                   title="vai alla sezione Repubblica@Scuola">Repubblica@Scuola</a>
                            </li>

                        </div>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle className="fw-semibold" variant={"false"}>
                    SERVIZI
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <div className={"w-full h-full d-flex justify-content-center align-items-center"}>
                        <div className={"dropdown-grid"}>

                            <li className="menu-sezioni__item fw-semibold">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/politica/"
                                   title="vai alla sezione Politica">Politica</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/economia/"
                                   title="vai alla sezione Economia">Economia</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/esteri/"
                                   title="vai alla sezione Esteri">Esteri</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/italia/"
                                   title="vai alla sezione Italia">Italia</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/cronaca/"
                                   title="vai alla sezione Cronaca">Cronaca</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/commenti/"
                                   title="vai alla sezione Commenti">Commenti</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/scuola/"
                                   title="vai alla sezione Scuola">Scuola</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/cultura/"
                                   title="vai alla sezione Cultura">Cultura</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/robinson/"
                                   title="vai alla sezione Robinson">Robinson</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/venerdi/"
                                   title="vai alla sezione Venerdì">Venerdì</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/u/"
                                   title="vai alla sezione U">U</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/moda-e-beauty/d/"
                                   title="vai alla sezione D">D</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/sport/"
                                   title="vai alla sezione Sport">Sport</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/spettacoli/"
                                   title="vai alla sezione Spettacoli">Spettacoli</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/serietv"
                                   title="vai alla sezione Serie Tv">Serie Tv</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/rubriche/"
                                   title="vai alla sezione Rubriche">Rubriche</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/podcast/"
                                   title="vai alla sezione Podcast">Podcast</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/video/"
                                   title="vai alla sezione Video">Video</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/rubriche/metropolis/"
                                   title="vai alla rubrica Metropolis">Metropolis</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/salute/"
                                   title="vai alla sezione Salute">Salute</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/green-and-blue/"
                                   title="vai alla sezione Green&amp;Blue">Green&amp;Blue</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/tecnologia/"
                                   title="vai alla sezione Italian Tech">Italian Tech</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/moda-e-beauty"
                                   title="vai alla sezione Moda e Beauty">Moda e Beauty</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://design.repubblica.it/"
                                   title="vai alla sezione Design">Design</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/il-gusto/"
                                   title="vai alla sezione Il Gusto">Il Gusto</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/la-zampa/"
                                   title="vai alla sezione La Zampa">La Zampa</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/motori/"
                                   title="vai alla sezione Motori">Motori</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/viaggi/"
                                   title="vai alla sezione Viaggi">Viaggi</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/vaticano/"
                                   title="vai alla sezione Vaticano">Vaticano</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/londra/"
                                   title="vai alla sezione Londra">Londra</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://elezioni.repubblica.it/"
                                   title="vai alla sezione Elezioni">Elezioni</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://www.repubblica.it/solidarieta/"
                                   title="vai alla sezione Mondo Solidale">Mondo Solidale</a>
                            </li>
                            <li className="menu-sezioni__item">
                                <a className="menu-sezioni__link" href="https://scuola.repubblica.it/"
                                   title="vai alla sezione Repubblica@Scuola">Repubblica@Scuola</a>
                            </li>

                        </div>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </nav>
        <div className={"ps-3 w-100 nav-topics-wrapper overflow-x-scroll"}>
            <a href={"#"} className={"nav-topics fw-semibold"}>Prova</a>
            <a href={"#"} className={"nav-topics fw-semibold"}>Prova</a>
            <a href={"#"} className={"nav-topics fw-semibold"}>Prova</a>
            <a href={"#"} className={"nav-topics fw-semibold"}>Prova</a>
            <a href={"#"} className={"nav-topics fw-semibold"}>Prova</a>
            <a href={"#"} className={"nav-topics fw-semibold"}>Prova</a>
            <a href={"#"} className={"nav-topics fw-semibold"}>Prova</a>
        </div>
    </div>
}

