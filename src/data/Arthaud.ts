import { Answer, Candidate, CandidateAnswer, CandidateID, PropositionID } from "../types";

export const Arthaud = new Candidate(
    CandidateID.ARTHAUD,
    "Nathalie Arthaud",
    "Lutte Ouvrière",
    "@n_arthaud",
    "https://www.nathalie-arthaud.info/mon-programme-de-luttes-194041.html",
    new Map([
        [PropositionID.STOP_EOLIENNE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SUCCESSIONS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SMIC, new Answer(CandidateAnswer.YES, "SMIC à 2 000 euros nets")],
        [PropositionID.REPUBLIQUE, new Answer(CandidateAnswer.YES, "\"Il n'est pas possible de transformer la société sans briser l'appareil d'État de la bourgeoisie, c'est-à-dire sa police, son armée, sa justice.\"")],
        [PropositionID.NUCLEAIRE, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.LOGEMENT_SOCIAL_REFUSER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EGALITE_HF, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.ISF, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.DESTITUER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.PRIVATISER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.BAC, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.BREVETS_LIBERER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.LIBRE_ECHANGE_FIN, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.AAH, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SOINS_ETRANGERS_STOP, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.TEMPS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.CLOUD_SOUVERAIN, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.DESOBEIR, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SOL, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.CANNABIS, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.DETTE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.TRAITES_RENEGOCIER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.RIC, new Answer(CandidateAnswer.YES, "\"À l'ère de l'ordinateur et avec les moyens de communication performants dont nous disposons aujourd'hui, il n'y a aucune difficulté à mettre en œuvre la démocratie la plus directe\"")],
        [PropositionID.SPECULATION, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.OTAN, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.REDEVANCE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.GUERRE_MIGRANTS_ACCEPTER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.TVA, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.AUTOROUTES, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.VEGETALISER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.RSA_CONDITIONNE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EXPULSER_CHOMAGE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EXPROPRIER_CAPITALISTES, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.RETRAITE_REPORTER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.VOILE_REGLEMENTER, new Answer(CandidateAnswer.YES, "")],
    ]),
    "JOEL SAGET / AFP"
);
