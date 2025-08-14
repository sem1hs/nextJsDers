import Header from "./_components/Header";

const PageLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
