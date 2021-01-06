import React from "react";
import './Parainage.css'

function Parrainage() {
    return(
        <div className="container__parrainage">
            <div className="container__top">
                <div className="menu__list">
                    <div className="first__menu">
                        <div>Mes informations personnelles</div>
                    </div>
                    <div className="menu">Mes informations de virement</div>
                    <div className="menu">Mon bateau</div>
                    <div className="menu">Mes emplacements</div>
                    <div className="menu">Mes demandes</div>
                    <div className="menu">Mes messages</div>
                    <div className="last__menu">Mes parrainages</div>
                </div>
                <div className="proposition">
                    <h2>Mes parrainages</h2>
                    <div className="container__box__gratuit">
                        <div className="titre">Vous aimez le BoatOn Book ? Recommandez-le !</div>
                        <div className="row">
                            <div className="box__gratuit">
                                <div className="bold">3 mois Gratuits<br/> pour vous</div>
                                <div className="text">à chaque filleul s'abonnant*</div>
                            </div>
                            <div className="separator"/>
                            <div className="box__gratuit">
                                <div className="bold">3 mois Gratuits<br/> pour votre filleul</div>
                                <div className="text">dès qu'il s'abonne</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container__buttons">
                <div className="button">
                    <div className={"icon"}>
                        <i className="far fa-comments"/>
                    </div>
                    <div className="text"> J'envoie un SMS</div>
                </div>
                <div className="button">
                    <div className={"icon"}>
                        <i className="far fa-envelope"/>
                    </div>
                    <div className="text">J'envoie un email</div>
                </div>
                <div className="button">
                    <div className={"icon"}>
                        <i className="fab fa-facebook-f"/>
                    </div>
                    <div className="text">Je partage l'offre sur Facebook</div>
                </div>
            </div>
            <div className="container__list">
                <h2>Liste de mes parrainages</h2>
                <div className="tableau__header">
                    <div>Date</div>
                    <div>Filleul</div>
                    <div>Envoi</div>
                    <div>Statut</div>
                    <div>Action</div>
                </div>
                <div className="tableau">
                    <div className="first__line">
                        <div className="date">
                            <div className="bold">6 mai</div>
                            <div>2020</div>
                        </div>
                        <div className="bold">[Prénom nom]</div>
                        <div className="bold">Par SMS / email</div>
                        <div className="status">
                            <div>En attente/</div>
                            <div className={"validate"}>Validée/</div>
                            <div className={"expired"}>Expirée</div>
                        </div>
                        <div className="button">Renvoyer</div>
                    </div>
                    <div className="line__white">
                        <div className="bold">5 mai</div>
                        <div>2020</div>
                    </div>
                    <div className="line__grey">
                        <div className="bold"> 22 avr.</div>
                        <div>2020</div>
                    </div>
                    <div className="line__white">
                        <div className="bold">15 avr.</div>
                        <div>2020</div>
                    </div>
                </div>
            </div>
            <div className="container__recommandation">
                <div className="box">
                    <div className="bold">+ 80%</div>
                    <div className="recommandation__text">des utilisateurs <br/>recommandent BoatOn </div>
                </div>
                <div className={"text"}>*A noter : vous pouvez parrainer juqsu'à 5 filleuls sur cette page. Si vous souhaitez en parrainer
                    davantage, n'hésitez pas à nous envoyer un petit mot à paul@boaton.fr !</div>
            </div>
        </div>
    )
}

export {Parrainage}