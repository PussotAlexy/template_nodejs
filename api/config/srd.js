var config = require('../../tools/config');
var qr = require('./queries');
var dbSrd = config.getDbSrd();
var dbMiddleData = config.getDbMiddleData();
var spawn = require('threads').spawn;

function needAuth(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
}

function notImplemented(req, res, next) {
	res.status(404)
		.json({
			status: 'error',
			message: 'Not implemented !'
		});
	res.end();
	return;
}

// *********************************************************************************************************************
// DEBUT : ZONE_AFF
function getZoneAffListeParCodeZone(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var codeZone = req.params.codeZone;
	var codeZoneUpper = codeZone.toUpperCase() ;
	dataBase.any( qr.getListeZoneAffParCodeZone, codeZoneUpper )
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getZoneAffListeParCodeZone'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}


function getZoneAffListeParRefArt(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var refArt = req.params.refArt;
	dataBase.any( qr.getListeZoneAffParRefArt, refArt )
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getZoneAffListeParRefArt'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

function getZoneAffListeParRefArtEQ(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var refArt = req.params.refArt;
	var refArtTrim = refArt.trim();
	dataBase.any( qr.getListeZoneAffParRefArtEQ, refArtTrim )
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getZoneAffListeParRefArtEQ'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

function getZoneAffListe(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	dataBase.any( qr.getListeZoneAff)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getZoneAffListe'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

function getZoneAffListeCodeZoneRefArt(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;

	dataBase.any( qr.getListeCodeZoneRefArtZoneAff)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getZoneAffListeCodeZoneRefArt'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

function getZoneAffListeRefArtParRefArtEQ(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var refArt = req.params.refArt;
	var refArtTrim = refArt.trim();
	dataBase.any( qr.getListeRefArtZoneAffParRefArtEQ, refArtTrim )
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getZoneAffListeRefArtParRefArtEQ'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

function getZoneAffListeCodeZoneParRefArtEQ(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var refArt = req.params.refArt;
	var refArtTrim = refArt.trim();
	dataBase.any( qr.getListeCodeZoneZoneAffParRefArtEQ, refArtTrim )
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getZoneAffListeCodeZoneParRefArtEQ'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

function getZoneAffListeCodeZoneQuantiteParRefArtEQ(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var refArt = req.params.refArt;
	var refArtTrim = refArt.trim();
	dataBase.any( qr.getListeCodeZoneQuantiteZoneAffParRefArtEQ, refArtTrim )
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getZoneAffListeCodeZoneQuantiteParRefArtEQ'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

// FIN: ZONE_AFF
//**********************************************************************************************************************





//**********************************************************************************************************************
// DEBUT: OFFRE
function getOffreListeCodeOffreParCodeOffreDIFF(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var codeOffre = req.params.codeOffre;
	var codeOffreTrim = codeOffre.trim();
	dataBase.any( qr.getListeCodeOffreOffreParCodeOffreDIFF, codeOffreTrim )
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getOffreListeCodeOffreParCodeOffreDIFF'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

function getOffreListeLibelleParCodeOffreCodeEnsgEQ(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var codeOffre = req.params.codeOffre;
	var codeEnsg = req.params.codeEnsg;
	var codeOffreTrim = codeOffre.trim();
	var codeEnsgTrim = codeEnsg.trim();
	dataBase.any( qr.getListeLibelleOffreParCodeOffreCodeEnsgEQ, [codeOffreTrim, codeEnsgTrim ])
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeLibelleOffreParCodeOffreCodeEnsgEQ'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

function getOffreListeCodeOffreParCodeOffreCodeEnsgEQ(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var codeOffre = req.params.codeOffre;
	var codeEnsg = req.params.codeEnsg;
	var codeOffreTrim = codeOffre.trim();
	var codeEnsgTrim = codeEnsg.trim();
	dataBase.any( qr.getListeCodeOffreOffreParCodeOffreCodeEnsgEQ, [codeOffreTrim, codeEnsgTrim ])
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeCodeOffreOffreParCodeOffreCodeEnsgEQ'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

// FIN: OFFRE
//**********************************************************************************************************************





//**********************************************************************************************************************
// DEBUT: PRIXVENT
function getPrixVentListePrixParCodeOffreRefArtEQ(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var codeOffre = req.params.codeOffre;
	var codeOffreTrim = codeOffre.trim();
	var refArt = req.params.refArt;
	var refArtTrim = refArt.trim();
	dataBase.any( qr.getListePrixPrixVentParCodeOffreRefArtEQ, [codeOffreTrim, refArtTrim])
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListePrixPrixVentParCodeOffreRefArtEQ'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}


function getPrixVentListeParCodeEnsgCodeOffre(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	dataBase.any( qr.getListePrixVentParCodeEnsgCodeOffre)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListePrixVentParCodeEnsgCodeOffre'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

function getPrixVentListeParCodeEnsgCodeOffreRefArt(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var refArt = req.params.refArt;
	var refArtTrim = refArt.trim();
	dataBase.any( qr.getListePrixVentParCodeEnsgCodeOffreRefArt, refArtTrim)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListePrixVentParCodeEnsgCodeOffreRefArt'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}



// FIN: PRIXVENT
//**********************************************************************************************************************





//**********************************************************************************************************************
// DEBUT: CMDE_DET
function getCmdeDetListeParRefArt(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var refArt = req.params.refArt;
	var refArtTrim = refArt.trim();
	dataBase.any( qr.getListeCmdeDetParRefArt, refArtTrim)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getCmdeDetListeParRefArt'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}



// FIN: CMDE_DET
//**********************************************************************************************************************





//**********************************************************************************************************************
// DEBUT: REASSORT (fonctionnel)
function getReassortEntreDateDebutDateFin(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var dateDebut = req.params.dateDebut;
	var dateDebutTrim = dateDebut.trim();
	var dateFin = req.params.dateFin;
	var dateFinTrim = dateFin.trim();
	dataBase.any( qr.getReassortEntreDateDebutDateFin, [dateDebutTrim, dateFinTrim])
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getReassortEntreDateDebutDateFin'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

function getReassortParRefArt(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var refArt = req.params.refArt;
	var refArtTrim = refArt.trim();
	dataBase.any( qr.getReassortParRefArt, refArtTrim)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getReassortParRefArt'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}


// FIN: REASSORT (fonctionnel)
//**********************************************************************************************************************





//**********************************************************************************************************************
// DEBUT: CMDE (table, naturabuy)

// NATURABUY
function getCmdeListeNumeroParDossierEQ(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var dossier = req.params.dossier;
	var dossierTrim = dossier.trim();
	dataBase.any( qr.getListeNumeroCmdeParDossierEQ, dossierTrim)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeNumeroCmdeParDossierEQ'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}


// FIN: CMDE (table, naturabuy)
//**********************************************************************************************************************





//**********************************************************************************************************************
// DEBUT: ENTREPOT ETIQUETTE

// Entre adresse debut et adresse fin
function getEntrepotEtiquetteEntreAdresseDebutAdresseFin(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var adresseDebut = req.params.adresseDebut;
	var adresseDebutTrin = adresseDebut.trim();
	var adresseFin = req.params.adresseFin;
	var adresseFinTrim = adresseFin.trim();
	dataBase.any( qr.getEntrepotEtiquetteEntreAdresseDebutAdresseFin, [adresseDebutTrin, adresseFinTrim])
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getEntrepotEtiquetteEntreAdresseDebutAdresseFin'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

// NATURABUY (SRD OUT FACTURES)
function getCmdeListeSrdOutFactures(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	dataBase.any( qr.getListeSrdOutFacturesCmde)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeSrdOutFacturesCmde'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

// FIN: CMDE (table, naturabuy)
//**********************************************************************************************************************




//**********************************************************************************************************************
// DEBUT: ARTSTOCK

// NATURABUY
function getArtStockListeKitParRefArt(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var refArt = req.params.refArt;
	var refArtTrim = refArt.trim();
	dataBase.any( qr.getListeKitArtStockParRefArt, refArtTrim)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeKitArtStockParRefArt'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

function getArtStockListeStkPhysPParRefArt(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var refArt = req.params.refArt;
	var refArtTrim = refArt.trim();
	dataBase.any( qr.getListeStkPhysPARtStockParRefArt, refArtTrim)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeStkPhysPARtStockParRefArt'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

// FIN: ARTSTOCK
//**********************************************************************************************************************




//**********************************************************************************************************************
// DEBUT: KIT

// NATURABUY
function getKitListeRefArtParRefArtKit(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var refArtKit = req.params.refArtKit;
	var refArtKitTrim = refArtKit.trim();
	dataBase.any( qr.getListeRefArtKitParRefArtKit, refArtKitTrim)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'qrGetListeRefArtKitParRefArtKit'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

// FIN: KIT
//**********************************************************************************************************************




//**********************************************************************************************************************
// DEBUT: CMDE_COL

// NATURABUY
function getCmdeColListeParCodeEnsgNumeroFac(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var numeroFac = req.params.numeroFac;
	var numeroFacTrim = numeroFac.trim();
	dataBase.any( qr.getListeCmdeColparCodeEnsgNumeroFac, numeroFacTrim)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeCmdeColparCodeEnsgNumeroFac'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

// FIN: CMDE_COL
//**********************************************************************************************************************




//**********************************************************************************************************************
// DEBUT: CALCUL DATE DISPONIBILITE (fonctionnel)

function getCalculDateDisponibiliteListe(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	dataBase.any( qr.getListeCalculDateDisponibilite)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeCalculDateDisponibilite'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

// FIN: CALCUL DATE DISPONIBILITE (fonctionnel)
//**********************************************************************************************************************




//**********************************************************************************************************************
// DEBUT: CALCUL DATE DISPONIBILITE (fonctionnel)

function getAjoutReferenceListeEpuiseCodeZoneParRefArt(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var refArt = req.params.refArt;
	var refArtTrim = refArt.trim();
	dataBase.any( qr.getListeAjoutReference, refArtTrim)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeAjoutReference'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

// FIN: CALCUL DATE DISPONIBILITE (fonctionnel)
//**********************************************************************************************************************




//**********************************************************************************************************************
// DEBUT: EXPORT REF STOCKAGE PALETTE VENTES (fonctionnel)

function getExportRefStockagePaletteVentesListeQteDemDatSaisieParRefArt(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var refArt = req.params.refArt;
	var refArtTrim = refArt.trim();
	dataBase.any( qr.getListeExportRefStockagePaletteVentes, refArtTrim)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeExportRefStockagePaletteVentes'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

// FIN: EXPORT REF STOCKAGE PALETTE VENTES (fonctionnel)
//**********************************************************************************************************************




//**********************************************************************************************************************
// DEBUT: NATURABUY - SRD OUT COLIS (fonctionnel)

function getNaturabuyListeSrdOutColis(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	dataBase.any( qr.getListeSrdOutColis)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeSrdOutColis'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

// FIN: NATURABUY - SRD OUT COLIS (fonctionnel)
//**********************************************************************************************************************




//**********************************************************************************************************************
// DEBUT: VENTES JOUR - UPDATE (fonctionnel)

function getVentesJourUpdateListeParRefArt(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var refArt = req.params.refArt;
	var refArtTrim = refArt.trim();
	dataBase.any( qr.getListeVenteJourUpdateParRefArt, refArtTrim)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeVenteJourUpdateParRefArt'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

function getVentesJourUpdateListeParDatSaisie(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var datSaisie = req.params.datSaisie;
	dataBase.any( qr.getListeVenteJourUpdateParDatSaisie, datSaisie)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeVenteJourUpdateParDatSaisie'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

// FIN: VENTES JOUR - UPDATE (fonctionnel)
//**********************************************************************************************************************




//**********************************************************************************************************************
// DEBUT: REFERENTIEL - DISPONIBILITE (fonctionnel)

function getReferentielDisponibiliteParRefArtKit(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var refArtKit = req.params.refArtKit;
	var refArtKitTrim = refArtKit.trim();
	dataBase.any( qr.getListeReferentielDisponibiliteParRefArtKit, refArtKitTrim)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeReferentielDisponibiliteParRefArtKit'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

function getReferentielDisponibilite(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	dataBase.any( qr.getListeReferentielDisponibilite)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeReferentielDisponibilite'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

// FIN: REFERENTIEL - DISPONIBILITE (fonctionnel)
//**********************************************************************************************************************




//**********************************************************************************************************************
// DEBUT: UPDATE FOURNISSEUR FROM SRD

function getUpdateFournisseurFromSrdListeFournis(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	dataBase.any( qr.getListeFournis)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeFournis'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

function getUpdateFournisseurFromSrdListeFartParPrincipal(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	dataBase.any( qr.getListeFartParPrincipal)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeFartParPrincipal'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

// FIN: UPDATE FOURNISSEUR FROM SRD
//**********************************************************************************************************************




//**********************************************************************************************************************
// DEBUT: REFERENTIEL - DISPONIBILITE (fonctionnel)

function getInsertHistoriqueStockDucatillonParRefArtKit(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var refArtKit = req.params.refArtKit;
	var refArtKitTrim = refArtKit.trim();
	dataBase.any( qr.getListeInsertHistoriqueStockDucatillonParRefArtKit, refArtKitTrim)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeInsertHistoriqueStockDucatillonParRefArtKit'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

function getInsertHistoriqueStockDucatillon(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	dataBase.any( qr.getListeInsertHistoriqueStockDucatillon)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeInsertHistoriqueStockDucatillon'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

// FIN: REFERENTIEL - DISPONIBILITE (fonctionnel)
//**********************************************************************************************************************




//**********************************************************************************************************************
// DEBUT: CALCUL DATE DISPONIBILITE DUCATILLON (fonctionnel)

function getCalculDateDisponibiliteDucatillonListeParRefArtKit(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var refArtKit = req.params.refArtKit;
	var refArtKitTrim = refArtKit.trim();
	dataBase.any( qr.getListeCalculDateDisponibiliteDucatillonParRefArtKit, refArtKitTrim)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeCalculDateDisponibiliteDucatillonParRefArtKit'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

function getCalculDateDisponibiliteDucatillonListeParRefArt(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	var refArt = req.params.refArt;
	var refArtTrim = refArt.trim();
	dataBase.any( qr.getListeCalculDateDisponibiliteDucatillonParRefArt, refArtTrim)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeCalculDateDisponibiliteDucatillonParRefArt'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}
function getCalculDateDisponibiliteDucatillonListe(req, res, next) {
	if (!config.checkApiAuth(req.params.token, res)) {res.end(); return;}
	var scope = req.params.scope;
	var dataBase = scope!='SRD' ? dbMiddleData : dbSrd;
	dataBase.any( qr.getListeCalculDateDisponibiliteDucatillon)
		.then(function (data) {
			res.status(200)
				.json({
					status: 'success',
					data: data,
					message: 'getListeCalculDateDisponibiliteDucatillon'
				});
		})
		.catch(function (err) {
			return next(err);
		});
}

// FIN: CALCUL DATE DISPONIBILITE DUCATILLON (fonctionnel)
//**********************************************************************************************************************



module.exports = {
	// ZONE_AFF
	getZoneAffListeParCodeZone: getZoneAffListeParCodeZone
	, getZoneAffListeParRefArt: getZoneAffListeParRefArt
	, getZoneAffListeParRefArtEQ: getZoneAffListeParRefArtEQ
	, getZoneAffListe: getZoneAffListe
	, getZoneAffListeCodeZoneRefArt: getZoneAffListeCodeZoneRefArt
	, getZoneAffListeRefArtParRefArtEQ: getZoneAffListeRefArtParRefArtEQ
	, getZoneAffListeCodeZoneParRefArtEQ: getZoneAffListeCodeZoneParRefArtEQ
	, getZoneAffListeCodeZoneQuantiteParRefArtEQ: getZoneAffListeCodeZoneQuantiteParRefArtEQ

	// OFFRE
	, getOffreListeCodeOffreParCodeOffreDIFF: getOffreListeCodeOffreParCodeOffreDIFF
	, getOffreListeLibelleParCodeOffreCodeEnsgEQ: getOffreListeLibelleParCodeOffreCodeEnsgEQ
	, getOffreListeCodeOffreParCodeOffreCodeEnsgEQ: getOffreListeCodeOffreParCodeOffreCodeEnsgEQ

	// PRIXVENT
	, getPrixVentListePrixParCodeOffreRefArtEQ: getPrixVentListePrixParCodeOffreRefArtEQ
	// NATURABUY
	,getPrixVentListeParCodeEnsgCodeOffre: getPrixVentListeParCodeEnsgCodeOffre
	,getPrixVentListeParCodeEnsgCodeOffreRefArt: getPrixVentListeParCodeEnsgCodeOffreRefArt

	// CMDE_DET
	, getCmdeDetListeParRefArt: getCmdeDetListeParRefArt

	// REASSORT (fonctionnel)
	,getReassortEntreDateDebutDateFin: getReassortEntreDateDebutDateFin
	,getReassortParRefArt: getReassortParRefArt

	// CMDE
	, getCmdeListeNumeroParDossierEQ: getCmdeListeNumeroParDossierEQ
	, getCmdeListeSrdOutFactures: getCmdeListeSrdOutFactures

	// ENTREPOT ETIQUETTE (fonctionnel)
	, getEntrepotEtiquetteEntreAdresseDebutAdresseFin: getEntrepotEtiquetteEntreAdresseDebutAdresseFin

	// ARTSTOCK
	, getArtStockListeKitParRefArt: getArtStockListeKitParRefArt
	, getArtStockListeStkPhysPParRefArt: getArtStockListeStkPhysPParRefArt

	// KIT
	, getKitListeRefArtParRefArtKit: getKitListeRefArtParRefArtKit

	// CMDE_COL
	, getCmdeColListeParCodeEnsgNumeroFac: getCmdeColListeParCodeEnsgNumeroFac

	// CALCUL DATE DISPONIBILITE (fonctionnel)
	, getCalculDateDisponibiliteListe: getCalculDateDisponibiliteListe

	// AJOUT REFERENCE (fonctionnel)
	, getAjoutReferenceListeEpuiseCodeZoneParRefArt: getAjoutReferenceListeEpuiseCodeZoneParRefArt

	// EXPORT REF STOCKAGE PALETTE VENTES (fonctionnel)
	, getExportRefStockagePaletteVentesListeQteDemDatSaisieParRefArt: getExportRefStockagePaletteVentesListeQteDemDatSaisieParRefArt

	// NATURABUY - SRD OUT COLES (fonctionnel)
	, getNaturabuyListeSrdOutColis: getNaturabuyListeSrdOutColis

	// VENTES JOUR - UPDATE (fonctionnel)
	,getVentesJourUpdateListeParRefArt: getVentesJourUpdateListeParRefArt
	,getVentesJourUpdateListeParDatSaisie: getVentesJourUpdateListeParDatSaisie

	// REFERENTIEL - DISPONIBILITE (fonctionnel)
	,getReferentielDisponibiliteParRefArtKit: getReferentielDisponibiliteParRefArtKit
	,getReferentielDisponibilite: getReferentielDisponibilite

	// UPDATE FOURNISSEUR FROM SRD
	,getUpdateFournisseurFromSrdListeFournis: getUpdateFournisseurFromSrdListeFournis
	,getUpdateFournisseurFromSrdListeFartParPrincipal: getUpdateFournisseurFromSrdListeFartParPrincipal

	// INSERT HISTORIQUE STOCK DUCATILLON (fonctionnel)
	,getInsertHistoriqueStockDucatillonParRefArtKit: getInsertHistoriqueStockDucatillonParRefArtKit
	,getInsertHistoriqueStockDucatillon: getInsertHistoriqueStockDucatillon

	// CALCUL DATE DISPONIBILITE DUCATILLON (fonctionnel)
	,getCalculDateDisponibiliteDucatillonListeParRefArtKit: getCalculDateDisponibiliteDucatillonListeParRefArtKit
	,getCalculDateDisponibiliteDucatillonListeParRefArt: getCalculDateDisponibiliteDucatillonListeParRefArt
	,getCalculDateDisponibiliteDucatillonListe: getCalculDateDisponibiliteDucatillonListe

	// commun
	, needAuth: needAuth
	, notImplemented: notImplemented

};