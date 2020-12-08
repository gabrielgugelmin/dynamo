import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import GridIcon from '~/assets/icons/grid';
import ListIcon from '~/assets/icons/list';
import LoadingIcon from '~/assets/icons/loading';
import Button from '~/components/Button';
import { List, Feedback, ViewMode, ViewModeButton, Text } from './styles';

function CardList({ isLoading, isLoadingMore, loadMore, items, onCardClick }) {
  const [viewMode, setViewMode] = useState('grid');

  if (isLoading) return <LoadingIcon />;

  return items?.length > 0 ? (
    <>
      <ViewMode>
        <Text>view mode:</Text>
        <ViewModeButton
          onClick={() => setViewMode('grid')}
          type="button"
          className={viewMode === 'grid' ? 'active' : ''}
        >
          <GridIcon
            style={{
              height: '20px',
            }}
          />
        </ViewModeButton>
        <ViewModeButton
          onClick={() => setViewMode('list')}
          type="button"
          className={viewMode === 'list' ? 'active' : ''}
        >
          <ListIcon />
        </ViewModeButton>
      </ViewMode>
      <List>
        {items.map(item => (
          <Card
            id={item?.flight_number}
            image={item?.links?.mission_patch_small}
            key={item?.flight_number}
            name={item?.mission_name}
            onClick={onCardClick}
            site={item?.launch_site?.site_name}
            viewMode={viewMode}
            year={item?.launch_year}
          />
        ))}
      </List>
      <Button
        isLoading={isLoadingMore}
        onClick={() => loadMore()}
        type="button"
      >
        Load more
      </Button>
    </>
  ) : (
    <Feedback>nothing here</Feedback>
  );
}

export default CardList;

CardList.propTypes = {
  items: PropTypes.arrayOf({
    image: PropTypes.string,
    name: PropTypes.string,
    site: PropTypes.string,
    viewMode: PropTypes.string,
    year: PropTypes.string,
  }),
};

CardList.defaultProps = {
  items: PropTypes.arrayOf({
    image: '',
    name: '',
    site: '',
    year: '',
  }),
};
