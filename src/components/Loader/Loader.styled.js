import { SpinnerWrap, Spinner } from './Loader';

const Loader = () => {
  return (
    <SpinnerWrap>
      <Spinner className="icon-spin" size="32" />
      <p>Загружаем...</p>
    </SpinnerWrap>
  );
};

export default Loader;
