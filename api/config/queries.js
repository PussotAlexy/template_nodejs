
// ********************************************************************************************************************
// DEBUT : Puppies
var getAllPuppies = ' select * from pups ';
var getSinglePuppy = ' select * from pups where id = $1 ';
var createPuppy = ' insert into pups(name, breed, age, sex) values(${name}, ${breed}, ${age}, ${sex}) ';
var updatePuppy = 'update pups set name=$1, breed=$2, age=$3, sex=$4 where id=$5';
var removePuppy = 'delete from pups where id = $1';


function qrGetAllPuppies(){ return getAllPuppies;}
function qrGetSinglePuppy(){ return getSinglePuppy;}
function qrCreatePuppy(){ return createPuppy;}
function qrUpdatePuppy(){ return updatePuppy;}
function qrRemovePuppy(){ return removePuppy;}
// FIN : Puppies
// ********************************************************************************************************************


// ********************************************************************************************************************
// DEBUT : Srd

// ZONE_AFF
var getListeZoneAffParCodeZone = ' SELECT * FROM ZONE_AFF WHERE codezone LIKE \'%$1:value%\' ORDER BY codezone,refart';
var getListeZoneAffParRefArt = ' SELECT * FROM ZONE_AFF WHERE refart LIKE \'%$1:value%\' ORDER BY refart,codezone';
var getListeZoneAffParRefArtEQ = ' SELECT * FROM ZONE_AFF WHERE refart =$1 ORDER BY refart,codezone';
var getListeZoneAff = ' SELECT * FROM ZONE_AFF';
var getListeCodeZoneRefArtZoneAff = ' SELECT codezone,refart FROM ZONE_AFF';
var getListeRefArtZoneAffParRefArtEQ = ' SELECT refart FROM ZONE_AFF WHERE refart =$1 ';
var getListeCodeZoneZoneAffParRefArtEQ = ' SELECT codezone FROM ZONE_AFF WHERE refart =$1 ';
var getListeCodeZoneQuantiteZoneAffParRefArtEQ = ' SELECT codezone,quantite FROM ZONE_AFF WHERE refart =$1 ';

function qrGetListeZoneAffParCodeZone(){ return getListeZoneAffParCodeZone;}
function qrGetListeZoneAffParRefArt(){ return getListeZoneAffParRefArt;}
function qrGetListeZoneAffParRefArtEQ(){ return getListeZoneAffParRefArtEQ;}
function qrGetListeZoneAff(){ return getListeZoneAff;}
function qrGetListeCodeZoneRefArtZoneAff(){ return getListeCodeZoneRefArtZoneAff;}
function qrGetListeRefArtZoneAffParRefArtEQ(){ return getListeRefArtZoneAffParRefArtEQ;}
function qrGetListeCodeZoneZoneAffParRefArtEQ(){ return getListeCodeZoneZoneAffParRefArtEQ;}
function qrGetListeCodeZoneQuantiteZoneAffParRefArtEQ(){ return getListeCodeZoneQuantiteZoneAffParRefArtEQ;}




// OFFRE
var getListeCodeOffreOffreParCodeOffreDIFF = ' SELECT codeoffre FROM offre WHERE codeensg=\'1\' AND (codeoffre LIKE \'7%\' OR codeoffre=\'WWW\') AND codeoffre!= $1 ORDER BY codeoffre ASC';
var getListeLibelleOffreParCodeOffreCodeEnsgEQ = ' SELECT libelle FROM offre WHERE codeensg=$2 AND codeoffre=$1';
var getListeCodeOffreOffreParCodeOffreCodeEnsgEQ = ' SELECT codeoffre FROM offre WHERE codeensg=$2 AND codeoffre=$1';

function qrGetListeCodeOffreOffreParCodeOffreDIFF(){ return getListeCodeOffreOffreParCodeOffreDIFF;}
function qrGetListeLibelleOffreParCodeOffreCodeEnsgEQ(){ return getListeLibelleOffreParCodeOffreCodeEnsgEQ;}
function qrGetListeCodeOffreOffreParCodeOffreCodeEnsgEQ(){ return getListeCodeOffreOffreParCodeOffreCodeEnsgEQ;}




