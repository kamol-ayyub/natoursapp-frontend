import { ReactNode, RefObject, FormEvent, InputHTMLAttributes } from 'react';
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
  Upload?: boolean;
}

export interface ButtonPropType {
  GreenBtn?: boolean;
  SmallBtn?: boolean;
  WhiteBtn?: boolean;
  children?: string | ReactNode;
  SpanRows?: boolean;
  AlignRigt?: boolean;
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
  error?: boolean;
  children?: ReactNode;
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
export interface OverviewBoxTextProps {
  label?: boolean;
}
export interface ReviewProps {
  data?: Array<object>;
}
export interface CtaImgProp {
  CtaLogo?: boolean;
  children?: ReactNode;
}
export interface CtaTextProp {
  duration: string;
}
export interface SecondaryType {
  MaBtLg?: boolean;
}
export interface CardDataProps {
  Svg?: ReactNode;
  Span?: ReactNode;
}
export interface CardDetailsProps {
  difficulty: 'easy' | 'medium' | 'hard';
  duration: number;
  summary: string;
  description: string;
  startDates: Array<string>;
  locations: Array<object>;
  maxGroupSize: number;
}
export interface ImageType {
  src: string;
  alt: string;
  CtaImg?: boolean;
  CtaImgOne?: boolean;
  CtaImgTwo?: boolean;
  FormUserPhoto?: boolean;
  NavUserImg?: boolean;
  OverviewBoxImg?: boolean;
  CardPicImage?: boolean;
  HeaderHeroImg?: boolean;
}
export interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  ref?: String | HTMLInputElement | null;
  label?: string;
  placeholder?: string;
  inputType: 'email' | 'password' | 'text' | 'file';
  required?: boolean;
  HTMLFor?: string;
  Upload?: boolean;
  MaBtMd?: boolean;
  name?: string;
  id?: string;
}

export interface InputBaseType {
  MaBtMd?: boolean;
  Upload?: boolean;
}
export interface NavBaseProps {
  Tour?: boolean;
  User?: boolean;
  children?: ReactNode;
}
export interface NavItemType {
  link?: HTMLAnchorElement | String;
  text?: String;
  active?: boolean;
  svg?: any;
  Active?: boolean;
}
export interface NavItemBaseType {
  Active?: boolean;
}
export interface ProtectedType {
  isLogged?: boolean;
  children?: ReactNode;
}
export interface UserViewType {
  children: ReactNode;
}
export type HeaderProps = {
  imageCover: string;
  name: string;
  duration: number;
  description: string;
};
export interface TourDescriptionProps {
  tourName?: string;
  description?: string;
}
