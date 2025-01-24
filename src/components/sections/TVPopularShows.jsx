import { useState, Fragment, memo } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

//static data
import { populerSlider } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const TVPopularShows = memo(() => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <SectionSlider
        title={t("form.tv_popular_shows")}
        list={populerSlider}
        className="recommended-block section-top-spacing"
      >
        {(data) => (
          <CardStyle
            image={data.image}
            title={data.title}
            movieTime={data.movieTime}
            watchlistLink="/playlist"
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

TVPopularShows.displayName = TVPopularShows;
export default TVPopularShows;