// PRIXVENT
var getListePrixPrixVentParCodeOffreRefArtEQ = ' SELECT prix FROM prixvent WHERE codeoffre=$1 AND codeensg=\'1\' AND refart=$2';

function qrGetListePrixPrixVentParCodeOffreRefArtEQ(){ return getListePrixPrixVentParCodeOffreRefArtEQ;}




// CMDE_DET
var getListeCmdeDetParRefArt = ' SELECT * FROM cmde_det WHERE refart LIKE \'%$1:value%\' AND rectype=\'FAC\' ORDER BY codeoffre';

function qrGetListeCmdeDetParRefArt(){ return getListeCmdeDetParRefArt;}




// REASSORT (fonctionnel)
var getReassortEntreDateDebutDateFin = ' SELECT cmde_det.refart,cmde_det.qte_dem'
+ ' FROM cmde_det AS cmde_det'
+ ' JOIN CMDE AS cmde ON (cmde.codeensg=cmde_det.codeensg AND cmde.numero=cmde_det.numero)'
+ ' WHERE cmde.rectype=\'FAC\' AND cmde_det.rectype=\'FAC\' AND cmde.dat_saisie >= $1 AND cmde.dat_saisie<= $2 AND cmde.stade=\'T\'';
var getReassortParRefArt = ' SELECT'
+ ' refs.design,'
+ ' zone.codezone,'
+ ' refs.stk_phys_p AS stock_picking,'
+ ' refs.stk_phys_r AS stock_reserve,'
+ ' refs.stk_reser AS reserve,'
+ ' refs.stk_diff AS stock_differe'
+ ' FROM ZONE_AFF AS zone'
+ ' JOIN artstock AS refs ON refs.refart=zone.refart'
+ ' WHERE zone.refart LIKE \'%$1:value%\'';


function qrGetReassortEntreDateDebutDateFin(){ return getReassortEntreDateDebutDateFin;}
function qrGetReassortParRefArt(){ return getReassortParRefArt;}




// CMDE
var getListeNumeroCmdeParDossierEQ = ' SELECT numero FROM cmde WHERE codeensg=\'1\' AND rectype=\'FAC\' AND dossier=$1';

function qrgetListeNumeroCmdeParDossierEQ(){ return getListeNumeroCmdeParDossierEQ;}





// ENTREPOT ETIQUETTE (fonctionnel)
var getEntrepotEtiquetteEntreAdresseDebutAdresseFin = 'SELECT zone.codezone,zone.refart,stock.design '
+ ' FROM zone_aff zone LEFT JOIN artstock AS stock ON (stock.refart=zone.refart) '
+ ' WHERE zone.codezone >= $1 AND zone.codezone <= $2 '
+ ' ORDER BY zone.codezone ';

function qrGetEntrepotEtiquetteEntreAdresseDebutAdresseFin(){ return getEntrepotEtiquetteEntreAdresseDebutAdresseFin;}





// NATURABUY
var getListePrixVentParCodeEnsgCodeOffre = 'SELECT codemodl,refart,prix FROM prixvent WHERE codeensg=\'1\' AND codeoffre=\'WNB\'';
var getListePrixVentParCodeEnsgCodeOffreRefArt = 'SELECT codeoffre,refart,prix FROM prixvent WHERE codeensg=\'1\' AND refart= $1 AND codeoffre != \'31\' AND codeoffre LIKE \'6%\' ORDER BY prix DESC LIMIT 1';
var getListeKitArtStockParRefArt = 'SELECT kit FROM artstock WHERE refart= $1';
var getListeRefArtKitParRefArtKit = 'SELECT refart FROM kit WHERE refart_kit= $1';
var getListeStkPhysPARtStockParRefArt = 'SELECT stk_phys_p FROM artstock WHERE refart= $1';
var getListeCmdeColparCodeEnsgNumeroFac = 'SELECT codeexped,numero_fac,reference FROM cmde_col WHERE codeensg=\'1\' AND numero_fac= $1';
var getListeSrdOutFacturesCmde = 'SELECT codeensg, numero, numero_ori, codeadrm, dossier, codeorig, dat_saisie, dat_modif, stade  FROM CMDE WHERE rectype=\'FAC\' AND dat_saisie > NOW()::DATE-EXTRACT(DOW FROM NOW())::INTEGER-8';
var getListeSrdOutColis = 'SELECT colis.codeensg, colis.numero_cde, colis.numero_fac, colis.dat_modif, mode_exped.codetrans, colis.reference FROM CMDE_COL AS colis JOIN MODEXPED AS mode_exped ON (colis.codeexped=mode_exped.codeexped AND colis.codeensg=mode_exped.codeensg)  WHERE dat_exped > NOW()::DATE-EXTRACT(DOW FROM NOW())::INTEGER-4';

