import { DungeonCard } from '../../types/dungeons';

interface CardProps extends DungeonCard {
  selected?: boolean;
  onClick?: React.MouseEventHandler;
}

const Front: React.FC<{ img: string }> = ({ img }) => {
  const bg = `https://drive.google.com/file/d/${img}/view`;

  return (
    <div
      className="img"
      style={{
        background: `url(${bg}) no-repeat center`,
        backgroundSize: 'cover'
      }}
    ></div>
  );
};

const Back: React.FC<{ type: string; envEffect?: string }> = ({
  type,
  envEffect
}) => {
  return <div className={`back ${type} ${envEffect}`}></div>;
};

export const Card: React.FC<CardProps> = (props) => {
  const { img, type, envEffect, selected, onClick } = props;

  return (
    <div className={`card${selected ? ' selected' : ''}`} {...{ onClick }}>
      {selected ? (
        <Front img={img} />
      ) : (
        <Back type={type} envEffect={envEffect} />
      )}
    </div>
  );
};
