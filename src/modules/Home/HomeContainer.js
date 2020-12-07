import { observer, inject } from 'mobx-react';
import React, { Component } from 'react';
import SpaceStore from '~/stores/SpaceStore';
import UserStore from '~/stores/UserStore';

import Header from '~/components/Header';
import Page from '~/components/Page';
import { H1 } from '~/components/Title';
import Container from '~/components/Container';
import CardList from '~/components/CardList';
import Content from './components/Content';

@observer
@inject('SpaceStore', 'UserStore')
class HomeContainer extends Component {
  state = {
    launches: [],
  };

  componentDidMount() {
    this.loadLaunches();
    this.setUserInitial();
  }

  setUserInitial = () => {
    this.setState({
      userInitial: UserStore.getUserInitial(),
    });
  };

  loadLaunches = async () => {
    const response = await SpaceStore.getLastLaunches();
    this.setState({ launches: response });
  };

  loadMore = async () => {
    await SpaceStore.loadMore();
    const { launches } = SpaceStore;
    this.setState({ launches });
  };

  render() {
    const { launches, userInitial } = this.state;
    return (
      <>
        <Page>
          <Header userInitial={userInitial} />
          <Container>
            <Content>
              <H1 align="center" margin="0 0 64px 0">
                Latest launches
              </H1>
              <CardList items={launches} />
              <button onClick={this.loadMore} type="button">
                load more
              </button>
            </Content>
          </Container>
        </Page>
      </>
    );
  }
}

export default HomeContainer;
