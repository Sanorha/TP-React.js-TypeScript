export interface Inscription {
    prenom: string;
    email: string;
    motDePasse: string;
    confirmation: string;
    cgv: boolean;
}

export const valeursInitiales: Inscription = {     
    prenom: "",
    email: "",
    motDePasse: "",
    confirmation: "",
    cgv: false,  
};

export type Erreurs = Partial<Record<keyof Inscription, string>>;

export function valider(donnees: Inscription): Erreurs {
    const erreurs: Erreurs = {};

    if (donnees.prenom.trim().length < 2) {
        erreurs.prenom = "au moins 2 caractères, espaces de bord ignorés"
    }
    
    if (!donnees.email.includes("@")) {
        erreurs.email = "format xxx@yyy.zz"
    }

    if (donnees.motDePasse.length < 8) {
        erreurs.motDePasse = "8 caractères minimum"
    }

    if (donnees.confirmation !== donnees.motDePasse) {
        erreurs.confirmation = "Dois être identique au motDePasse"
    }

    if (!donnees.cgv) {
        erreurs.cgv = "La CVG dois être lu"
    }

    return erreurs;
 }