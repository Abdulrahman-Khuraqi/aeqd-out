const PageHero = ({ subtitle, title, paragraph }) => {
  return (
    <section className="hero max-lg:pt-150 relative overflow-hidden pb-[60px] pt-[240px]">
      <div className="container">
        <div className="mx-auto max-w-[948px] text-center">
          {subtitle && <p className="mb-4 font-medium uppercase">{subtitle}</p>}
          {title && (
            <h1
              className="mb-10 text-5xl max-lg:mb-10"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
          )}
          {paragraph && (
            <p className="mx-auto mb-12 max-w-[590px] max-lg:mb-10">
              {paragraph}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