function qrGetListePrixVentParCodeEnsgCodeOffre(){ return getListePrixVentParCodeEnsgCodeOffre;}
function qrGetListePrixVentParCodeEnsgCodeOffreRefArt(){ return getListePrixVentParCodeEnsgCodeOffreRefArt;}
function qrGetListeKitArtStockParRefArt(){ return getListeKitArtStockParRefArt;}
function qrGetListeRefArtKitParRefArtKit(){ return getListeRefArtKitParRefArtKit;}
function qrGetListeStkPhysPARtStockParRefArt(){ return getListeStkPhysPARtStockParRefArt;}
function qrGetListeCmdeColparCodeEnsgNumeroFac(){ return getListeCmdeColparCodeEnsgNumeroFac;}
function qrGetListeSrdOutFacturesCmde(){ return getListeSrdOutFacturesCmde;}
function qrGetListeSrdOutColis(){ return getListeSrdOutColis;}






// CALCUL DATE DISPONIBILITE (fonctionnel)
var getListeCalculDateDisponibilite = 'SELECT articles.refart,'
+ ' articles.design AS designation_article, '
+ ' fcmd_det.qte_dem, '
+ ' fcmd_det.qte_liv, '
+ ' fcmd_det.dat_estim as date_estime_det, '
+ ' fcmd.dat_estim as date_estimee_cmd, '
+ ' fcmd.dat_saisie, '
+ ' fcmd.numero, '
+ ' fcmd.codefour, '
+ ' articles.stk_phys_p AS stock_picking, '
+ ' articles.stk_phys_r AS stock_reserve, '
+ ' articles.stk_reser AS reserve, '
+ ' articles.stk_diff AS stock_differe '
+ ' FROM fcmd_det as fcmd_det '
+ ' INNER JOIN fcmd as fcmd ON fcmd.numero=fcmd_det.numero '
+ ' INNER JOIN artstock AS articles ON articles.refart=fcmd_det.refart '
+ ' WHERE  fcmd_det.soldee=false AND fcmd.stade=\'T\' '
+ ' ORDER BY date_estime_det,fcmd.dat_estim ';

function qrGetListeCalculDateDisponibilite(){ return getListeCalculDateDisponibilite;}







// AJOUT REFERENCE (fonctionnel)
var getListeAjoutReference = 'SELECT stock.epuise,zone_aff.codezone FROM artstock as stock LEFT JOIN zone_aff ON stock.refart=zone_aff.refart WHERE stock.refart= $1';

function qrGetListeAjoutReference(){ return getListeAjoutReference;}





// EXPORT REF STOCKAGE PALETTE VENTES (fonctionnel)
var getListeExportRefStockagePaletteVentes = 'SELECT cmde_det.qte_dem, '
+ ' cmde.dat_saisie'
+ ' FROM cmde as cmde'
+ ' LEFT JOIN cmde_det ON (cmde.codeensg=cmde_det.codeensg AND cmde.numero=cmde_det.numero AND cmde.rectype=cmde_det.rectype)'
+ ' WHERE cmde_det.refart=$1 AND cmde_det.rectype=\'FAC\' ';

function qrGetListeExportRefStockagePaletteVentes(){ return getListeExportRefStockagePaletteVentes;}






// VENTES JOUR  - UPDATE (fonctionnel)
var getListeVenteJourUpdateParDatSaisie = 'SELECT cmde_det.refart,cmde_det.qte_dem, cmde_det.qte_diff '
+ ' FROM cmde_det AS cmde_det '
+ ' JOIN CMDE AS cmde ON (cmde.codeensg=cmde_det.codeensg AND cmde.numero=cmde_det.numero) '
+ ' WHERE cmde.rectype=\'FAC\' AND cmde_det.rectype=\'FAC\' AND cmde.dat_saisie = $1';
var getListeVenteJourUpdateParRefArt = 'SELECT refs.design, '
+ ' refs.epuise, '
+ ' refs.design, '
+ ' zone.codezone, '
+ ' refs.stk_phys_p AS stock_picking,'
+ ' refs.stk_phys_r AS stock_reserve,'
+ ' refs.stk_reser AS reserve, '
+ ' refs.stk_diff AS stock_differe'
+ ' FROM ZONE_AFF AS zone'
+ ' JOIN artstock AS refs ON refs.refart=zone.refart'
+ ' WHERE zone.refart = $1';

