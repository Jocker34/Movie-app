import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import {
  useLazyPersonKnownByQuery,
  useLazyPersonDetailsQuery,
  useLazyPersonImagesQuery,
} from 'services/endpoints/movies.builder';

import { Description } from './actorPage/Description';
import { Movies } from 'components/Movies';
import { Photos } from './actorPage/Photos';
import { useTranslation } from 'hooks/useTranslation';

import PersonJPG from 'images/Person.jpg';
import { checkLanguage } from 'helpers/checkLanguage';
import { RESOLUTION, ALT, IMAGE } from 'constants';
import { useEffect } from 'react';

const KNOWN_BY = 'KNOWN_BY';

export const ActorPage = () => {
  const { id } = useParams();
  const { language } = useTranslation();

  const [triggerPersonKnownBy, { isSuccess: fetchKnownBy, data: knownByData }] =
    useLazyPersonKnownByQuery();
  const [triggerPersonDetails, { isSuccess: fetchDetails, data: detailsData }] =
    useLazyPersonDetailsQuery();
  const [triggerPersonImages, { isSuccess: fetchImages, data: imagesData }] =
    useLazyPersonImagesQuery();

  useEffect(() => {
    triggerPersonKnownBy(id);
    triggerPersonDetails({ id: id, lang: checkLanguage(language) });
    triggerPersonImages(id);
  }, [
    triggerPersonDetails,
    triggerPersonImages,
    triggerPersonKnownBy,
    language,
    id,
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
          {fetchDetails && (
            <img
              src={
                detailsData.profile_path
                  ? `${IMAGE}${detailsData.profile_path}`
                  : PersonJPG
              }
              alt={ALT.PERSON}
              width={RESOLUTION.BIG}
            />
          )}
        </Grid>
        <Grid item>
          <Grid
            container
            direction='column'
            rowSpacing={4}
            sx={{ maxWidth: '1150px' }}
          >
            <Grid item>
              {fetchDetails && <Description data={detailsData} />}
            </Grid>
            <Grid item>
              {fetchImages && <Photos data={imagesData.profiles} />}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {fetchKnownBy && <Movies text={KNOWN_BY} data={knownByData.cast} />}
    </>
  );
};
