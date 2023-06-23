import imgEror from 'components/img/sticker.webp';
import { ImgWrong } from './ImgErrorView.styled';

const ImgErorView = ({ children }) => {
  return (
    <ImgWrong role="alert">
      <img src={imgEror} width="240" alt="sadcat" />
      <p>{children}</p>
    </ImgWrong>
  );
};

export default ImgErorView;
