import { useParams } from 'react-router-dom';
import { EditableProfileCard } from 'features/editableProfileCard';
import { Page } from 'widgets/Page/Page';
import { classNames } from 'shared/lib/classNames/classNames';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{id: string}>();

  return (
    <Page className={classNames('', {}, [className])}>
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default ProfilePage;
