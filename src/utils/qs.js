import qs from 'qs';

export const getRedirectURLWithParameters = () => {
  const { origin, pathname, search } = window.location;
  const parameters = qs.parse(search, {
    ignoreQueryPrefix: true,
  });

  const stringifyParams = qs.stringify(
    {
      ...parameters,
    },
    { addQueryPrefix: true },
  );

  return stringifyParams ? origin + pathname + stringifyParams : '';
};
