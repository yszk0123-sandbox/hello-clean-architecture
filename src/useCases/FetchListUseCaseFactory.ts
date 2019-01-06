import { FetchListUseCase, FetchListUseCaseFactory } from './FetchListUseCase';

export const createFetchList: FetchListUseCaseFactory = ({
  listDataAccess,
}) => {
  const fetchList: FetchListUseCase = async _input => {
    return listDataAccess.fetch();
  };
  return fetchList;
};
