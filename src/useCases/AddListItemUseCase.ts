import { ListItem } from '../entities/ListItem';
import { UseCase, UseCaseFactory } from '../type';

export interface AddListItemInput {
  title: string;
}

export interface AddListItemOutput extends ListItem {}

export interface AddListItemUseCase
  extends UseCase<AddListItemInput, AddListItemOutput> {}

export interface AddListItemContext {}

export interface AddListItemUseCaseFactory
  extends UseCaseFactory<AddListItemUseCase, AddListItemContext> {}