function qrGetListeVenteJourUpdateParDatSaisie(){ return getListeVenteJourUpdateParDatSaisie;}
function qrGetListeVenteJourUpdateParRefArt(){ return getListeVenteJourUpdateParRefArt;}






// REFERENTIEL - DISPONIBILITE (fonctionnel)
var getListeReferentielDisponibilite = 'SELECT '
+ ' articles.refart AS reference_article,'
+ ' articles.design AS designation_article,'
+ ' articles.kit AS kit,'
+ ' articles.stk_phys_p AS stock_picking,'
+ ' articles.stk_phys_r AS stock_reserve,'
+ ' articles.stk_reser AS reserve,'
+ ' articles.stk_diff AS stock_differe,'
+ ' articles.stk_encde AS stock_en_commande'
+ ' FROM artstock AS articles '
+ ' ORDER BY articles.refart ';
var getListeReferentielDisponibiliteParRefArtKit = 'SELECT '
+ ' kit.quantite,'
+ ' articles.stk_phys_p AS stock_picking,'
+ ' articles.stk_phys_r AS stock_reserve,'
+ ' articles.stk_reser AS reserve,'
+ ' articles.stk_diff AS stock_differe'
+ ' FROM kit AS kit'
+ ' INNER JOIN artstock AS articles ON kit.refart=articles.refart'
+ ' WHERE kit.refart_kit= $1';

function qrGetListeReferentielDisponibilite(){ return getListeReferentielDisponibilite;}
function qrGetListeReferentielDisponibiliteParRefArtKit(){ return getListeReferentielDisponibiliteParRefArtKit;}




// UPDATE FOURNISSEUR FROM SRD
var getListeFournis = 'SELECT * FROM fournis';
var getListeFartParPrincipal = 'SELECT * FROM fart WHERE principal=\'1\'';

function qrGetListeFournis(){ return getListeFournis;}
function qrGetListeFartParPrincipal(){ return getListeFartParPrincipal;}





// INSERT HISTORIQUE STOCK DUCATILLON (fonctionnel)
var getListeInsertHistoriqueStockDucatillon = 'SELECT '
+ ' articles.refart AS reference_article,'
+ ' articles.design AS designation_article,'
+ ' articles.codemodl AS code_modele,'
+ ' articles.kit AS kit,'
+ ' articles.stk_phys_p AS stock_picking,'
+ ' articles.stk_phys_r AS stock_reserve,'
+ ' articles.stk_reser AS reserve,'
+ ' articles.stk_diff AS stock_differe,'
+ ' articles.stk_encde AS stock_en_commande,'
+ ' zone.codeentr,'
+ ' zone.codezone'
+ ' FROM artstock AS articles '
+ ' LEFT JOIN zone_aff AS zone ON articles.refart=zone.refart'
+ ' ORDER BY articles.refart';
var getListeInsertHistoriqueStockDucatillonParRefArtKit = 'SELECT '
+ ' zone.codezone, '
+ ' zone.codeentr, '
+ ' kit.quantite, '
+ ' articles.stk_phys_p AS stock_picking, '
+ ' articles.stk_phys_r AS stock_reserve, '
+ ' articles.stk_reser AS reserve, '
+ ' articles.stk_diff AS stock_differe '
+ ' FROM kit AS kit  '
+ ' INNER JOIN artstock AS articles ON kit.refart=articles.refart '
+ ' LEFT JOIN zone_aff AS zone ON kit.refart=zone.refart  '
+ ' WHERE kit.refart_kit= $1';

function qrGetListeInsertHistoriqueStockDucatillon(){ return getListeInsertHistoriqueStockDucatillon;}
function qrGetListeInsertHistoriqueStockDucatillonParRefArtKit(){ return getListeInsertHistoriqueStockDucatillonParRefArtKit;}






