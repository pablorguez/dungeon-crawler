import { DungeonCard } from '../../types/dungeons';

interface CardProps extends DungeonCard {
  selected?: boolean;
  onClick?: React.MouseEventHandler;
}

const Front: React.FC<{ id: string }> = ({ id }) => (
  <img className="img" src={`/cards/${id}.jpg`} />
);

const Back: React.FC<{ type: string; envEffect?: string }> = ({
  type,
  envEffect
}) => {
  return <div className={`back ${type} ${envEffect}`}></div>;
};

export const Card: React.FC<CardProps> = (props) => {
  const { id, type, envEffect, selected, onClick } = props;

  return (
    <div className="card" {...{ onClick }}>
      {selected ? (
        <Front id={id} />
      ) : (
        <Back type={type} envEffect={envEffect} />
      )}
    </div>
  );
};
