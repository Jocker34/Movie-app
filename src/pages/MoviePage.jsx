import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import {
  useLazyTopBilledCastQuery,
  useLazyMovieImagesQuery,
  useLazyMovieDetailsQuery,
  useLazyMovieRecommendationsQuery,
} from 'services/endpoints/movies.builder';
import { useTranslation } from 'hooks/useTranslation';

import { Description } from './moviePage/Description';
import { TopBilledCast } from './moviePage/TopBilledCast';
import { Movies } from 'components/Movies';
import { MovieImage } from './moviePage/MovieImage';
import { Images } from './moviePage/Images';
import { checkLanguage } from 'helpers/checkLanguage';

const RECOMMENDATIONS = 'RECOMMENDATIONS';

export const MoviePage = () => {
  const { id } = useParams();
  const { language } = useTranslation();

  const [
    triggerTopBilledCast,
    { isSuccess: fetchTopBilledCast, data: topBilledCastData },
  ] = useLazyTopBilledCastQuery();
  const [
    triggerMovieImages,
    { isSuccess: fetchMovieImages, data: movieImagesData },
  ] = useLazyMovieImagesQuery();
  const [
    triggerMovieDetails,
    { isSuccess: fetchMovieDetails, data: movieDetailsData },
  ] = useLazyMovieDetailsQuery();
  const [
    triggerMovieRecommendations,
    { isSuccess: fetchMovieRecommendations, data: movieRecommendationData },
  ] = useLazyMovieRecommendationsQuery();

  useEffect(() => {
    triggerTopBilledCast(id);
    triggerMovieImages(id);
    triggerMovieDetails({ id: id, lang: checkLanguage(language) });
    triggerMovieRecommendations(id);
  }, [
    id,
    language,
    triggerMovieDetails,
    triggerMovieImages,
    triggerMovieRecommendations,
    triggerTopBilledCast,
  ]);
  return (
    <>
      <Grid
        container
        direction='row'
        justifyContent='center'
        sx={{ marginTop: '30px' }}
        columnSpacing={4}
      >
        <Grid item>
          {fetchMovieDetails && <MovieImage data={movieDetailsData} />}
        </Grid>
        <Grid item>
          <Grid
            container
            direction='column'
            rowSpacing={4}
            sx={{ maxWidth: '1150px' }}
          >
            <Grid item>
              {fetchMovieDetails && <Description data={movieDetailsData} />}
            </Grid>
            <Grid item>
              {fetchTopBilledCast && <TopBilledCast data={topBilledCastData} />}
            </Grid>
            <Grid item>
              {fetchMovieImages && !!movieImagesData.backdrops.length && (
                <Images data={movieImagesData} />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {fetchMovieRecommendations &&
        !!movieRecommendationData.results.length && (
          <Movies
            text={RECOMMENDATIONS}
            data={movieRecommendationData.results}
          />
        )}
    </>
  );
};
