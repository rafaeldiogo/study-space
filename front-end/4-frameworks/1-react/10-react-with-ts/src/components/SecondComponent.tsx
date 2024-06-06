type SecondComponentProps = {
  name: string;
};

const SecondComponent = (props: SecondComponentProps) => {
  return (
    <div>
      <p>Meu segundo componente</p>
      <p>O nome dele é: {props.name}</p>
    </div>
  );
};

export default SecondComponent;
