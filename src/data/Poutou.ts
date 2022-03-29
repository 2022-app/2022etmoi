import { Answer, Candidate, CandidateAnswer, CandidateID, PropositionID } from "../types";

export const Poutou = new Candidate(
    CandidateID.POUTOU,
    "Philippe Poutou",
    "Nouveau Parti Anticapitaliste",
    "@PhilippePoutou",
    new Map([
        [PropositionID.STOP_EOLIENNE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SUCCESSIONS, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.SMIC, new Answer(CandidateAnswer.YES, "Revenu mensuel minimum de 1 800 euros nets")],
        [PropositionID.REPUBLIQUE, new Answer(CandidateAnswer.YES, "\"On ne peut en finir avec le capitalisme dans le cadre d'institutions conçues pour le préserver. Il faut les renverser et en fonder de nouvelles, au service et sous le contrôle des travailleurs·euses et de la population.\" p. 20")],
        [PropositionID.NUCLEAIRE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.LOGEMENT_SOCIAL_REFUSER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EGALITE_HF, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.ISF, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.DESTITUER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.PRIVATISER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.BAC, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.BREVETS_LIBERER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.LIBRE_ECHANGE_FIN, new Answer(CandidateAnswer.YES, "\"Fin des traités qui organisent le pillage des richesses à l'échelle internationale et détruisent les services publics\", p. 25")],
        [PropositionID.AAH, new Answer(CandidateAnswer.YES, "p. 24")],
        [PropositionID.SOINS_ETRANGERS_STOP, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.TEMPS, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.CLOUD_SOUVERAIN, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.DESOBEIR, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.SOL, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.CANNABIS, new Answer(CandidateAnswer.YES, "\"Légalisation du cannabis et dépénalisation de la consommation des drogues\", p. 21")],
        [PropositionID.DETTE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.TRAITES_RENEGOCIER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.RIC, new Answer(CandidateAnswer.YES, "\"Mise en place de mesures de démocratie directe type référendum d'initiative citoyenne\", p. 20")],
        [PropositionID.SPECULATION, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.OTAN, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.REDEVANCE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.GUERRE_MIGRANTS_ACCEPTER, new Answer(CandidateAnswer.YES, "")],
        [PropositionID.TVA, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.AUTOROUTES, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.VEGETALISER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.RSA_CONDITIONNE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EXPULSER_CHOMAGE, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.EXPROPRIER_CAPITALISTES, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.RETRAITE_REPORTER, new Answer(CandidateAnswer.NO, "")],
        [PropositionID.VOILE_REGLEMENTER, new Answer(CandidateAnswer.NO, "")],
    ]),
);