// CALCUL DATE DISPONIBILITE DUCATILLON (fonctionnel)
var getListeCalculDateDisponibiliteDucatillon = 'SELECT '
+ ' articles.refart, '
+ ' fcmd_det.qte_dem, '
+ ' fcmd_det.qte_liv, '
+ ' fcmd_det.dat_estim as date_estime_det, '
+ ' fcmd.dat_estim as date_estimee_cmd, '
+ ' fcmd.dat_saisie, '
+ ' articles.stk_phys_p AS stock_picking, '
+ ' articles.stk_phys_r AS stock_reserve, '
+ ' articles.stk_reser AS reserve, '
+ ' articles.stk_diff AS stock_differe '
+ ' FROM fcmd_det as fcmd_det '
+ ' INNER JOIN fcmd as fcmd ON fcmd.numero=fcmd_det.numero '
+ ' INNER JOIN artstock AS articles ON articles.refart=fcmd_det.refart '
+ ' WHERE  fcmd_det.soldee=\'0\' AND fcmd.stade=\'T\' '
+ ' ORDER BY date_estime_det,fcmd.dat_estim ';
var getListeCalculDateDisponibiliteDucatillonParRefArtKit = 'SELECT '
+ ' kit.quantite, '
+ ' kit.refart, '
+ ' articles.stk_phys_p AS stock_picking, '
+ ' articles.stk_phys_r AS stock_reserve, '
+ ' articles.stk_reser AS reserve, '
+ ' articles.stk_diff AS stock_differe '
+ ' FROM kit AS kit  '
+ ' INNER JOIN artstock AS articles ON kit.refart=articles.refart '
+ ' WHERE kit.refart_kit= $1 ';
var getListeCalculDateDisponibiliteDucatillonParRefArt = 'SELECT '
+ ' fcmd_det.qte_dem, '
+ ' fcmd_det.qte_liv, '
+ ' fcmd_det.dat_estim as date_estime_det, '
+ ' fcmd.dat_estim as date_estimee_cmd, '
+ ' fcmd.dat_saisie '
+ ' FROM fcmd_det as fcmd_det '
+ ' INNER JOIN fcmd as fcmd ON fcmd.numero=fcmd_det.numero '
+ ' WHERE  fcmd_det.soldee=\'0\' AND fcmd.stade=\'T\' AND fcmd_det.refart= $1 '
+ ' ORDER BY date_estime_det,fcmd.dat_estim ';

function qrGetListeCalculDateDisponibiliteDucatillon(){ return getListeCalculDateDisponibiliteDucatillon;}
function qrGetListeCalculDateDisponibiliteDucatillonParRefArtKit(){ return getListeCalculDateDisponibiliteDucatillonParRefArtKit;}
function qrGetListeCalculDateDisponibiliteDucatillonParRefArt(){ return getListeCalculDateDisponibiliteDucatillonParRefArt;}

// FIN : Srd
// ********************************************************************************************************************

// ********************************************************************************************************************
// DEBUT : COMMUN

