import { Answer, Candidate, CandidateAnswer, CandidateID, PropositionID } from "../types";

export const DupontAignan = new Candidate(
    CandidateID.DUPONT_AIGNAN,
    "Nicolas Dupont-Aignan",
    "Debout la France",
    "dupontaignan",
    "https://2022nda.fr/wp-content/uploads/2022/01/100-Decisions-pour-la-France_VFIN.pdf",
    new Map([
        [PropositionID.STOP_EOLIENNE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SUCCESSIONS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SMIC, new Answer(CandidateAnswer.NEUTRAL, "Baisse des cotisations uniquement")],
        [PropositionID.REPUBLIQUE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.NUCLEAIRE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.LOGEMENT_SOCIAL_REFUSER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EGALITE_HF, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.ISF, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.DESTITUER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.PRIVATISER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.BAC, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.BREVETS_LIBERER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.LIBRE_ECHANGE_FIN, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.AAH, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SOINS_ETRANGERS_STOP, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.TEMPS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.CLOUD_SOUVERAIN, new Answer(CandidateAnswer.YES, "Proposition 97, page 35")],
        [PropositionID.DESOBEIR, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SOL, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.CANNABIS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.DETTE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.TRAITES_RENEGOCIER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.RIC, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SPECULATION, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.OTAN, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.REDEVANCE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.GUERRE_MIGRANTS_ACCEPTER, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.TVA, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.AUTOROUTES, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.VEGETALISER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.RSA_CONDITIONNE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.EXPULSER_CHOMAGE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EXPROPRIER_CAPITALISTES, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.RETRAITE_REPORTER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.VOILE_REGLEMENTER, new Answer(CandidateAnswer.NEUTRAL, "")],
    ]),
);
