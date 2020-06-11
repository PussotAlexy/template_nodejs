var express = require('express');
var router = express.Router();

var config = require('../api/config/srd');

//ZONE_AFF
router.get('/zoneAff/listeParCodeZone/:scope/:token/:codeZone', config.getZoneAffListeParCodeZone);
router.get('/zoneAff/listeParCodeZone/:scope/:token', config.needAuth);
router.get('/zoneAff/listeParCodeZone/:scope', config.needAuth);
router.get('/zoneAff/listeParCodeZone/', config.needAuth);

router.get('/zoneAff/listeParRefArt/:scope/:token/:refArt', config.getZoneAffListeParRefArt);
router.get('/zoneAff/listeParRefArt/:scope/:token', config.needAuth);
router.get('/zoneAff/listeParRefArt/:scope', config.needAuth);
router.get('/zoneAff/listeParRefArt/', config.needAuth);

router.get('/zoneAff/listeParRefArtEQ/:scope/:token/:refArt', config.getZoneAffListeParRefArtEQ);
router.get('/zoneAff/listeParRefArtEQ/:scope/:token', config.needAuth);
router.get('/zoneAff/listeParRefArtEQ/:scope', config.needAuth);
router.get('/zoneAff/listeParRefArtEQ/', config.needAuth);

router.get('/zoneAff/liste/:scope/:token', config.getZoneAffListe);
router.get('/zoneAff/liste/:scope', config.needAuth);
router.get('/zoneAff/liste/', config.needAuth);

router.get('/zoneAff/listeCodeZoneRefArt/:scope/:token', config.getZoneAffListeCodeZoneRefArt);
router.get('/zoneAff/listeCodeZoneRefArt/:scope', config.needAuth);
router.get('/zoneAff/listeCodeZoneRefArt/', config.needAuth);

router.get('/zoneAff/listeRefArtParRefArtEQ/:scope/:token/:refArt', config.getZoneAffListeRefArtParRefArtEQ);
router.get('/zoneAff/listeRefArtParRefArtEQ/:scope/:token', config.needAuth);
router.get('/zoneAff/listeRefArtParRefArtEQ/:scope', config.needAuth);
router.get('/zoneAff/listeRefArtParRefArtEQ/', config.needAuth);

router.get('/zoneAff/listeCodeZoneParRefArtEQ/:scope/:token/:refArt', config.getZoneAffListeCodeZoneParRefArtEQ);
router.get('/zoneAff/listeCodeZoneParRefArtEQ/:scope/:token', config.needAuth);
router.get('/zoneAff/listeCodeZoneParRefArtEQ/:scope', config.needAuth);
router.get('/zoneAff/listeCodeZoneParRefArtEQ/', config.needAuth);

router.get('/zoneAff/listeCodeZoneQuantiteParRefArtEQ/:scope/:token/:refArt', config.getZoneAffListeCodeZoneQuantiteParRefArtEQ);
router.get('/zoneAff/listeCodeZoneQuantiteParRefArtEQ/:scope/:token', config.needAuth);
router.get('/zoneAff/listeCodeZoneQuantiteParRefArtEQ/:scope', config.needAuth);
router.get('/zoneAff/listeCodeZoneQuantiteParRefArtEQ/', config.needAuth);

router.get('/zoneAff/', config.needAuth);




// OFFRE
router.get('/offre/listeCodeOffreParCodeOffreDIFF/:scope/:token/:codeOffre', config.getOffreListeCodeOffreParCodeOffreDIFF);
router.get('/offre/listeCodeOffreParCodeOffreDIFF/:scope/:token', config.needAuth);
router.get('/offre/listeCodeOffreParCodeOffreDIFF/:scope', config.needAuth);
router.get('/offre/listeCodeOffreParCodeOffreDIFF/', config.needAuth);

router.get('/offre/listeLibelleParCodeOffreCodeEnsgEQ/:scope/:token/:codeOffre/:codeEnsg', config.getOffreListeLibelleParCodeOffreCodeEnsgEQ);
router.get('/offre/listeLibelleParCodeOffreCodeEnsgEQ/:scope/:token/:codeOffre', config.needAuth);
router.get('/offre/listeLibelleParCodeOffreCodeEnsgEQ/:scope/:token', config.needAuth);
router.get('/offre/listeLibelleParCodeOffreCodeEnsgEQ/:scope', config.needAuth);
router.get('/offre/listeLibelleParCodeOffreCodeEnsgEQ/', config.needAuth);