//// Export de l'intégralité des requêtes
module.exports = {
	//Puppies
	getAllPuppies: qrGetAllPuppies
	,getSinglePuppy: qrGetSinglePuppy
	,createPuppy: qrCreatePuppy
	,updatePuppy: qrUpdatePuppy
	,removePuppy: qrRemovePuppy

	//Srd
	// ZoneAff
	,getListeZoneAffParCodeZone : qrGetListeZoneAffParCodeZone
	,getListeZoneAffParRefArt : qrGetListeZoneAffParRefArt
	,getListeZoneAffParRefArtEQ : qrGetListeZoneAffParRefArtEQ
	,getListeZoneAff : qrGetListeZoneAff
	,getListeCodeZoneRefArtZoneAff: qrGetListeCodeZoneRefArtZoneAff
	,getListeRefArtZoneAffParRefArtEQ : qrGetListeRefArtZoneAffParRefArtEQ
	,getListeCodeZoneZoneAffParRefArtEQ : qrGetListeCodeZoneZoneAffParRefArtEQ
	,getListeCodeZoneQuantiteZoneAffParRefArtEQ : qrGetListeCodeZoneQuantiteZoneAffParRefArtEQ

	// Offre
	,getListeCodeOffreOffreParCodeOffreDIFF: qrGetListeCodeOffreOffreParCodeOffreDIFF
	,getListeLibelleOffreParCodeOffreCodeEnsgEQ: qrGetListeLibelleOffreParCodeOffreCodeEnsgEQ
	,getListeCodeOffreOffreParCodeOffreCodeEnsgEQ: qrGetListeCodeOffreOffreParCodeOffreCodeEnsgEQ

	// PrixVent
	,getListePrixPrixVentParCodeOffreRefArtEQ: qrGetListePrixPrixVentParCodeOffreRefArtEQ

	// Cmde_Det
	,getListeCmdeDetParRefArt: qrGetListeCmdeDetParRefArt

	// Reassort (fonctionnel)
	,getReassortEntreDateDebutDateFin: qrGetReassortEntreDateDebutDateFin
	,getReassortParRefArt: qrGetReassortParRefArt

	// CMDE
	,getListeNumeroCmdeParDossierEQ: qrgetListeNumeroCmdeParDossierEQ

	// Entrepot Etiquette (fonctionnel)
	,getEntrepotEtiquetteEntreAdresseDebutAdresseFin: qrGetEntrepotEtiquetteEntreAdresseDebutAdresseFin

	// NATURABUY (fonctionnel)
	,getListePrixVentParCodeEnsgCodeOffre: qrGetListePrixVentParCodeEnsgCodeOffre
	,getListePrixVentParCodeEnsgCodeOffreRefArt: qrGetListePrixVentParCodeEnsgCodeOffreRefArt
	,getListeKitArtStockParRefArt: qrGetListeKitArtStockParRefArt
	,getListeRefArtKitParRefArtKit: qrGetListeRefArtKitParRefArtKit
	,getListeStkPhysPARtStockParRefArt: qrGetListeStkPhysPARtStockParRefArt
	,getListeCmdeColparCodeEnsgNumeroFac: qrGetListeCmdeColparCodeEnsgNumeroFac
	,getListeSrdOutFacturesCmde: qrGetListeSrdOutFacturesCmde
	,getListeSrdOutColis: qrGetListeSrdOutColis

	// CALCUL DATE DISPONIBILITE (fonctionnel)
	,getListeCalculDateDisponibilite: qrGetListeCalculDateDisponibilite

	// AJOUT REFERENCE (fonctionnel)
	,getListeAjoutReference: qrGetListeAjoutReference

	// EXPORT REF STOCKAGE PALETTE VENTES (fonctionnel)
	,getListeExportRefStockagePaletteVentes: qrGetListeExportRefStockagePaletteVentes

	// VENTES JOUR UPDATE (fonctionnel)
	,getListeVenteJourUpdateParDatSaisie: qrGetListeVenteJourUpdateParDatSaisie
	,getListeVenteJourUpdateParRefArt: qrGetListeVenteJourUpdateParRefArt

	// REFARENTIEL - DISPONIBILITE (fonctionnel)
	,getListeReferentielDisponibilite: getListeReferentielDisponibilite
	,getListeReferentielDisponibiliteParRefArtKit: getListeReferentielDisponibiliteParRefArtKit

	// UPDATE FOURNISSEUR FROM SRD
	, getListeFournis: qrGetListeFournis
	, getListeFartParPrincipal: qrGetListeFartParPrincipal

	// INSERT HISTORIQUE STOCK DUCATILLON (fonctionnel)
	,getListeInsertHistoriqueStockDucatillon: qrGetListeInsertHistoriqueStockDucatillon
	,getListeInsertHistoriqueStockDucatillonParRefArtKit: qrGetListeInsertHistoriqueStockDucatillonParRefArtKit

	// CALCUL DATE DISPONIBILITE DUCATILLON (fonctionnel)
	, getListeCalculDateDisponibiliteDucatillon: qrGetListeCalculDateDisponibiliteDucatillon
	, getListeCalculDateDisponibiliteDucatillonParRefArtKit: qrGetListeCalculDateDisponibiliteDucatillonParRefArtKit
	, getListeCalculDateDisponibiliteDucatillonParRefArt: qrGetListeCalculDateDisponibiliteDucatillonParRefArt

};
// FIN : COMMUN
// ********************************************************************************************************************


