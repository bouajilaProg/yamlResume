import { ExtraCurricularActivity } from "../../../types/extraCurr.type";

function ExtraCurrBlock(activity: ExtraCurricularActivity): string {
  const date = activity.endDate
    ? `${activity.startDate} - ${activity.endDate}`
    : `${activity.startDate} - Present`;

  // Matches the (text: [...], date: "...") format
  return `(text: [*${activity.activityName}*], date: "${date}")`;
}

export { ExtraCurrBlock };