router.get('/offre/listeCodeOffreParCodeOffreCodeEnsgEQ/:scope/:token/:codeOffre/:codeEnsg', config.getOffreListeCodeOffreParCodeOffreCodeEnsgEQ);
router.get('/offre/listeCodeOffreParCodeOffreCodeEnsgEQ/:scope/:token/:codeOffre', config.needAuth);
router.get('/offre/listeCodeOffreParCodeOffreCodeEnsgEQ/:scope/:token', config.needAuth);
router.get('/offre/listeCodeOffreParCodeOffreCodeEnsgEQ/:scope', config.needAuth);
router.get('/offre/listeCodeOffreParCodeOffreCodeEnsgEQ/', config.needAuth);

router.get('/offre/', config.needAuth);




// PRIXVENT
router.get('/prixVent/listePrixParCodeOffreRefArtEQ/:scope/:token/:codeOffre/:refArt', config.getPrixVentListePrixParCodeOffreRefArtEQ);
router.get('/prixVent/listePrixParCodeOffreRefArtEQ/:scope/:token/:codeOffre', config.needAuth);
router.get('/prixVent/listePrixParCodeOffreRefArtEQ/:scope/:token', config.needAuth);
router.get('/prixVent/listePrixParCodeOffreRefArtEQ/:scope', config.needAuth);
router.get('/prixVent/listePrixParCodeOffreRefArtEQ/', config.needAuth);

// NATURABUY
router.get('/prixVent/listeParCodeEnsgCodeOffre/:scope/:token', config.getPrixVentListeParCodeEnsgCodeOffre);
router.get('/prixVent/listeParCodeEnsgCodeOffre/:scope', config.needAuth);
router.get('/prixVent/listeParCodeEnsgCodeOffre/', config.needAuth);

router.get('/prixVent/listeParCodeEnsgCodeOffreRefArt/:scope/:token/:refArt', config.getPrixVentListeParCodeEnsgCodeOffreRefArt);
router.get('/prixVent/listeParCodeEnsgCodeOffreRefArt/:scope/:token', config.needAuth);
router.get('/prixVent/listeParCodeEnsgCodeOffreRefArt/:scope', config.needAuth);
router.get('/prixVent/listeParCodeEnsgCodeOffreRefArt/', config.needAuth);

router.get('/prixVent/', config.needAuth);




// CMDE_DET
router.get('/cmdeDet/listeParRefArt/:scope/:token/:refArt', config.getCmdeDetListeParRefArt);
router.get('/cmdeDet/listeParRefArt/:scope/:token', config.needAuth);
router.get('/cmdeDet/listeParRefArt/:scope', config.needAuth);
router.get('/cmdeDet/listeParRefArt/', config.needAuth);

router.get('/cmdeDet/', config.needAuth);




// REASSORT (fonctionnel)
router.get('/reassort/entreDateDebutDateFin/:scope/:token/:dateDebut/:dateFin', config.getReassortEntreDateDebutDateFin);
router.get('/reassort/entreDateDebutDateFin/:scope/:token/:dateDebut', config.needAuth);
router.get('/reassort/entreDateDebutDateFin/:scope/:token', config.needAuth);
router.get('/reassort/entreDateDebutDateFin/:scope', config.needAuth);
router.get('/reassort/entreDateDebutDateFin/', config.needAuth);

router.get('/reassort/parRefArt/:scope/:token/:refArt', config.getReassortParRefArt);
router.get('/reassort/parRefArt/:scope/:token', config.needAuth);
router.get('/reassort/parRefArt/:scope', config.needAuth);
router.get('/reassort/parRefArt/', config.needAuth);

router.get('/reassort/', config.needAuth);

// commun
router.get('/', config.needAuth);




// CMDE (table + naturabuy)
router.get('/cmde/listeNumeroParDossierEQ/:scope/:token/:dossier', config.getCmdeListeNumeroParDossierEQ);
router.get('/cmde/listeNumeroParDossierEQ/:scope/:token/', config.needAuth);
router.get('/cmde/listeNumeroParDossierEQ/:scope', config.needAuth);
router.get('/cmde/listeNumeroParDossierEQ/', config.needAuth);

router.get('/cmde/listeSrdOutFactures/:scope/:token/', config.getCmdeListeSrdOutFactures);
router.get('/cmde/listeSrdOutFactures/:scope', config.needAuth);
router.get('/cmde/listeSrdOutFactures/', config.needAuth);

router.get('/cmde/', config.needAuth);




// ENTREPOP ETIQUETTE (fonctionnel)
router.get('/entrepotEtiquette/entreAdresseDebutAdresseFin/:scope/:token/:adresseDebut/:adresseFin', config.getEntrepotEtiquetteEntreAdresseDebutAdresseFin);
router.get('/entrepotEtiquette/entreAdresseDebutAdresseFin/:scope/:token/:adresseDebut', config.needAuth);
router.get('/entrepotEtiquette/entreAdresseDebutAdresseFin/:scope/:token', config.needAuth);
router.get('/entrepotEtiquette/entreAdresseDebutAdresseFin/:scope', config.needAuth);
router.get('/entrepotEtiquette/entreAdresseDebutAdresseFin/', config.needAuth);

