import { ReactNode } from 'react';
export type ReviewerType = {
  review: string;
  user: string;
  userPhoto: string;
};
export type CtaProps = {
  images: string[];
  duration: string;
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
export type OverviewProps = {
  startDates?: string[];
  difficulty?: string;
  maxGroupSize?: string;
  ratingsAverage?: string;
  guides?: IGuides[];
  name?: string;
  description?: string;
};
export type OverviewDetailProps = {
  title: string;
  svg: ReactNode;
  date: string | undefined;
  addition?: string;
};

export interface CustomHookType {
  isError: boolean | null;
  isLoading: boolean;
  response: any;
  sendRequest: (requestConfig: any) => Promise<void>;
}
