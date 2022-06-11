import YearsHistogram from "components/YearsHistogram";
import { useAlbumPerFirstPlayedYearCountQuery } from "generated/graphql";

const FirstPlayedYearsPage = () => {
  const { data, error, loading } = useAlbumPerFirstPlayedYearCountQuery();

  if (loading || error || !data) {
    return null;
  }

  return <YearsHistogram data={data.albumPerFirstPlayedYearCount} />;
};

export default FirstPlayedYearsPage;
