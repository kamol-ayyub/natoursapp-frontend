import { ReactNode, RefObject, FormEvent } from 'react';
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
export type EmailAndPasswordType = String | undefined;
export interface ErrorNotifType {
  text?: string | null;
  type?: string;
}
export type RefValueType = string | undefined;
export interface requestConfigType {
  url?: string;
  method?: string;
  data?: object;
  headers?: object;
}

export type usehttp = {
  isError?: null | boolean;
  isLoading?: null | boolean;
  response?: any;
  sendRequest?: () => {};
};
export type GlobalContext = {
  logged: boolean;
  setLogged: (params: boolean) => void;
};
export interface AccountViewProps {
  children: ReactNode;
}
export interface ChildProp {
  children?: ReactNode | string;
  MaBtLg?: boolean;
}

export interface ChildPropWithRef {
  children?: ReactNode;
  formRef?: RefObject<HTMLFormElement>;
  submitForm?: (e: FormEvent) => Promise<void>;
  className?: string;
  Upload?: boolean;
}

export interface ButtonPropType {
  GreenBtn?: boolean;
  SmallBtn?: boolean;
  WhiteBtn?: boolean;
  children?: string;
  SpanRows?: boolean;
}
export interface LabelProp {
  children?: ReactNode | string;
  HTMLFor?: string;
  Upload?: boolean;
}
export type InputRefType = HTMLInputElement;
export type FormType = HTMLFormElement;
export type FormEventType = FormEvent;
export interface FormGroupType {
  right?: boolean;
  children?: ReactNode;
}
export interface LinkBaseType {
  to?: any;
  children?: ReactNode;
  navel?: boolean;
  onClick?: () => void;
  navelcta?: boolean;
}
export interface FooterNavType {
  children?: ReactNode;
  items?: string[];
}
export type GuideProps = {
  name: String;
  title: String;
  photo: String;
};
export interface SpanProps {
  children?: string | ReactNode;
  OverviewBoxLabel?: boolean;
  OverviewBoxText?: boolean;
}
export interface CardProps {
  allTours: Object[];
}
export interface HeadingType {
  MaBtLg?: boolean;
}

export type ElementProp = {
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  duration: number;
  durationWeeks: number;
  guides: Array<object>;
  id: string;
  imageCover: string;
  images: Array<string>;
  locations: Array<object>;
  maxGroupSize: number;
  name: string;
  price: number;
  ratingsAverage: number;
  ratingsQuantiy: number;
  secretTour: boolean;
  slug: string;
  startDates: Array<string>;
  startLocation: any;
  summary: string;
  _id: string;
};
export interface CardHeaderProps {
  imageCover: string;
  name: string;
}

export interface CardFooterProps {
  price: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  _id: string;
}
export interface Cardelements {
  text?: boolean;
  value?: boolean;
  children: ReactNode;
}
