import React from 'react';
import './sait.css';
import logoUsarb from './photo/logo_usarb.png';


function Sait() {
    return (
        <div className="App">
            <div className="main-container">
                <div>
                    <div className="alert center-text" >Orarul Cursurilor</div>
                    <div className="button-group">
                        <button className="btn active">Grupe</button>
                        <button className="btn active">Profesori</button>
                        <button className="btn active">Aule</button>
                    </div>

                    <p className="text">Regim pentru student</p>
                     <div className="search">
                    <div className="search-container">
                        <input className="search-input" value="Amarfii-Railean Nelli Valeriu"/>
                    </div>
                     </div>
                    <ul className="name-list  ">
                        <li>Ababii Lilia Gheorghe</li>
                        <li>Adochiiț Liudmila Igor</li>
                        <li>Amarfii-Raileanu Nelli Valeriu</li>
                        <li>Antoci-Lisnic Valentina Ghenadie</li>
                    </ul>
                    <select className="select">
                        <option>Ziua</option>
                        <option>Luni</option>
                        <option>Marți</option>
                        <option>Miercuri</option>
                        <option>Joi</option>
                        <option selected="selected">Vineri</option>
                        <option>Sîmbătă</option>
                        <option>Duminică</option>
                    </select>
                    <select className="select">
                        <option>1 (1.9.2025 - 7.9.2025)</option>
                        <option>2 (8.9.2025 - 14.9.2025)</option>
                        <option>3 (15.9.2025 - 21.9.2025)</option>
                        <option>4 (22.9.2025 - 28.9.2025)</option>
                        <option>5 (29.9.2025 - 5.10.2025)</option>
                        <option>6 (6.10.2025 - 12.10.2025)</option>
                        <option>7 (13.10.2025 - 19.10.2025)</option>
                        <option>8 (20.10.2025 - 26.10.2025)</option>
                        <option>9 (27.10.2025 - 2.11.2025)</option>
                        <option>10 (3.11.2025 - 9.11.2025)</option>
                        <option selected="selected">11 (10.11.2025 - 16.11.2025)</option>
                        <option>12 (17.11.2025 - 23.11.2025)</option>
                        <option>13 (24.11.2025 - 30.11.2025)</option>
                        <option>14 (1.12.2025 - 7.12.2025)</option>
                        <option>15 (8.12.2025 - 14.12.2025)</option>
                        <option>16 (15.12.2025 - 21.12.2025)</option>
                        <option>17 (22.12.2025 - 28.12.2025)</option>
                        <option>18 (29.12.2025 - 4.1.2026)</option>
                        <option>19 (5.1.2026 - 11.1.2026)</option>
                        <option>20 (12.1.2026 - 18.1.2026)</option>
                        <option>21 (19.1.2026 - 25.1.2026)</option>
                    </select>
                    <div className="orar">
                        <table>
                            <tr>
                                <th className="color-erde"></th>
                                <th className="color-erde">1</th>
                                <th className="color-erde">2</th>
                                <th className="color-erde">3</th>
                                <th className="color-erde">4</th>
                                <th className="color-erde">5</th>
                                <th className="color-erde">6</th>
                                <th className="color-erde">7</th>
                            </tr>
                            <tr>
                                <td className="color-erde">L - 10</td>
                                <td className="A center-text"></td>
                                <td className="A center-text"></td>
                                <td className="A center-text ">R</td>
                                <td className="A center-text ">P</td>
                                <td className="A center-text ">P</td>
                                <td className="A center-text ">P</td>
                                <td className="A center-text ">P</td>
                            </tr>
                            <tr>
                                <th className="A">Ma - 11</th>
                                <td className="A"></td>
                                <td className="A">L</td>
                                <td className="A">L</td>
                                <td className="A">S</td>
                                <td className="A"></td>
                                <td className="A"></td>
                                <td className="A"></td>
                            </tr>
                            <tr>
                                <th className="A">Mi - 12</th>
                                <td className="A"></td>
                                <td className="A">L</td>
                                <td className="A"></td>
                                <td className="A">P</td>
                                <td className="A"></td>
                                <td className="A"></td>
                                <td className="A"></td>
                            </tr>
                            <tr>
                                <th className="A">J - 13</th>
                                <td className="A">S</td>
                                <td className="A">S</td>
                                <td className="S"> P</td>
                                <td className="A">L</td>
                                <td className="A">P</td>
                                <td className="A"></td>
                                <td className="A"></td>
                            </tr>
                            <tr>
                                <th className="A">V - 14</th>
                                <td className="A">P</td>
                                <td className="A">P</td>
                                <td className="A">L</td>
                                <td className="A">L</td>
                                <td className="A"></td>
                                <td className="A"></td>
                                <td className="A"></td>
                            </tr>
                        </table>

                    </div>
                    <div className="legend">
                    <p className="legenda-item text">P - Prelegere</p>
                    <p className="legenda-item text">S - Seminar</p>
                    <p className="legenda-item text">L - Laborator</p>
                    <p className="legenda-item text">PC - Proiect de Curs</p>
                    <p className="legenda-item text">EP - Evaluare periodică</p>
                    <p className="legenda-item text">C - Consultație</p>
                    <p className="legenda-item text">E - Examinare</p>
                    <p className="legenda-item text">R - Reexaminare</p>
                    <p className="legenda-item text">SP - Seminar prealabil</p>
                    <p className="legenda-item text">ST - Seminar de totalizare</p>
                </div>
                    <div className="button-group">
                        <button className="btn active">Descarcă orar</button>
                        <button className="btn active">Examene</button>
                        <button className="btn active">Planificare</button>
                    </div>
                    <div  className="services">Serviciul este inactiv între ore
                        23:00 și 3:00
                    </div>
                </div>

                <div className="container right">
                    <img
                        src={logoUsarb}
                        alt="Universitatea Alecu Russo"
                        className="university-header"
                    />
                    <h3 className="title">
                        UNIVERSITATEA DE STAT „ALECU RUSSO” DIN BĂLȚI
                    </h3>

                    <table className="table2 center-text center">
                        <tr>
                            <th>8:00<br/>9:30</th>
                            <td>
                                <b>Controlul și asigurarea calității</b><br/>
                                Prelegeri<br/>gr. 209D<br/>aud. 501S
                            </td>
                        </tr>
                        <tr>
                            <th>9:45<br/>11:15</th>
                            <td>
                                <b>Exploatarea și întreținerea utilajului tehnologic industrial</b><br/>
                                Prelegeri<br/>gr. 209D<br/>aud. 501S
                            </td>
                        </tr>
                        <tr>
                            <th>11:30<br/>13:00</th>
                            <td>
                                <b>Exploatarea și întreținerea utilajului tehnologic industrial</b><br/>
                                Prelegeri<br/>gr. 209D<br/>aud. 501S
                            </td>
                        </tr>
                        <tr>
                            <th>13:15<br/>14:45</th>
                            <td>
                                <b>Tehnologia materialelor I</b><br/>
                                Prelegeri<br/>gr. IM21R<br/>aud. 507
                            </td>
                        </tr>
                        <tr>
                            <th>15:00<br/>16:30</th>
                            <td>
                                <b>Tehnologia materialelor I</b><br/>
                                Prelegeri<br/>gr. IM21R<br/>aud. 507
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Sait;
