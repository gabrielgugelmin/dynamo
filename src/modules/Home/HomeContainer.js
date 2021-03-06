import { observer, inject } from 'mobx-react';
import React, { Component } from 'react';
import SpaceStore from '~/stores/SpaceStore';
import UserStore from '~/stores/UserStore';

import Header from '~/components/Header';
import Page from '~/components/Page';
import { H1 } from '~/components/Title';
import Container from '~/components/Container';
import CardList from '~/components/CardList';
import Content from '~/components/Content';

@inject('SpaceStore', 'UserStore')
@observer
class HomeContainer extends Component {
  state = {
    launches: [],
    isLoading: true,
    isLoadingMore: false,
  };

  componentDidMount() {
    this.loadLaunches();
  }

  loadLaunches = async () => {
    const response = await SpaceStore.getLastLaunches();
    this.setState({ launches: response, isLoading: false });
  };

  loadMore = async () => {
    this.setState({
      isLoadingMore: true,
    });
    await SpaceStore.loadMore();
    const { launches } = SpaceStore;
    this.setState({ launches, isLoadingMore: false });
  };

  onCardClick = id => {
    const { history } = this.props;
    history.push(`/detail/${id}`);
  };

  render() {
    const { launches, isLoadingMore, isLoading } = this.state;
    const userInitial = UserStore.getUserInitial();

    return (
      <>
        <Page>
          <Header userInitial={userInitial} />
          <Container>
            <Content>
              <H1 align="center" margin="0 0 64px 0">
                Latest launches
              </H1>
              <CardList
                isLoading={isLoading}
                isLoadingMore={isLoadingMore}
                items={launches}
                loadMore={this.loadMore}
                onCardClick={this.onCardClick}
              />
            </Content>
          </Container>
        </Page>
      </>
    );
  }
}

export default HomeContainer;