router.get('/cmde/', config.needAuth);


// ARTSTOCK
// NATURABUY
router.get('/artStock/listeKitParRefArt/:scope/:token/:refArt', config.getArtStockListeKitParRefArt);
router.get('/artStock/listeKitParRefArt/:scope/:token', config.needAuth);
router.get('/artStock/listeKitParRefArt/:scope', config.needAuth);
router.get('/artStock/listeKitParRefArt/', config.needAuth);

router.get('/artStock/listeStkPhysPParRefArt/:scope/:token/:refArt', config.getArtStockListeStkPhysPParRefArt);
router.get('/artStock/listeStkPhysPParRefArt/:scope/:token', config.needAuth);
router.get('/artStock/listeStkPhysPParRefArt/:scope', config.needAuth);
router.get('/artStock/listeStkPhysPParRefArt/', config.needAuth);





// KIT
// NATURABUY
router.get('/kit/listeRefArtParRefArtKit/:scope/:token/:refArtKit', config.getKitListeRefArtParRefArtKit);
router.get('/kit/listeRefArtParRefArtKit/:scope/:token', config.needAuth);
router.get('/kit/listeRefArtParRefArtKit/:scope', config.needAuth);
router.get('/kit/listeRefArtParRefArtKit/', config.needAuth);





// CMDE_COL
// NATURABUY
router.get('/cmdeCol/listeParCodeEnsgNumeroFac/:scope/:token/:numeroFac', config.getCmdeColListeParCodeEnsgNumeroFac);
router.get('/cmdeCol/listeParCodeEnsgNumeroFac/:scope/:token', config.needAuth);
router.get('/cmdeCol/listeParCodeEnsgNumeroFac/:scope', config.needAuth);
router.get('/cmdeCol/listeParCodeEnsgNumeroFac/', config.needAuth);





// CALCUL DATE DISPONIBILITE (fonctionnel)
router.get('/calculDateDisponibilite/liste/:scope/:token', config.getCalculDateDisponibiliteListe);
router.get('/calculDateDisponibilite/liste/:scope', config.needAuth);
router.get('/calculDateDisponibilite/liste/', config.needAuth);




// AJOUT REFERENCE (fonctionnel)
router.get('/ajoutReference/listeEpuiseCodeZoneParRefArt/:scope/:token/:refArt', config.getAjoutReferenceListeEpuiseCodeZoneParRefArt);
router.get('/ajoutReference/listeEpuiseCodeZoneParRefArt/:scope/:token', config.needAuth);
router.get('/ajoutReference/listeEpuiseCodeZoneParRefArt/:scope', config.needAuth);
router.get('/ajoutReference/listeEpuiseCodeZoneParRefArt/', config.needAuth);




// EXPORT REF STOCKAGE PALETTE VENTES (fonctionnel)
router.get('/exportRefStockagePaletteVentes/listeQteDemDatSaisieParRefArt/:scope/:token/:refArt', config.getExportRefStockagePaletteVentesListeQteDemDatSaisieParRefArt);
router.get('/exportRefStockagePaletteVentes/listeQteDemDatSaisieParRefArt/:scope/:token', config.needAuth);
router.get('/exportRefStockagePaletteVentes/listeQteDemDatSaisieParRefArt/:scope', config.needAuth);
router.get('/exportRefStockagePaletteVentes/listeQteDemDatSaisieParRefArt/', config.needAuth);



// NATURABUY - SRD OUT COLIS (fonctionnel)
router.get('/naturabuy/listeSrdOutColis/:scope/:token', config.getNaturabuyListeSrdOutColis);
router.get('/naturabuy/listeSrdOutColis/:scope', config.needAuth);
router.get('/naturabuy/listeSrdOutColis/', config.needAuth);



// VENTES JOUR UPDATE (fonctionnel)
router.get('/ventesJourUpdate/listeParRefArt/:scope/:token/:refArt', config.getVentesJourUpdateListeParRefArt);
router.get('/ventesJourUpdate/listeParRefArt/:scope/:token', config.needAuth);
router.get('/ventesJourUpdate/listeParRefArt/:scope', config.needAuth);
router.get('/ventesJourUpdate/listeParRefArt/', config.needAuth);

router.get('/ventesJourUpdate/listeParDatSaisie/:scope/:token/:datSaisie', config.getVentesJourUpdateListeParDatSaisie);
router.get('/ventesJourUpdate/listeParDatSaisie/:scope/:token', config.needAuth);
router.get('/ventesJourUpdate/listeParDatSaisie/:scope', config.needAuth);
router.get('/ventesJourUpdate/listeParDatSaisie/', config.needAuth);



