const Error404: React.FC = () => {
  const message: string = 'This page has an invalid route! Error:404';

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Error404;
