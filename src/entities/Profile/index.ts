export {
  ProfileSchema,
  Profile,
} from './model/types/profile';

export {
  profileActions,
  profileReducer,
} from './model/slice/profileSlice';

export {
  fetchProfileData,
} from 'entities/Profile/model/services/fetchProfileData/fetchProfileData';

export {
  ProfileCard,
} from './ui/ProfileCard/ProfileCard';