// REFERENTIEL - DISPONIBILITE (fonctionnel)
router.get('/referentielDisponibilite/listeParRefArtKit/:scope/:token/:refArtKit', config.getReferentielDisponibiliteParRefArtKit);
router.get('/referentielDisponibilite/listeParRefArtKit/:scope/:token', config.needAuth);
router.get('/referentielDisponibilite/listeParRefArtKit/:scope', config.needAuth);
router.get('/referentielDisponibilite/listeParRefArtKit/', config.needAuth);

router.get('/referentielDisponibilite/liste/:scope/:token', config.getReferentielDisponibilite);
router.get('/referentielDisponibilite/liste/:scope', config.needAuth);
router.get('/referentielDisponibilite/liste/', config.needAuth);



// UPDATE FOURNISSEUR FROM SRD
router.get('/updateFournisseurFromSrd/listeFournis/:scope/:token', config.getUpdateFournisseurFromSrdListeFournis);
router.get('/updateFournisseurFromSrd/listeFournis/:scope', config.needAuth);
router.get('/updateFournisseurFromSrd/listeFournis/', config.needAuth);

router.get('/updateFournisseurFromSrd/listeFartParPrincipal/:scope/:token', config.getUpdateFournisseurFromSrdListeFartParPrincipal);
router.get('/updateFournisseurFromSrd/listeFartParPrincipal/:scope', config.needAuth);
router.get('/updateFournisseurFromSrd/listeFartParPrincipal/', config.needAuth);




// INSERT HISTORIQUE STOCK DUCATILLON (fonctionnel)
router.get('/insertHistoriqueStockDucatillon/listeParRefArtKit/:scope/:token/:refArtKit', config.getInsertHistoriqueStockDucatillonParRefArtKit);
router.get('/insertHistoriqueStockDucatillon/listeParRefArtKit/:scope/:token', config.needAuth);
router.get('/insertHistoriqueStockDucatillon/listeParRefArtKit/:scope', config.needAuth);
router.get('/insertHistoriqueStockDucatillon/listeParRefArtKit/', config.needAuth);

router.get('/insertHistoriqueStockDucatillon/liste/:scope/:token', config.getInsertHistoriqueStockDucatillon);
router.get('/insertHistoriqueStockDucatillon/liste/:scope', config.needAuth);
router.get('/insertHistoriqueStockDucatillon/liste/', config.needAuth);





// CALCUL DATE DISPONIBILITE DUCATILLON (fonctionnel)
router.get('/calculDateDisponibiliteDucatillon/listeParRefArtKit/:scope/:token/:refArtKit', config.getCalculDateDisponibiliteDucatillonListeParRefArtKit);
router.get('/calculDateDisponibiliteDucatillon/listeParRefArtKit/:scope/:token', config.needAuth);
router.get('/calculDateDisponibiliteDucatillon/listeParRefArtKit/:scope', config.needAuth);
router.get('/calculDateDisponibiliteDucatillon/listeParRefArtKit/', config.needAuth);

router.get('/calculDateDisponibiliteDucatillon/listeParRefArt/:scope/:token/:refArt', config.getCalculDateDisponibiliteDucatillonListeParRefArt);
router.get('/calculDateDisponibiliteDucatillon/listeParRefArt/:scope/:token', config.needAuth);
router.get('/calculDateDisponibiliteDucatillon/listeParRefArt/:scope', config.needAuth);
router.get('/calculDateDisponibiliteDucatillon/listeParRefArt/', config.needAuth);

router.get('/calculDateDisponibiliteDucatillon/liste/:scope/:token', config.getCalculDateDisponibiliteDucatillonListe);
router.get('/calculDateDisponibiliteDucatillon/liste/:scope', config.needAuth);
router.get('/calculDateDisponibiliteDucatillon/liste/', config.needAuth);





//  MISE A JOUR REFERENTIEL INTERNE (fonctionnel + normal)
router.get('/miseAJourReferentielInterne/listeParRefArtKit/:scope/:token/:refArtKit', config.getCalculDateDisponibiliteDucatillonListeParRefArtKit); // même requête utilisée, donc utlisation de la même function
router.get('/miseAJourReferentielInterne/listeParRefArtKit/:scope/:token', config.needAuth);
router.get('/miseAJourReferentielInterne/listeParRefArtKit/:scope', config.needAuth);
router.get('/miseAJourReferentielInterne/listeParRefArtKit/', config.needAuth);

// commun
router.get('/', config.needAuth);

module.exports = router;
