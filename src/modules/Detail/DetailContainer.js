import { observer, inject } from 'mobx-react';
import React, { Component } from 'react';

import SpaceStore from '~/stores/SpaceStore';
import UserStore from '~/stores/UserStore';

import Header from '~/components/Header';
import Page from '~/components/Page';
import Container from '~/components/Container';
import Content from '~/components/Content';
import Detail from './components/Detail';
import { whileLoading } from '~/utils/whileLoading';

@observer
@inject('SpaceStore', 'UserStore')
class HomeContainer extends Component {
  state = {
    launch: {},
    isLoading: true,
  };

  componentDidMount() {
    this.loadDetail();
  }

  loadDetail = async () => {
    const { match } = this.props;
    const { id } = match.params;
    await whileLoading(this, () => this.getLaunch(id), 'isLoading');

    const launch = SpaceStore.getFormatedLaunch();

    this.setState({ launch });

    console.log(launch);
  };

  getLaunch = async id => {
    const response = await SpaceStore.getLaunch(id);
    return response;
  };

  render() {
    const { isLoading, launch } = this.state;
    const userInitial = UserStore.getUserInitial();

    return (
      <>
        <Page>
          <Header userInitial={userInitial} />
          <Container>
            <Content>
              <Detail {...launch} />
            </Content>
          </Container>
        </Page>
      </>
    );
  }
}

export default HomeContainer;
