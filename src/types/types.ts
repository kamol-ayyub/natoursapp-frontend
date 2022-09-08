export type ReviewerType = {
  review: String;
  user: String;
  userPhoto: String;
};
export type CtaProps = {
  images: String[];
  duration: String;
};
interface IGuides {
  _id: string;
  name?: string;
  email?: string;
  photo?: string;
  role?: string;
}
export type OverviewBoxProps = {
  startDates?: string[];
  difficulty?: string;
  maxGroupSize?: string;
  ratingsAverage?: string;
  guides?: IGuides[];
};
