interface ChecklistProp {
  title: string;
  rate: number;
}

export interface UserReviewScoreProp {
  score: string;
  img: string;
  imgAlt: string;
  blurDataUrl: string;
  highlight: string[];
  checklist: ChecklistProp[];
}
