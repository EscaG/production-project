import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentFormText = (state: StateSchema) => state.addCommentFrom?.text ?? '';
export const getAddCommentFormError = (state: StateSchema) => state.addCommentFrom?.error;
