import "./CandidateScore.scss";

import { useMemo } from "react";
import CountUp from "react-countup";

import { candidates } from "../../data/Candidates";
import { ScoringService } from "../../services";
import { CandidateID } from "../../types";
import { Button } from "../Button";

interface CandidateScoreProps {
    candidateID: string,
}

/**
 * A component showing the given candidate.
 * @param id. The current Candidate.
 */
export function CandidateScore({ candidateID }: CandidateScoreProps)  {
    const candidate = candidates.get(candidateID as CandidateID);
    const score = ScoringService.getInstance().computeScore(candidateID as CandidateID);

    const imageFileName = useMemo(()=> candidate?.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "_").toLowerCase(), [candidate?.name]);
    return (
        <div className="candidate-score">
            {
                candidate && score && (
                    <>
                        <div className="candidate-score__image">
                            <img src={`/images/candidates/${imageFileName}.webp`}/>
                        </div>
                        <div className="candidate-score__details">
                            <div className="candidate-score__details-name">{candidate.name}</div>
                            <div className="candidate-score__details-movement">{candidate.movement}</div>
                            <div className="candidate-score__details-score">{<CountUp delay={0.25} end={Math.round(score.score)} duration={1.5} useEasing/>}</div>
                        </div>
                        <div className="candidate-score__bars">
                            <div className="candidate-score__bars-item candidate-score__bars-item--must_not"></div>
                            <div className="candidate-score__bars-item candidate-score__bars-item--not"></div>
                            <div className="candidate-score__bars-item candidate-score__bars-item--skip"></div>
                            <div className="candidate-score__bars-item candidate-score__bars-item--yes"></div>
                            <div className="candidate-score__bars-item candidate-score__bars-item--must"></div>
                        </div>
                        <div className="candidate-score__footer">
                            <div className="candidate-score__chips">
                                <div className="candidate-score__chips-item">{score.skulls} <span>❌</span></div>
                                <div className="candidate-score__chips-item">{score.hearts} <span>😍</span></div>
                            </div>
                            <Button type="transparent">En savoir plus</Button>
                        </div>
                    </>
                )}
        </div>
    );
}
