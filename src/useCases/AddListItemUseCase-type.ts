import { ListItemEntity } from '../entities/ListItemEntity';
import { UseCase, UseCaseFactory } from '../type';

export interface AddListItemInput {
  title: string;
}
export interface AddListItemOutput extends ListItemEntity {}
export interface AddListItemUseCase
  extends UseCase<AddListItemInput, AddListItemOutput> {}
export interface AddListItemContext {}
export interface AddListItemUseCaseFactory
  extends UseCaseFactory<AddListItemUseCase, AddListItemContext> {}
