import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const {
    className,
    comments,
    isLoading,
  } = props;

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack
        className={classNames('', {}, [className])}
        gap="16"
        max
      >
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack
      className={classNames('', {}, [className])}
      gap="16"
      max
    >
      {comments?.length
        ? comments.map((commentItem: Comment) => (
          <CommentCard key={commentItem.id} isLoading={isLoading} comment={commentItem} />
        ))
        : <Text text={t('Комментарии отсутствуют')} />}
    </VStack>
  );
});
