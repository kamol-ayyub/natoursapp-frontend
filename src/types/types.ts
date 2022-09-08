export type ReviewerType = {
  review: String;
  user: String;
  userPhoto: String;
};
export type CtaProps = {
  images: String[];
  duration: String;
};
export type OverviewBoxProps = {
  data: any;
  startDates?: any;
  difficulty?: String | undefined;
  maxGroupSize: String | undefined;
  ratingsAverage: String | undefined;
  guides: any;
};
