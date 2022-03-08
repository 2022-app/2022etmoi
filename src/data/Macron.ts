import { Answer, Candidate, CandidateAnswer, CandidateID, PropositionID } from "../types";

export const Macron = new Candidate(
    CandidateID.MACRON,
    "Emmanuel Macron",
    "La République En Marche",
    new Map([
        [PropositionID.STOP_EOLIENNE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SUCCESSIONS, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.SMIC, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.REPUBLIQUE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.NUCLEAIRE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.LOGEMENT_SOCIAL_REFUSER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.PASS_ABROGER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EGALITE_HF, new Answer(CandidateAnswer.NEUTRAL, "")],
        [PropositionID.ISF, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.DESTITUER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.PRIVATISER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.BAC, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.BREVETS_LIBERER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.LIBRE_ECHANGE_FIN, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.AAH, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SOINS_ETRANGERS_STOP, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.TEMPS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.CLOUD_SOUVERAIN, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.DESOBEIR, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SOL, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.CANNABIS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.DETTE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.TRAITES_RENEGOCIER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.RIC, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SPECULATION, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.OTAN, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.REDEVANCE, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.GUERRE_MIGRANTS_ACCEPTER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.TVA, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.AUTOROUTES, new Answer(CandidateAnswer.NO, "")],
    ]),
);
