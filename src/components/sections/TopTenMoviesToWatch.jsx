import React, { memo, Fragment, useState } from "react";

//components
import SectionSlider from "../slider/SectionSlider";
import TopTenCard from "../../components/cards/TopTenCard";

//function
import { generateImgPath } from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

const TopTenMoviesToWatch = memo(() => {
  const { t } = useTranslation();
  const [topTen] = useState([
    {
      image: generateImgPath("/assets/images/movies/Frame 41.png"),
      count: 1,
    },
    {
      image: generateImgPath("/assets/images/movies/Frame 40.png"),
      count: 2,
    },
    {
      image: generateImgPath("/assets/images/movies/Frame 39.png"),
      count: 3,
    },
    {
      image: generateImgPath("/assets/images/movies/Frame 38.png"),
      count: 4,
    },
    {
      image: generateImgPath("/assets/images/movies/Frame 37.png"),
      count: 5,
    },
    {
      image: generateImgPath("/assets/images/movies/Frame 36.png"),
      count: 6,
    },
    {
      image: generateImgPath("/assets/images/movies/Frame 41.png"),
      count: 7,
    },
    {
      image: generateImgPath("/assets/images/movies/Frame 40.png"),
      count: 8,
    },
    {
      image: generateImgPath("/assets/images/movies/Frame 39.png"),
      count: 9,
    },
    {
      image: generateImgPath("/assets/images/movies/Frame 38.png"),
      count: 10,
    },
  ]);

  return (
    <Fragment>
      <SectionSlider
        title={t("ott_home.top_ten_movies")}
        list={topTen}
        className="top-ten-block"
      >
        {(data) => (
          <TopTenCard
            imagePath={data.image}
            countValue={data.count}
            link="/movies-detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

TopTenMoviesToWatch.displayName = "TopTenMoviesToWatch";
export default TopTenMoviesToWatch;
