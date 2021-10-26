interface CardProps {
  name: string;
  hobby: string;
  age: string;
}

export const Card = ({ name, hobby, age }: CardProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <h4>{hobby}</h4>
      <h4>{age}</h4>
    </div>
  );
};
