const changeLoadingState = (_this, loadingVariable, isLoading = false) => {
  _this.setState({
    [loadingVariable]: isLoading,
  });
};

export const whileLoading = async (_this, fn, loadingVariable) => {
  changeLoadingState(_this, loadingVariable, true);
  const data = await fn();
  changeLoadingState(_this, loadingVariable);

  return data;
};
