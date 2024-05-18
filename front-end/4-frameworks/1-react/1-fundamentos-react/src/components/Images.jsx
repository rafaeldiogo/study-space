import MountainImage from "../assets/img2.jpg";

const Images = () => {
  return (
    <div>
      {/* Imagem em public */}
      <img src="/img1.jpg" alt="Montanha-Com-Casa" />
      {/* Imagem em assets */}
      <img src={MountainImage} alt="Montanha-Sem-Casa" />
    </div>
  );
};
export default Images;
