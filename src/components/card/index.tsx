import { DungeonCard } from '../../dungeons/dungeons';

interface CardProps extends DungeonCard {
  selected?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = (props) => {
  const { selected, onClick } = props;

  return (
    <div className={`card${selected ? ' selected' : ''}`} onClick={onClick}>
      <div className="inner">
        <div className="front"></div>
        <div className="back"></div>
      </div>
    </div>
  );
};
