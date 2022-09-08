import { IconContext } from 'react-icons';

type OverviewDetailProps = {
  title: String;
  svg: any;
  date: String | undefined;
  addition?: String;
};
export const OverviewDetail = ({
  title,
  svg,
  date,
  addition,
}: OverviewDetailProps) => {
  return (
    <div className='overview-box__detail'>
      <IconContext.Provider value={{ className: 'overview-box__icon' }}>
        {svg}
      </IconContext.Provider>

      <span className='overview-box__label'>{title}</span>
      <span className='overview-box__text'>
        {date} {addition}
      </span>
    </div>
  );
};
